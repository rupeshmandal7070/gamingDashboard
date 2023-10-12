import { SyntheticEvent, useState, ReactElement, Ref, forwardRef } from 'react';

import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Grid,
  Slide,
  Divider,
  Tooltip,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  Tab,
  Tabs,
  TextField,
  Button,
  Typography,
  Dialog,
  Zoom,
  styled
} from '@mui/material';
import Link from 'src/components/Link';

import CloseIcon from '@mui/icons-material/Close';

import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import Label from 'src/components/Label';
import BulkActions from '../../../AllUser/BulkActions';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useSnackbar } from 'notistack';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { AllusersData } from '@/src/constants/AllUserData';
import StrategyDialog from './StrategyDialog';


const DialogWrapper = styled(Dialog)(
  () => `
      .MuiDialog-paper {
        overflow: visible;
      }
`
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(12)};
      height: ${theme.spacing(12)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(45)};
      }
`
);

const CardWrapper = styled(Card)(
  ({ theme }) => `

  position: relative;
  overflow: visible;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    z-index: 1;
    transition: ${theme.transitions.create(['box-shadow'])};
  }
      
    &.Mui-selected::after {
      box-shadow: 0 0 0 3px ${theme.colors.primary.main};
    }
  `
);

const ButtonError = styled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);

const TabsWrapper = styled(Tabs)(
  ({ theme }) => `
    @media (max-width: ${theme.breakpoints.values.md}px) {
      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          box-shadow: none;
      }
    }
    `
);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const getUserRoleLabel = (userRole) => {
  const map = {
    admin: {
      text: 'Administrator',
      color: 'error'
    },
    customer: {
      text: 'Customer',
      color: 'info'
    },
    subscriber: {
      text: 'Subscriber',
      color: 'warning'
    }
  };

  const { text, color } = map[userRole];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (users, query, filters) => {
  return users.filter((user) => {
    let matches = true;

    if (query) {
      const properties = ['email', 'name', 'username'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (user[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.role && user.role !== filters.role) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && user[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (users, page, limit) => {
  return users.slice(page * limit, page * limit + limit);
};

const  StrategySections = ({ users }) => {
  const [selectedItems, setSelectedUsers] = useState([]);
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const tabs = [
    {
      value: 'all',
      label: t('All users')
    },
    {
      value: 'customer',
      label: t('Customers')
    },
    {
      value: 'admin',
      label: t('Administrators')
    },
    {
      value: 'subscriber',
      label: t('Subscribers')
    }
  ];

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    role: null
  });
  const handleTabsChange = (_event, tabsValue) => {
    let value = null;

    if (tabsValue !== 'all') {
      value = tabsValue;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      role: value
    }));

    setSelectedUsers([]);
  };

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllUsers = (event) => {
    setSelectedUsers(event.target.checked ? users.map((user) => user.id) : []);
  };

  const handleSelectOneUser = (_event, userId) => {
    if (!selectedItems.includes(userId)) {
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedUsers((prevSelected) =>
        prevSelected.filter((id) => id !== userId)
      );
    }
  };

  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredUsers = applyFilters(users, query, filters);
  const paginatedUsers = applyPagination(filteredUsers, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeUsers =
    selectedItems.length > 0 && selectedItems.length < users.length;
  const selectedAllUsers = selectedItems.length === users.length;

  const [toggleView, setToggleView] = useState('table_view');

  const handleViewOrientation = (_event, newValue) => {
    setToggleView(newValue);
  };

  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const handleConfirmDelete = () => {
    setOpenConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  const handleDeleteCompleted = () => {
    setOpenConfirmDelete(false);

    enqueueSnackbar(t('The user account has been removed'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
  };
  const [open,setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{margin:'0px 30px'}}>

{/* 
<Grid item xs={12} sx={{marginTop:'30px'}}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item lg={3} sm={6} xs={12} >
              <SuccessfulCard/>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <RejectedCard/>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <PendingCard/>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <ApprovedCard/>
            </Grid>


            <Grid  container
            direction="row"
          marginLeft={'0px'}
            alignItems="stretch"
            spacing={3} sx={{marginTop:'0px'}}>
            <Grid item lg={3} sm={6} xs={12}>
            <AllCard/>
            </Grid>
           
            </Grid>

          </Grid>
        </Grid> */}
        
      <Box
        display="flex"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        pb={3}
      >
        
        {/* <TabsWrapper
          onChange={handleTabsChange}
          scrollButtons="auto"
          textColor="secondary"
          value={filters.role || 'all'}
          variant="scrollable"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </TabsWrapper> */}
        <ToggleButtonGroup
          sx={{
            mt: { xs: 2, sm: 0 }
          }}
          value={toggleView}
          exclusive
          onChange={handleViewOrientation}
        >
          {/* <ToggleButton disableRipple value="table_view">
            <TableRowsTwoToneIcon />
          </ToggleButton> */}
          {/* <ToggleButton disableRipple value="grid_view">
            <GridViewTwoToneIcon />
          </ToggleButton> */}
        </ToggleButtonGroup>
      </Box>

      
      {toggleView === 'table_view' && (
        <Card>
             
          <Box p={2} sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Box>
            <Typography variant='h3'>Strategy Sections</Typography>
            </Box>
            <Box sx={{width:'40%',display:'flex',gap:'10px',justifyContent:'end'}}>
          
          <Box sx={{width:'30%'}}>
            <Button onClick={handleOpen} variant='outlined' size='small' sx={{width:'110px'}}>+ Add New</Button>
            <Dialog open={open} onClose={handleClose}>
                 <StrategyDialog setOpen={setOpen}/>
            </Dialog>
          </Box>
           {!selectedBulkActions && (
            <TextField
              sx={{
                m: 0,width:'50%'
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                )
              }}
              onChange={handleQueryChange}
              placeholder={t('Search...')}
              value={query}
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          )}
          {selectedBulkActions && <BulkActions />}

          </Box>

           
          </Box>

          

          <Divider />

          {AllusersData.length === 0 ? (
            <>
              <Typography
                sx={{
                  py: 10
                }}
                variant="h3"
                fontWeight="normal"
                color="text.secondary"
                align="center"
              >
                {t("We couldn't find any users matching your search criteria")}
              </Typography>
            </>
          ) : (
            <>

           
              <TableContainer>
                
                <Table>
                    
                  <TableHead>
                    <TableRow>
                      {/* <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedAllUsers}
                          indeterminate={selectedSomeUsers}
                          onChange={handleSelectAllUsers}
                        />
                      </TableCell> */}
                      {/* <TableCell>{t('Username')}</TableCell> */}
                      <TableCell>{t('sl')}</TableCell>
                      <TableCell>{t('icon')}</TableCell>
                     
                      <TableCell>{t('heading')}</TableCell>
                      <TableCell align="center">{t('Actions')}</TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {AllusersData.map((user) => {
                      const isUserSelected = selectedItems.includes(user.id);
                      return (
                        <TableRow hover key={user.id} selected={isUserSelected} >
                        
                      
                      
                          
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box p={2}>
                <TablePagination
                  component="div"
                  count={filteredUsers.length}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={limit}
                  rowsPerPageOptions={[5, 10, 15]}
                />
              </Box>
            </>
          )}
        </Card>
      )}
      {toggleView === 'grid_view' && (
        <>
          <Card
            sx={{
              p: 2,
              mb: 3
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {paginatedUsers.length !== 0 && (
                <>
                  <Box display="flex" alignItems="center">
                    <Tooltip
                      arrow
                      placement="top"
                      title={t('Select all users')}
                    >
                      <Checkbox
                        checked={selectedAllUsers}
                        indeterminate={selectedSomeUsers}
                        onChange={handleSelectAllUsers}
                      />
                    </Tooltip>
                  </Box>
                  {selectedBulkActions && (
                    <Box flex={1} pl={2}>
                      <BulkActions />
                    </Box>
                  )}
                </>
              )}
              {!selectedBulkActions && (
                <TextField
                  sx={{
                    my: 0,
                    ml: paginatedUsers.length !== 0 ? 2 : 0
                  }}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchTwoToneIcon />
                      </InputAdornment>
                    )
                  }}
                  onChange={handleQueryChange}
                  placeholder={t('Search by name, email or username...')}
                  value={query}
                  size="small"
                  margin="normal"
                  variant="outlined"
                />
              )}
            </Box>
          </Card>
          {paginatedUsers.length === 0 ? (
            <Typography
              sx={{
                py: 10
              }}
              variant="h3"
              fontWeight="normal"
              color="text.secondary"
              align="center"
            >
              {t("We couldn't find any users matching your search criteria")}
            </Typography>
          ) : (
            <>
              <Grid container spacing={3}>
                {paginatedUsers.map((user) => {
                  const isUserSelected = selectedItems.includes(user.id);

                  return (
                    <Grid item xs={12} sm={6} md={4} key={user.id}>
                      <CardWrapper
                        className={clsx({
                          'Mui-selected': isUserSelected
                        })}
                      >
                        <Box
                          sx={{
                            position: 'relative',
                            zIndex: '2'
                          }}
                        >
                          <Box
                            px={2}
                            pt={2}
                            display="flex"
                            alignItems="flex-start"
                            justifyContent="space-between"
                          >
                            {getUserRoleLabel(user.role)}
                            <IconButton
                              color="primary"
                              sx={{
                                p: 0.5
                              }}
                            >
                              <MoreVertTwoToneIcon />
                            </IconButton>
                          </Box>
                          <Box p={2} display="flex" alignItems="flex-start">
                            <Avatar
                              sx={{
                                width: 50,
                                height: 50,
                                mr: 2
                              }}
                              src={user.avatar}
                            />
                            <Box>
                              <Box>
                                <Link
                                  variant="h5"
                                  href="/management/users/single/1"
                                >
                                  {user.name}
                                </Link>{' '}
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  ({user.username})
                                </Typography>
                              </Box>
                              <Typography
                                sx={{
                                  pt: 0.3
                                }}
                                variant="subtitle2"
                              >
                                {user.jobtitle}
                              </Typography>
                              <Typography
                                sx={{
                                  pt: 1
                                }}
                                variant="h6"
                              >
                                {user.email}
                              </Typography>
                            </Box>
                          </Box>
                          <Divider />
                          <Box
                            pl={2}
                            py={1}
                            pr={1}
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Typography>
                              <b>{user.posts}</b> {t('posts')}
                            </Typography>
                            <Checkbox
                              checked={isUserSelected}
                              onChange={(event) =>
                                handleSelectOneUser(event, user.id)
                              }
                              value={isUserSelected}
                            />
                          </Box>
                        </Box>
                      </CardWrapper>
                    </Grid>
                  );
                })}
              </Grid>
              <Card
                sx={{
                  p: 2,
                  mt: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box>
                  <Typography component="span" variant="subtitle1">
                    {t('Showing')}
                  </Typography>{' '}
                  <b>{limit}</b> {t('of')} <b>{filteredUsers.length}</b>{' '}
                  <b>{t('users')}</b>
                </Box>
                <TablePagination
                  component="div"
                  count={filteredUsers.length}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={limit}
                  labelRowsPerPage=""
                  rowsPerPageOptions={[5, 10, 15]}
                />
              </Card>
            </>
          )}
        </>
      )}
      {!toggleView && (
        <Card
          sx={{
            textAlign: 'center',
            p: 3
          }}
        >
          <Typography
            align="center"
            variant="h4"
            fontWeight="normal"
            color="text.secondary"
            sx={{
              my: 5
            }}
            gutterBottom
          >
            {t(
              'Choose between table or grid views for displaying the users list.'
            )}
          </Typography>
        </Card>
      )}

      <DialogWrapper
        open={openConfirmDelete}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={closeConfirmDelete}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={5}
        >
          <AvatarError>
            <CloseIcon />
          </AvatarError>

          <Typography
            align="center"
            sx={{
              py: 4,
              px: 6
            }}
            variant="h3"
          >
            {t('Are you sure you want to permanently delete this user account')}
            ?
          </Typography>

          <Box>
            <Button
              variant="text"
              size="large"
              sx={{
                mx: 1
              }}
              onClick={closeConfirmDelete}
            >
              {t('Cancel')}
            </Button>
            <ButtonError
              onClick={handleDeleteCompleted}
              size="large"
              sx={{
                mx: 1,
                px: 3
              }}
              variant="contained"
            >
              {t('Delete')}
            </ButtonError>
          </Box>
        </Box>
      </DialogWrapper>
    </Box>
  );
};

StrategySections.propTypes = {
  users: PropTypes.array.isRequired
};

StrategySections.defaultProps = {
  users: []
};

export default StrategySections;

import { Fragment } from 'react';

import {
  Box,
  ListItemAvatar,
  ListItemText,
  Divider,
  List,
  Card,
  alpha,
  Button,
  LinearProgress,
  Typography,
  Avatar,
  styled,
  ListItem,
  useTheme,
  linearProgressClasses,
  IconButton
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Link from 'src/components/Link';

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background: ${theme.colors.secondary.main};
    color: ${theme.palette.getContrastText(theme.colors.secondary.main)};
    font-size: ${theme.typography.pxToRem(11)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadius};
    padding: ${theme.spacing(0.5, 1.5, 0.3)};
  `
);

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.primary.main};
        }
    `
);

function Block1() {
  const { t } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      name: 'Munroe Dacks',
      jobtitle: 'Dacks@gmail.com',
      company: 'Trudoo',
      avatar: '/static/images/avatars/1.jpg',
      value: 65
    },
    {
      id: 2,
      name: 'Gunilla Canario',
      jobtitle: 'Associate Professor',
      company: 'Buzzdog',
      avatar: '/static/images/avatars/2.jpg',
      value: 76
    },
    {
      id: 3,
      name: 'Rowena Geistmann',
      jobtitle: 'Pharmacist',
      company: 'Yozio',
      avatar: '/static/images/avatars/3.jpg',
      value: 54
    },
    {
      id: 4,
      name: 'Ede Stoving',
      jobtitle: 'VP Product Management',
      company: 'Cogibox',
      avatar: '/static/images/avatars/4.jpg',
      value: 23
    },
    {
      id: 5,
      name: 'Crissy Spere',
      jobtitle: 'Social Worker',
      company: 'Babbleblab',
      avatar: '/static/images/avatars/5.jpg',
      value: 16
    },
    {
      id: 6,
      name: 'Crissy Spere',
      jobtitle: 'Social Worker',
      company: 'Babbleblab',
      avatar: '/static/images/avatars/5.jpg',
      value: 16
    },
    {
      id: 7,
      name: 'Crissy Spere',
      jobtitle: 'Social Worker',
      company: 'Babbleblab',
      avatar: '/static/images/avatars/5.jpg',
      value: 16
    }
  ];

  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          background: `${theme.colors.alpha.black[5]}`
        }}
        p={2}
      >
        <Box>
          <Typography variant="h3">{t('Recent Users')}</Typography>
          <Typography
            
            fontWeight="bold"
            sx={{
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
          >
            {t('+30%  this month')}
          </Typography>
        </Box>
        <IconButton color="primary">
            <MoreVertTwoToneIcon />
          </IconButton>
      </Box>
      <Divider/>
      <List disablePadding sx={{maxHeight:'380px',overflowY:'scroll'}}>
        {items.map((item) => (
          <Fragment key={item.id}>
            {/* <Divider /> */}
            <ListItem
              sx={{
               
                display: { xs: 'block', sm: 'flex' },
                py: 2,
                px: 2.5
              }}
            >
              <ListItemAvatar
                sx={{
                  minWidth: 'auto',
                  mr: 2,
                  mb: { xs: 2, sm: 0 }
                }}
              >
                <Avatar
                  sx={{
                    width: 42,
                    height: 42
                  }}
                  alt={item.name}
                  src={item.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  flexGrow: 0,
                  maxWidth: '50%',
                  flexBasis: '50%'
                }}
                disableTypography
                primary={
                  <Typography color="text.primary" variant="h5">
                    {item.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography noWrap variant="subtitle2">
                      {item.jobtitle} 
                      
                    </Typography>
                    <Typography sx={{fontSize:'12px'}} noWrap variant="subtitle2">
                      12/12/12  
                    </Typography>
                  </>
                }
              />
             
            </ListItem>
          </Fragment>
        ))}
      </List>
    </Card>
  );
}

export default Block1;

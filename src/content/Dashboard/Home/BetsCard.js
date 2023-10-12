import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Typography,
    IconButton,
    Tooltip,
    styled,
    Button
  } from '@mui/material';
  import { useTranslation } from 'react-i18next';
  import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
//   import Label from 'src/components/Label';
  import ArrowUpwardTwoTone from '@mui/icons-material/ArrowUpwardTwoTone';
import { Language } from '@mui/icons-material';
  
  const ArrowUpwardWrapper = styled(ArrowUpwardTwoTone)(
    ({ theme }) => `
        color:  ${theme.palette.success.main};
  `
  );
  function BetsCard() {
    const { t } = useTranslation();
  
    const data = {
      value: '20'
    };
  
    return (
      <Card
        sx={{
          px: 1,
          pt: 1,
          mt:2,
        }}
      >
        {/* <CardHeader
          sx={{
            pb: 0
          }}
          titleTypographyProps={{
            variant: 'subtitle2',
            fontWeight: 'bold',
            color: 'textSecondary'
          }}
          action={
            <Tooltip
              placement="top"
              arrow
              title={t('This section can have a description!')}
            >
              <IconButton size="small" color="secondary">
                <HelpOutlineTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          }
          title={t('Gross Sales')}
        /> */}
        <CardContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>
          <Typography variant="h6">Total Bets</Typography>
          <Typography variant="h3">{data.value}</Typography>
          </Box>
          

          <Box sx={{ display: 'flex',alignItems: 'center',background:'#0075FF',padding:'10px',borderRadius:'13px'}}>
            <Language sx={{color:'white',fontSize:'35px'}}/>
          </Box>
         {/* <Button variant='outlined' size='small' sx={{borderRadius:'3px'}}>View All</Button> */}
        </CardContent>
      </Card>
    );
  }
  
  export default BetsCard
  
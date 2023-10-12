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
import { Groups, Language } from '@mui/icons-material';

  
  const ArrowUpwardWrapper = styled(ArrowUpwardTwoTone)(
    ({ theme }) => `
        color:  ${theme.palette.success.main};
  `
  );
  function  IconCard() {
    const { t } = useTranslation();
  
    const data = {
      value: '34'
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
       sx={{height:'350px',border:'2px solid white'}}
        >
        
          

          
        </CardContent>
      </Card>
    );
  }
  
  export default IconCard
  
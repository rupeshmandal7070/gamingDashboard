import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Typography,
    IconButton,
    Tooltip,
    styled,
    Button,
    Divider
  } from '@mui/material';

  import { useTranslation } from 'react-i18next';
  import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
//   import Label from 'src/components/Label';
  import ArrowUpwardTwoTone from '@mui/icons-material/ArrowUpwardTwoTone';
import { ArrowForward, Language } from '@mui/icons-material';
  
  const ArrowUpwardWrapper = styled(ArrowUpwardTwoTone)(
    ({ theme }) => `
        color:  ${theme.palette.success.main};
  `
  );
  function DepositCard() {
    const { t } = useTranslation();
  
    const data = {
      value: '$3,854.15'
    };
  
    return (
      <Card
        sx={{
          px: 1,
          pt: 1,
          mt:2,
         
         
          
        }}
      >
        <CardContent>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography sx={{fontSize:'22px',fontWeight:'500'}}>Deposit Comission</Typography>
            <Button variant='outlined' size='small' sx={{height:'24px'}}>Enabeled</Button>
        </Box>

        {/* <Divider/> */}
        <Box sx={{mt:3,width:'100%'}}>
        <Button variant='contained' size='small' sx={{width:'100%',borderRadius:'5px',}}>Disable Now</Button>

        </Box>

        <Box sx={{mt:3,width:'100%'}}>
        <Button variant='contained' size='large' sx={{width:'100%',borderRadius:'5px',}}>Level Commission</Button>

        </Box>

        <Box sx={{mt:3,width:'100%',display:'flex',gap:'20px'}}>
        <Button variant='outlined' size='medium' sx={{width:'50%',borderRadius:'5px',}}>HOW MANY LI</Button>
        <Button variant='contained' size='medium' sx={{width:'50%',borderRadius:'5px',}}>GENERATE</Button>

        </Box>
          
        </CardContent>
      </Card>
    );
  }
  
  export default DepositCard
  
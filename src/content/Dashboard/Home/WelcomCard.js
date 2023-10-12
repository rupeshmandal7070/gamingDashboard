import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Typography,
    IconButton,
    Tooltip,
    styled
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
  function WelcomeCard() {
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
          height:'300px',
         
          
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
           justifyContent:'space-between',
            flexDirection:'column',
            height:'300px',
            // backgroundColor:"black !important",
            backgroundImage:`url(${'/cardimgfree.png'})`,
            backgroundSize:'cover',
            borderRadius:'10px'
          }}
        >
            <Box  sx={{
            display: 'flex',
            gap:'10px',
            flexDirection:'column',
          }}
          >
            <Typography variant='h5'>Welcome Back</Typography>
            <Typography variant='h1'>Mark Johnson</Typography>

            <Box>
            <Typography variant='h5'>Glad to see you again!</Typography>
            <Typography variant='h5'>Ask me anything.</Typography>
            </Box>

            </Box>

            <Box>
            <Typography variant='h5' sx={{display:'flex',alignItems:'center'}}>Tap to record <ArrowForward/></Typography>
            </Box>
        
        </CardContent>
      </Card>
    );
  }
  
  export default WelcomeCard
  
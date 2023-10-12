import { useContext, useEffect, useRef, useState } from 'react';
import {
  Popover,
  styled,
  Button,
  MenuItem,
  Menu,
  Typography,
  Stack,
  Divider,
  Box,
  Tooltip,

  FormControlLabel,
  Drawer,

} from '@mui/material';
import Switch from '@mui/material/Switch';
import { ThemeContext } from 'src/theme/ThemeProvider';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import Fab from '@mui/material/Fab';
import { useTranslation } from 'react-i18next';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import Link from 'src/components/Link';
import { Close } from '@mui/icons-material';
import Label from '../Label';
import Switches from './Switch';
import ThemeSwitches from './ChangeThemeSwitch';

const ThemeSettingsButton = styled(Box)(
  ({ theme }) => `
          position: fixed;
          z-index: 9999;
          right: ${theme.spacing(4)};
          bottom: ${theme.spacing(4)};
          
          &::before {
              width: 30px;
              height: 30px;
              content: ' ';
              position: absolute;
              border-radius: 100px;
              left: 13px;
              top: 13px;
              background: ${theme.colors.primary.main};
              animation: ripple 1s infinite;
              transition: ${theme.transitions.create(['all'])};
          }

          .MuiSvgIcon-root {
            animation: pulse 1s infinite;
            transition: ${theme.transitions.create(['all'])};
          }
  `
);

const ThemeToggleWrapper = styled(Box)(
  ({ theme }) => `
          padding: ${theme.spacing(2)};
          min-width: 220px;
  `
);

const ButtonWrapper = styled(Box)(
  ({ theme }) => `
        cursor: pointer;
        position: relative;
        border-radius: ${theme.general.borderRadiusXl};
        padding: ${theme.spacing(0.8)};
        display: flex;
        flex-direction: row;
        align-items: stretch;
        min-width: 80px;
        box-shadow: 0 0 0 2px ${theme.colors.primary.lighter};

        &:hover {
            box-shadow: 0 0 0 2px ${theme.colors.primary.light};
        }

        &.active {
            box-shadow: 0 0 0 2px ${theme.palette.primary.main};

            .colorSchemeWrapper {
                opacity: .6;
            }
        }
  `
);

const ColorSchemeWrapper = styled(Box)(
  ({ theme }) => `

    position: relative;

    border-radius: ${theme.general.borderRadiusXl};
    height: 28px;
    
    &.colorSchemeWrapper {
        display: flex;
        align-items: stretch;
        width: 100%;

        .primary {
            border-top-left-radius: ${theme.general.borderRadiusXl};
            border-bottom-left-radius: ${theme.general.borderRadiusXl};
        }

        .secondary {
            border-top-right-radius: ${theme.general.borderRadiusXl};
            border-bottom-right-radius: ${theme.general.borderRadiusXl};
        }

        .primary,
        .secondary,
        .alternate {
            flex: 1;
        }
    }

    &.pureLight {
        .primary {
            background: #5569ff;
        }
    
        .secondary {
            background: #f2f5f9;
        }
    }

    &.greyGoose {
        .primary {
            background: #2442AF;
        }
    
        .secondary {
            background: #F8F8F8;
        }
    }
    
    &.purpleFlow {
        .primary {
            background: #9b52e1;
        }
    
        .secondary {
            background: #00b795;
        }
    }
    
    &.nebulaFighter {
        .primary {
            background: #8C7CF0;
        }
    
        .secondary {
            background: #070C27;
        }
    }

    &.greenFields {
        .primary {
            background: #44a574;
        }
    
        .secondary {
            background: #141c23;
        }
    }

    &.darkSpaces {
        .primary {
            background: #CB3C1D;
        }
    
        .secondary {
            background: #1C1C1C;
        }
    }

  `
);

const CheckSelected = styled(Box)(
  ({ theme }) => `
    background: ${theme.palette.success.main};
    border-radius: 50px;
    height: 26px;
    width: 26px;
    color: ${theme.palette.success.contrastText};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -13px 0 0 -13px;
    z-index: 5;

    .MuiSvgIcon-root {
        height: 16px;
        width: 16px;
    }

  `
);

const ThemeSettings = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setThemeName = useContext(ThemeContext);

  useEffect(() => {
    const curThemeName =
      window.localStorage.getItem('appTheme') || 'PureLightTheme';
    setTheme(curThemeName);
  }, []);

  const [theme, setTheme] = useState('PureLightTheme');

  const changeTheme = (theme) => {
    setTheme(theme);
    setThemeName(theme);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <>
      <ThemeSettingsButton>
        <Tooltip arrow title={t('Theme Settings')}>
          <Fab ref={ref} onClick={handleOpen} color="primary" aria-label="add">
            <SettingsTwoToneIcon />
          </Fab>
        </Tooltip>

       
        <Drawer
        open={isOpen}
        onClose={handleClose}
         anchor='right'
         sx={{width:'350px',right:'0px'}}
        >
          
          <Box sx={{width:'100%',border:'5px solid white',right:'0px',display:'flex',justifyContent:'right'}}>
          <Box p={2}  sx={{width:'350px'}}>

            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Box>
              <Typography sx={{fontSize:'22px',fontWeight:'600'}}>Soft UI Configurator</Typography>
              <Typography sx={{fontSize:'16px',fontWeight:'500'}} >See our dashboard options.</Typography>
            </Box>
           
            <Close onClick={handleClose} sx={{cursor:'pointer'}}/>
            </Box>

           <Box sx={{mt:6}}>
           <Typography sx={{fontSize:'17px',fontWeight:'600'}}>Sidebar Colors</Typography>
           <Box sx={{display:'flex',gap:'8px',mt:1}}>
                <Box sx={{height:'25px',width:'25px',borderRadius:'50%',background:'#C212A1'}}></Box>
                <Box sx={{height:'25px',width:'25px',borderRadius:'50%',background:'#262B4B'}}></Box>
                <Box sx={{height:'25px',width:'25px',borderRadius:'50%',background:'#2191FE'}}></Box>
                <Box sx={{height:'25px',width:'25px',borderRadius:'50%',background:'#5FD031'}}></Box>
                <Box sx={{height:'25px',width:'25px',borderRadius:'50%',background:'#F77836'}}></Box>
                <Box sx={{height:'25px',width:'25px',borderRadius:'50%',background:'#F12830'}}></Box>
           </Box>
           </Box>

           <Box sx={{mt:3}}>
           <Typography sx={{fontSize:'17px',fontWeight:'600'}}>Sidenav Type</Typography>
           <Typography>Choose between 2 different sidenav types</Typography>

           <Box sx={{display:'flex',gap:'20px',marginTop:'20px'}}>
            <Button variant='outlined'>TRANSPARENT</Button>
            <Button variant='outlined' sx={{width:'130px'}}>WHITE</Button>
           </Box>
           </Box>

           <Box sx={{mt:3}}>
           <Typography sx={{fontSize:'17px',fontWeight:'600'}}>Navbar Fixed</Typography>
           
           </Box>
           <Switches/>


           <Box sx={{mt:3}}>
           <Typography sx={{fontSize:'17px',fontWeight:'600'}}>Light/Dark</Typography>
           
           </Box>
           <ThemeSwitches/>
          
          </Box>

          </Box>
        
          
         
        </Drawer>
       
      </ThemeSettingsButton>
    </>
  );
};

export default ThemeSettings;

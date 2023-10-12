import { Box } from '@mui/material';
import HeaderNotifications from './Notifications';
import LanguageSwitcher from './LanguageSwitch';
import Chat from './Chat';


function HeaderButtons() {
  return (
    <Box>
      <HeaderNotifications />
      {/* <LanguageSwitcher /> */}
      <Chat />
    </Box>
  );
}

export default HeaderButtons;

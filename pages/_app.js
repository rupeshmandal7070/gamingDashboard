
import Loader from '@/src/components/Loader';
import { AuthConsumer } from '@/src/context/JWTauthContext';
import ThemeProviderWrapper from '@/src/theme/ThemeProvider'
import '@/styles/globals.css'
import { CssBaseline } from '@mui/material'



export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    

   <ThemeProviderWrapper>
    <CssBaseline/>
    <AuthConsumer>
                    {(auth) =>
                      !auth.isInitialized ? (
                        <Loader />
                      ) : (
                        getLayout(<Component {...pageProps} />)
                      )
                    }
                  </AuthConsumer>

   </ThemeProviderWrapper>
    
    ) 
}

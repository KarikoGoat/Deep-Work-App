import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppWrapper } from '../context/AppContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <AppWrapper >
          <Component  {...pageProps} />
        </AppWrapper>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  ) 
}

export default MyApp

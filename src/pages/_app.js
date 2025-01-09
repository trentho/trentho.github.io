// _app.js

import '../styles/globals.css';  
import '@mantine/core/styles.css';
import 'tailwindcss/tailwind.css';
import 'animate.css';

import Navbar from '../components/navbar'; // Import Navbar
import { MantineProvider } from '@mantine/core';



function MyApp({ Component, pageProps }) {
  return(
    <MantineProvider>
      <Navbar /> {/* Add the Navbar component here */}
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;

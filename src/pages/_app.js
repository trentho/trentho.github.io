// _app.js

import '../styles/globals.css';  // Make sure your global CSS file is imported
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is loaded
import 'animate.css';
import Navbar from '../components/navbar'; // Import Navbar


function MyApp({ Component, pageProps }) {
  return(
  <div>
    <Navbar/>
    <Component {...pageProps} />
  </div>
  );
}

export default MyApp;

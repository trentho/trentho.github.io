// _app.js

import '../styles/globals.css';  // Make sure your global CSS file is imported
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is loaded

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js'); // Dynamically load Bootstrap JS
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

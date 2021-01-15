import '../styles/globals.scss';
import Layout from '../components/layout/Layout';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp;

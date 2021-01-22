import Header from '../header/Header';
import Footer from '../footer/Footer';
import layoutStyles from "./layout.module.scss";

const Layout = ({ children }) => (
    <div className={layoutStyles.pageContent}>
        <Header/>
            <main className={layoutStyles.mainContent}>
                <div className={layoutStyles.contentContainer}>
                { children }
                </div>
            </main>
        <Footer/>
    </div>
);


export default Layout;
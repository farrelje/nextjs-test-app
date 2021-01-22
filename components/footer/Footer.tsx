import footerStyles from './footer.module.scss';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={footerStyles.footer}>
            <div>RecipeStack {year}</div>
        </footer>
    )
}

export default Footer;
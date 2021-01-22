import headerStyles from './header.module.scss';
const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}>
                <a href="/">RecipeStack</a>
            </div>
            <nav className={headerStyles.mainNav}>
                <a href="/">Recipes</a>
                <a href="/">About</a>
            </nav>
            <div className={headerStyles.account}>
                <a href="/">Login</a>
                <a href="/">Sign up</a>
            </div>
        </header>
    )
}

export default Header;
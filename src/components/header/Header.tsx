import { Hamburger } from "./Hamburger";
import styles from "./styles/Header.module.scss";

type HeaderProps = {
    tittle: string;
}

export const Header = (props:HeaderProps) => {
    const { tittle } = props;

    return (
        <div className={styles.headerContainer}>
            <div className={styles.tittleContainer}>
                <h1>{tittle}</h1>
            </div>
            <div className={styles.linkContainer}>
                <Hamburger>
                    <NavItems />
                </Hamburger>
            </div>
        </div>
    )
};

const NavItems = () => {

    return (
        <nav className={styles.navItems}>Hello world!</nav>
    )
}
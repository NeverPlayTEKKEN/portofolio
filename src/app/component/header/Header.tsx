import { Hamburger } from "./Hamburger";
import styles from "./styles/Header.module.scss";

type HeaderProps = {
    tittle: string;
}

const Header = (props:HeaderProps) => {
    const {tittle} = props;

    return (
        <div className={styles.headerContainer}>
            <div className={styles.tittleContainer}>
                <h1>{tittle}</h1>
            </div>
            <div className={styles.linkContainer}>
                <Hamburger />
            </div>
        </div>
    )
};
export default Header;
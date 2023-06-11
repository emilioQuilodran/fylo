import Image from "next/image";
import styles from '../styles/header.module.scss'
import Link from "next/link";

const Header = () => {
    return(
        <header className={styles.header}>
            <div>
                <Image 
                    src="/images/logo.svg"
                    alt="Fylo"
                    width={80}
                    height={29}
                />
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            Features
                        </li>
                        <li>
                            Teams
                        </li>
                        <li>
                            Sign in
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
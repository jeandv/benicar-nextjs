import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from '../styles/Header.module.css';
import { Selector } from './Selector';
import { useLanguage } from '../helpers/useLanguage';
import Navbar from './NavBar';

export const Header = React.memo(() => {

    const { selectedLanguage } = useLanguage();

    const headerItems = selectedLanguage.header;

    return (
        <header className={Styles.header}>
            <div>
                <div>
                    <Link href='/'>
                        <Image className={Styles.benicarLogo}
                            src="/benicar-02.png"
                            alt="benicar-logo"
                            width={200}
                            height={150}
                            objectFit='contain'
                        />
                    </Link>
                </div>
                <nav className={Styles.navItemsHeader}>
                    <ul>
                        {
                            headerItems.map((item) => {
                                return (
                                    <li key={item.title}>
                                        <Link href={item.link}>
                                            <a>{item.title}</a>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <li><Selector /></li>
                    </ul>
                </nav>
                <Navbar />
            </div>
        </header>
    )
}
)

Header.displayName = 'Header';
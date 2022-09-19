
import React, { useState } from "react"
import Styles from "../styles/NavBar.module.css"
import Link from 'next/link';
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { Selector } from "./Selector";
import { useLanguage } from "../helpers/useLanguage";

const NavBar = () => {

    const { selectedLanguage } = useLanguage();
    const [Mobile, setMobile] = useState(false);

    const headerItems = selectedLanguage.header;

    return (
        <>
            <nav className={Styles.navbar}>
                <ul className={Mobile ? Styles.navLinksMobile : Styles.ocultar}
                    onClick={() => setMobile(false)}>
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
                </ul>
                <button className={Styles.mobileMenuIcon}
                    onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross style={{ color: '#026F9A' }} /> : <FaBars />}
                </button>
                <Selector className={Styles.selector} />
            </nav>
        </>
    )
}

export default NavBar;
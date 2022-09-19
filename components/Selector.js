import { useRouter } from 'next/router';
import Styles from '../styles/Header.module.css';

export function Selector() {

    const { push, pathname } = useRouter();

    const handleChange = e => push(pathname, pathname, { locale: e.target.value });

    return (
        <select className={Styles.selectLanguage} onChange={handleChange}>
            <option value="es">Esp</option>
            <option value="en">Eng</option>
        </select>
    )
}
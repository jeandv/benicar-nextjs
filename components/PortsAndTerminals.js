import React from 'react';
import Image from 'next/image';
import Styles from '../styles/PortsTerminals.module.css';
import { useLanguage } from '../helpers/useLanguage';

export const PortsAndTerminals = React.memo(() => {

    const { selectedLanguage } = useLanguage();

    const contentTeam = selectedLanguage.portsAndTerminals.allPortsTerm;

    const renderTeam = () =>
        contentTeam.map(cont => (
            <div key={cont.id}>
                <Image src={cont.photo} alt={'team-' + cont.id} width={300} height={200} objectFit='cover' />
                <h4>{cont.name}</h4>
                <p>{cont.profession}</p>
            </div>
        ));

    return (
        <section className={Styles.PortsTerminals}>
            <div>
                <h2>{selectedLanguage.portsAndTerminals.title}</h2>
            </div>
            <div>
                {renderTeam()}
            </div>
        </section>
    )
})

PortsAndTerminals.displayName = 'PortsAndTerminals';
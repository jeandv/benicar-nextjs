import React from 'react';
import Image from 'next/image';
import Styles from '../styles/PortsTerminals.module.css';
import { useLanguage } from '../helpers/useLanguage';
import { motion } from 'framer-motion';

export const PortsAndTerminals = React.memo(() => {

    const { selectedLanguage } = useLanguage();

    const contentTeam = selectedLanguage.portsAndTerminals.allPortsTerm;

    const renderTeam = () =>
        contentTeam.map(cont => (
            <motion.div key={cont.id}
                whileInView={{ opacity: [0, 1] }}
                transition={{
                    duration: 0.2,
                    delayChildren: 0.2,
                    type: "tween",
                    repeat: false,
                    ease: "easeOut"
                }}>
                <Image src={cont.photo} alt={'team-' + cont.id} width={300} height={200} objectFit='cover' />
                <h4>{cont.name}</h4>
            </motion.div>
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
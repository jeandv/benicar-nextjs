import { useRouter } from 'next/router';
import React from 'react';
import Styles from '../styles/Hero.module.css';

export const Hero = ({ title }) => {

    const { pathname } = useRouter();

    return (
        <section className={Styles.heroWelcome}>
            <h1>{title}</h1>
            <video autoPlay muted playsInline loop
                className={Styles.backgroundVideo}
                src='/benicar-video.mp4'
            ></video>
            <div className={Styles.backgroundVideoColor}></div>
            {pathname === '/' &&
                <svg className={Styles.Waves}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={Styles.Parallax}>
                        <use xlinkHref="#gentle-wave"
                            x={48} y={7}
                            fill="#fff" />
                    </g>
                </svg>
            }
        </section>
    )
}

import Head from 'next/head';

export const SEO = ({
    title,
    description,
    keywords,
    canonical,
    author = 'Álvaro L. Benítez',
    mail = 'mailto:manager@benicarmarine.com'
}) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/benicar-05.png" />
            <link rel="apple-touch-icon" href="/benicar-05.png" />
            <link rel="canonical" href={canonical} />
            <meta name="author" content={author} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords}></meta>
            <link rel="me" href={mail} />
        </Head>
    )
}

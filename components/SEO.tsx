import Head from 'next/head';

const SEO = () => {
    const title = "Gautam.app - Where Ideas are Born";
    const description = "Welcome to Gautam.app - a place where mediocre ideas are celebrated and given a chance to flourish. Our featured image showcases the epitome of averageness. Join us in our mission to make the world a less interesting place.";

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content="/icons/banner2.png" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/icons/banner2.png" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="/icons/banner2.png" />
        </Head>
    );
};

export default SEO;

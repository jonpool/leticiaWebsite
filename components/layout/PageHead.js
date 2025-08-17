import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Brows By Leticia | Expert Eyebrow Design & Beauty Services in Melrose, MA"}
                </title>
                <meta name="description" content="Professional eyebrow design, brow lamination, and Hidragloss services by Leticia in Melrose, MA. Transform your brows with expert care and premium treatments. Book your appointment today!" />
                <meta name="keywords" content="eyebrow design, brow lamination, Hidragloss, Melrose MA, eyebrow shaping, brow styling, beauty services, Brows By Leticia" />
                <meta name="author" content="Brows By Leticia" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content={headTitle ? headTitle : "Brows By Leticia | Expert Eyebrow Design & Beauty Services in Melrose, MA"} />
                <meta property="og:description" content="Professional eyebrow design, brow lamination, and Hidragloss services by Leticia in Melrose, MA. Transform your brows with expert care and premium treatments." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
        </>
    )
}

export default PageHead
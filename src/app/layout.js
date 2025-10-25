import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Inter} from "next/font/google";

import {Providers} from "@/app/provider";
import {siteConfig} from "@/config/site";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
});

export const metadata = {
    title: {
        default: siteConfig.seo.title,
        template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.seo.description,
    keywords: siteConfig.seo.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://dev-aria.com',
        title: siteConfig.seo.title,
        description: siteConfig.seo.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.seo.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.seo.title,
        description: siteConfig.seo.description,
        images: [siteConfig.seo.ogImage],
        creator: '@aria_agk'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className="bg-smokeWhite">
        <body
            className={`${inter.className} bg-smokeWhite text-blck`}
        >
        <Providers>
            <Header/>
            <main className='text-blck max-w-[80rem] mx-auto px-6 md:px-10 pt-0'>
                {children}
            </main>
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}

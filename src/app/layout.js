import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Inter} from 'next/font/google';
import {Providers} from "@/app/provider";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
});

export const metadata = {
    title: "DEV Aria",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
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

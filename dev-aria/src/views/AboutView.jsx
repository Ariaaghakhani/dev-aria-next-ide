import React from 'react';
import Header from "@/components/Header";
import About from "@/app/about/page";
import Footer from "@/components/Footer";

function AboutView(props) {
    return (
        <div>
            <Header/>
            <About/>
            <Footer/>
        </div>
    );
}

export default AboutView;
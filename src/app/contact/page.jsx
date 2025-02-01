'use client'
import React, {useState} from 'react';
import {Input, Textarea, Button} from "@heroui/react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [buttonLoad, setButtonLoad] = useState(false);
    function submitForm(){
        setButtonLoad(true);
        setTimeout(()=>{
            setButtonLoad(false);
        },2000)
    }
    return (
        <div className="flex flex-wrap justify-center">
            <h2 className="w-full text-center text-[3.5rem] ">Get in <span className="text-gry">touch</span></h2>
            <h3 className="text-center text-gry max-w-[40rem] mb-8">
                Need a <strong className="text-black uppercase font-medium">front-end developer</strong> to craft sleek, high-performance web
                experiences? Whether you’re looking for a <strong className="text-black uppercase font-medium">Vue.js expert,</strong>  a developer to enhance your UI, or a collaborator for your next
                project, I’m here to help. From <strong className="text-black uppercase font-medium">responsive design </strong>
                to <strong className="text-black uppercase font-medium">interactive web applications,</strong> I bring ideas
                to life
                with clean, efficient code.

                Let’s discuss how we can work together—drop me a message today!
            </h3>
            <form onSubmit={submitForm} className="bg-contact container max-w-[60rem] p-20 bg-white mb-20 rounded-[2rem]">
                <ul className="flex justify-center items-center *:me-4 mb-12">
                    <li className="menu-hovered">
                        <Link href={'https://github.com/Ariaaghakhani'}
                              className="rounded-full w-9 h-9 flex justify-center items-center p-2.5 [border:1px_solid_#dee2e5]">
                            <FontAwesomeIcon icon={faGithub} className="text-gry max-w-[16px] max-h-[16px]"/>
                        </Link>
                    </li>
                    <li className="menu-hovered">
                        <Link href={'https://instagram.com/aria.agk'}
                              className="rounded-full w-9 h-9 flex justify-center items-center p-2.5 [border:1px_solid_#dee2e5]">
                            <FontAwesomeIcon icon={faInstagram} className="text-gry max-w-[16px] max-h-[16px]"/>
                        </Link>
                    </li>
                    <li className="menu-hovered">
                        <Link href={'https://www.linkedin.com/in/aria-aghakhani/'}
                              className="rounded-full w-9 h-9 flex justify-center items-center p-2.5 [border:1px_solid_#dee2e5]">
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-gry max-w-[16px] max-h-[16px]"/>
                        </Link>
                    </li>
                    <li className="menu-hovered">
                        <Link href={'https://wa.me/+989121946210'}
                              className="rounded-full w-9 h-9 flex justify-center items-center p-2.5 [border:1px_solid_#dee2e5]">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-gry max-w-[16px] max-h-[16px]"/>
                        </Link>
                    </li>
                    <li className="menu-hovered">
                        <Link href={'mailto:contact@dev-aria.com'}
                              className="rounded-full w-9 h-9 flex justify-center items-center p-2.5 [border:1px_solid_#dee2e5]">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gry max-w-[16px] max-h-[16px]"/>
                        </Link>
                    </li>
                </ul>
                <Input
                    type={"text"}
                    label="Name"
                    value={name}
                    onValueChange={setName}
                    variant={"bordered"}
                    color={"default"}
                    radius={"full"}
                    className="mb-8"/>
                <Input
                    type={"email"}
                    label="Email"
                    value={email}
                    onValueChange={setEmail}
                    variant={"bordered"}
                    color={"default"}
                    radius={"full"}
                    className="mb-8"/>
                <Input
                    type={"text"}
                    label="Subject"
                    value={subject}
                    onValueChange={setSubject}
                    variant={"bordered"}
                    color={"default"}
                    radius={"full"}
                    className="mb-8"/>
                <Textarea
                    label="Message"
                    variant={"bordered"}
                    color={"default"}
                    radius={"full"}
                    className="mb-8"/>
                <Button
                    isLoading={buttonLoad}
                    className="bg-blck text-white rounded-full"
                    type="submit"
                >
                    Send Message
                </Button>

            </form>
        </div>
    );
}

export default Contact;
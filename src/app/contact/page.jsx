'use client'
import React, {useState} from 'react';
import {Input, Textarea, Button} from "@heroui/react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {ToastContainer, toast, Bounce} from "react-toastify";
import axios from "axios";
import {Toast} from "next/dist/client/components/react-dev-overlay/internal/components/Toast";

function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');
    const [buttonLoad, setButtonLoad] = useState(false);
    let API_URL = 'https://66b4d9dd9f9169621ea49b31.mockapi.io/form'
    function saveForm(name,email,subject,message){
        const promise = axios({
            method:'POST',
            url:`${API_URL}`,
            data:{
                name:name,
                email:email,
                subject:subject,
                message:message
            }
        })
        return promise
    }
    function submitForm(event){
        event.preventDefault()
        setButtonLoad(true);
        saveForm(name,email,subject,msg)
            .then((res)=>{
                setButtonLoad(false)
                setName('')
                setEmail('')
                setSubject('')
                setMsg('')
                toast.success('Your message is on its way! I can’t wait to chat.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
            .catch((err)=>{
                console.log(err)
                toast.error('Something went wrong !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setButtonLoad(false)
            })
    }
    return (
        <div className="flex flex-wrap justify-center">
            <h2 className="w-full text-center text-[3.5rem] ">Get in <span className="text-gry">touch</span></h2>
            <h3 className="text-center text-gry container max-w-[50rem] px-20 py-8 mb-8">
                Need a <strong className="text-black uppercase font-medium">front-end developer</strong> to craft sleek, high-performance web
                experiences? Whether you’re looking for a <strong className="text-black uppercase font-medium">Vue.js expert,</strong>  a developer to enhance your UI, or a collaborator for your next
                project, I’m here to help. From <strong className="text-black uppercase font-medium">responsive design </strong>
                to <strong className="text-black uppercase font-medium">interactive web applications,</strong> I bring ideas
                to life
                with clean, efficient code.

                Let’s discuss how we can work together—drop me a message today!
            </h3>
            <form onSubmit={submitForm} className="bg-contact container max-w-[50rem] p-20 bg-white mb-20 rounded-[2rem]">
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
                    value={msg}
                    onValueChange={setMsg}
                    className="mb-8"/>
                <Button
                    isLoading={buttonLoad}
                    className="bg-blck text-white rounded-full"
                    type="submit"
                >
                    Send Message
                </Button>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default Contact;
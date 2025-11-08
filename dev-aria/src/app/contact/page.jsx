'use client'
import React, {useState} from 'react';
import {Button, Input, Textarea} from "@heroui/react";
import SocialLinks from "@/components/SocialLinks";

import {db} from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [buttonLoad, setButtonLoad] = useState(false);

  async function submitForm(event) {
    event.preventDefault();
    setButtonLoad(true);
    try {
      await addDoc(collection(db, 'forms'),{
        name,email,subject,message:msg,createdAt: new Date(),
      });
      setName("");
      setEmail("");
      setSubject("");
      setMsg("");
      toast.success("Your message has been sent.", { position: "top-right" });
    } catch(err) {
      console.log("Error !",err)
      toast.error("Something went wrong!", { position: "top-right" });
    } finally {
      setButtonLoad(false);
    }
  }

  return (
    <div className="flex flex-wrap justify-center">
      <h2 className="w-full text-center text-[3.5rem] ">Get in <span className="text-gry">touch</span></h2>
      <h3 className="text-center text-gry container max-w-[50rem] px-20 py-8 mb-8">
        Need a <strong className="text-black uppercase font-medium">front-end developer</strong> to craft sleek,
        high-performance web
        experiences? Whether you’re looking for a <strong className="text-black uppercase font-medium">Vue.js
        expert,</strong> a developer to enhance your UI, or a collaborator for your next
        project, I’m here to help. From <strong className="text-black uppercase font-medium">responsive
        design </strong>
        to <strong className="text-black uppercase font-medium">interactive web applications,</strong> I bring
        ideas
        to life
        with clean, efficient code.

        Let’s discuss how we can work together—drop me a message today!
      </h3>
      <div className="bg-contact container max-w-[50rem] p-20 bg-white mb-20 rounded-[2rem]">
        <SocialLinks className="justify-center mb-12" />
        <form onSubmit={submitForm}>
          <Input
            type={"text"}
            label="Name"
            value={name}
            onValueChange={setName}
            variant={"bordered"}
            color={"default"}
            radius={"full"}
            className="mb-8"
            required
          />
          <Input
            type={"email"}
            label="Email"
            value={email}
            onValueChange={setEmail}
            variant={"bordered"}
            color={"default"}
            radius={"full"}
            className="mb-8"
            required
          />
          <Input
            type={"text"}
            label="Subject"
            value={subject}
            onValueChange={setSubject}
            variant={"bordered"}
            color={"default"}
            radius={"full"}
            className="mb-8"
            required
          />
          <Textarea
            label="Message"
            variant={"bordered"}
            color={"default"}
            radius={"full"}
            value={msg}
            onValueChange={setMsg}
            className="mb-8"
            required
          />
          <Button
            isLoading={buttonLoad}
            className="bg-blck text-white rounded-full"
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
"use client";
import React, { useState } from "react";
import TitleCards from "./TitleCards";
import Input from "./Input";
import { useMutation } from "@tanstack/react-query";
import { useRequest } from "@/lib/hooks/useRequest";
import { ContactPayloadProps } from "@/lib/util/type";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { mutate, isPending } = useMutation<void, Error, ContactPayloadProps>({
    mutationFn: (body) =>
       useRequest(`${process.env.NEXT_PUBLIC_SERVER_HOST}/contact`, {
        method: "POST",
        data: body,
      }),
    onSuccess: () => {
      alert(
        "Thank you for contacting us, we'll get back to you as fast as possible :)",
      );
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    },
    onError: () => {
      alert("Error: Your form has not been submitted");
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name);

    mutate({
      name,
      email,
      phonenumber: phone,
      message,
    });
  };

  return (
    <section className="bg-main-accent text-main-col w-full py-12">
      <TitleCards title="Contact us" />

      <form
        className="max-w-175 mx-auto flex flex-col justify-start items-start w-full px-4 md:px-0"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          formName="name"
          title="Name"
          setValue={(e: any) => setName(e.target.value)}
        />
        <Input
          type="email"
          formName="email"
          title="Email"
          setValue={(e: any) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          formName="phonenumber"
          title="Phone Number"
          setValue={(e: any) => setPhone(e.target.value)}
        />
        <label className="w-full group">
          <span className="block text-main-col/50 group-focus-within:text-main-col transition-colors duration-300">
            Message
          </span>
          <textarea
          onChange={(e) => setMessage(e.target.value)}
            name="message"
            className="w-full text-main-col border-main-col/50 border-b-2
               focus:border-main-col transition-all duration-300 ease-in-out outline-0 h-50"
          ></textarea>
        </label>

        <button className="bg-seconday-col border-main-col/50 border p-2 rounded-sm mt-4 hover:border-main-col hover:scale-105 transition-all duration-300 ease-in-out text-[1.1rem] font-semibold " type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;

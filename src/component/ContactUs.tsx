import React from "react";
import { Button } from "../../components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { ContactUsInput, contactUsSchema } from "../validations/ContactUs";

import { contactUs } from "../api/contactus/thunk";
import { zodResolver } from "@hookform/resolvers/zod";


const ContactUsForm: React.FC = () => {

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.feedback);

  const {
    register, handleSubmit, formState: { errors },
  } = useForm<ContactUsInput>({ resolver: zodResolver(contactUsSchema) })


  const onSubmit: SubmitHandler<ContactUsInput> = async (data) => {
    const result = await dispatch(contactUs(data))
    if (contactUs.fulfilled.match(result)) {
      alert("Message sent successfully")

    }
  }


  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      {error && <p className="error">{error}</p>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          placeholder="Your Name"
          {...register("name")}
          required
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          type="email"
          placeholder="Enter Your Valid Email Address"
          {...register("email")}
          required
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <textarea


          placeholder="Your Message"
          {...register("message")}
          required
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-slate-950 "
        >
          {loading ? "Sending message ..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
};

export default ContactUsForm;

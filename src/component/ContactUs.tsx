import React, { useState } from "react";
import { Button } from "../../components/ui/button";

const ContactUs: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />
        <textarea
          name="message"
          value={form.message}
          placeholder="Your Message"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />
        <Button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-slate-950 "
        >
          Send Message
        </Button>
      </form>
    </section>
  );
};

export default ContactUs;

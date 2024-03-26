import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Please write a name";
    }
    if (!formData.email.trim()) {
      errors.email = "Please write an email";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is not valid";
    }
    if (!formData.message.trim()) {
      errors.message = "Please write a message";
    }

    if (Object.keys(errors).length > 0) {
      // Show errors with toastify
      Object.values(errors).forEach((error) => toast.error(error));
      return;
    }

    // Field cleaning
    setFormData({ name: "", email: "", message: "" });

    // Show success
    setSuccess(true)
    // Hide after 3s
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="contain pb-44">
      <ToastContainer />
      <h2 className="contain-title">Contact Form</h2>
      <form
        onSubmit={handleSubmit}
        className="w-[70%] mx-auto h-full flex flex-col justify-center items-center gap-3"
      >
        <div>
          <p className="contain-text">Name</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="task-inp input-animation"
          />
        </div>
        <div>
          <p className="contain-text">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="task-inp input-animation"
          />
        </div>
        <div>
          <p className="contain-text">Your message</p>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="task-inp input-animation"
          />
        </div>
        <button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="contain-text px-20 py-2 input-animation bg-teal-900 hover:bg-teal-700"
        >
          Send
        </button>
      </form>
      {
        success && (
          <div className="success-toast flex justify-center items-center">
            <p className="contain-title">Data successfully sent!</p>
          </div>
        )
      }
    </div>
  );
};

export default ContactForm;

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de campos
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'El nombre es obligatorio';
    }
    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es obligatorio';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'El correo electrónico no es válido';
    }
    if (!formData.message.trim()) {
      errors.message = 'El mensaje es obligatorio';
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
      // Limpieza de campos
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className='contain'>
      <h2 className='contain-title'>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && <p>{formErrors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <p>{formErrors.email}</p>}
        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleInputChange}
        />
        {formErrors.message && <p>{formErrors.message}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;

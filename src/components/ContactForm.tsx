import React, { useState } from 'react';
import axios from 'axios';
import { ContactFormFields } from '../types/form';

interface Props {
  lang: Record<string, string>;
  apiEndpoint: string;
}

export const ContactForm: React.FC<Props> = ({ lang, apiEndpoint }) => {
  const [formData, setFormData] = useState<ContactFormFields>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(apiEndpoint, formData);
      alert('Form submitted successfully!');
    } catch (error) {
      alert('Error submitting form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <label>
        {lang.firstName}
        <input name="firstName" value={formData.firstName} onChange={handleChange} required />
      </label>
      <label>
        {lang.lastName}
        <input name="lastName" value={formData.lastName} onChange={handleChange} required />
      </label>
      <label>
        {lang.email}
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        {lang.phone}
        <input name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

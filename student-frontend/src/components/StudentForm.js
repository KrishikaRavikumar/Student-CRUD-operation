import React, { useEffect, useState } from 'react';

function StudentForm({ onSave, editStudent }) {
  const [form, setForm] = useState({
    name: '',
    rollNumber: '',
    email: '',
    mob: '',
  });

  useEffect(() => {
    if (editStudent) {
      setForm(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ name: '', rollNumber: '', email: '', mob: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="rollNumber" placeholder="Roll Number" value={form.rollNumber} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="mob" placeholder="Mobile" value={form.mob} onChange={handleChange} required />
      <button type="submit">{form.id ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default StudentForm;

import { ChangeEvent, FormEvent, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import type { Form } from '@types';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact, useAppDispatch } from '../../redux/contactsThunk';

const ContactForm = () => {
  const [form, setForm] = useState<Form>({ name: '', number: '' });
  const dispatch = useAppDispatch();

  const contacts = useSelector(selectContacts);

  const handleInput = (e: ChangeEvent) => {
    const { name, value }: { name: string; value: string } = e.target as HTMLInputElement;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setForm({ name: '', number: '' });
    if (contacts.items.some((cont) => cont.name.toLowerCase() === form.name.toLowerCase())) {
      alert(`${form.name} is arleady in contacts.`);
      return;
    }
    const data = {
      id: nanoid(),
      name: form.name,
      number: form.number,
    };
    dispatch(addContact(data));
  };

  return (
    <form onSubmit={handleSubmit} className='flex w-[100%] flex-col items-center gap-3'>
      <label className='my-auto flex flex-col items-center'>
        Name:
        <input
          className='w-[400px]'
          type='text'
          name='name'
          onChange={handleInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={form.name}
        />
      </label>
      <label className='my-auto flex flex-col items-center'>
        Number:
        <input
          className='w-[400px]'
          type='tel'
          name='number'
          onChange={handleInput}
          pattern='\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
          value={form.number}
        />
      </label>
      <button className='bg-[#696969] px-4 py-2 text-white hover:bg-black'>Add contact</button>
    </form>
  );
};

export default ContactForm;

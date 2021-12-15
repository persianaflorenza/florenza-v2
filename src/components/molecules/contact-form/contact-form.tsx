import { Container, TextInput } from '@src/components';
import React from 'react';

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <form>
      <TextInput name="name" label="Nome" dark />
      <TextInput name="name" label="Nome" dark />
      <TextInput name="name" label="Nome" dark />
    </form>
  );
};

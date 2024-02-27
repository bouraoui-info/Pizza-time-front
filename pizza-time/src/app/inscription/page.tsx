"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { RiLockPasswordFill } from 'react-icons/ri';
import { TbUserSquareRounded } from 'react-icons/tb';
import { GiSmartphone } from 'react-icons/gi';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { FiChevronLeft } from 'react-icons/fi';
import { setIsDropdownOpen } from '../store';

function RegistrationPage() {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Add validation here to check if passwords match and meet requirements
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    // Send the registration data to your backend API
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, firstName, phone, email, password }),
    });

    const data = await response.json();

    if (data.success) {
      // Handle successful registration, e.g., redirect to login page
      console.log('Registration successful');
    } else {
      // Handle registration errors
      console.error('Registration failed:', data.error);
    }
  };

  return (
    <div className="registration-page bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className='d-flex flex-row mb-5'> <div style={{ top: "11px", position: "relative" }} onClick={() => setIsDropdownOpen(false)} ><FiChevronLeft size={32} /></div>
              <h1 className='ml-5 pl-5'>Inscription</h1>
            </div>
      <form onSubmit={handleSubmit} className="w-96">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 flex items-center">
            <TbUserSquareRounded /><div className="mr-2"> Nom</div>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="input"
            placeholder="Saisissez votre Nom"
            required />
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-1 flex items-center">
            <TbUserSquareRounded /><div className="mr-2">Prénom</div>

          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="input"
            placeholder="Saisissez votre Prénom"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1 flex items-center">
            <GiSmartphone /> <div className="mr-2" >Téléphone</div>

          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="input"
            placeholder="06 12 34 56 78"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 flex items-center">
            <MdOutlineAttachEmail /> <div className="mr-2" >E-mail</div>

          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input"
            placeholder="Saisissez votre e-mail"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 flex items-center ">
            <RiLockPasswordFill /> <div className="mr-2" ></div>
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
            placeholder="Saissisez votre mot de passe"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-1 flex items-center">

          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="input"
            placeholder="Confirmez votre mot de passe"
            required
          />
        </div>

        <p className="mb-4 text-sm">
          1 Minuscule & 1 Majuscule <br /> 1 chiffre (0-9) <br /> 8 caractères
        </p>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-xl ">Je crée mon compte</button>
      </form>


      <Link href="/">
        <div className="flex justify-center mt-4 text-gray-500 text-xl ">Mention légales</div>
      </Link>
      
    </div>
  );
}

export default RegistrationPage;

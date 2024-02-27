"use client"
import React, { useState } from 'react';
import { CgMail } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import RegistrationPage from '../inscription/page';
import { setIsDropdownOpen, store } from '../store';
import { useSnapshot } from 'valtio';


function DropDownMenu() {
  const { isDropdownOpen } = useSnapshot(store)
  const [showRegistration, setShowRegistration] = useState(false); // État pour afficher la page d'inscription

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  const handleRegistrationClick = () => {
    setShowRegistration(true);
    console.log('Clicked on registration link. showRegistration:', showRegistration);
  };

  return (
    <div className="fixed top-5 right-0 bg-gray-100 p-4 border rounded-lg shadow-lg h-100">
      {!showRegistration && (
        <ul className="menu">
          <div className='d-flex flex-row mb-5'>
            <div style={{ top: "11px", position: "relative" }} onClick={() => setIsDropdownOpen(false)}>
              <FiChevronLeft size={32} />
            </div>
            <h1 className='ml-5 pl-5'>Connexion</h1>
          </div>
          <li className="mb-2">
            <div className="flex items-center mb-5">
              <div className="mr-2">
                <CgMail />
              </div>
              <label>Email</label>
              <input className='input ml-2 border rounded-lg p-1 outline-none' placeholder='Saisissez votre e-mail' />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-5">
              <div className="mr-2">
                <RiLockPasswordFill />
              </div>
              <label>Mot de passe</label>
              <input type="password" className='w-64 input ml-2 border rounded-lg p-1 outline-none' placeholder='Saisissez votre mot de passe' />
            </div>
          </li>
          <li className="mb-5">
            <button className="w-96 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Connexion
            </button>
          </li>
          <div className="mb-5 flex items-center justify-center text-xl">ou</div>
          <div className="flex justify-center mb-5">
            <div onClick={handleRegistrationClick}>
              <span className="text-gray-500 hover:underline text-xl">Inscription</span>
            </div>
          </div>
          <div className="flex justify-center mb-5 text-xl">
            En continuant, vous acceptez nos :
          </div>
          <div>
            <div className="text-left mb-5">
              <Link href="/">
                <span className="text-black-500 hover:underline text-xl">Conditions Générales d'Utilisation</span>
              </Link>
            </div>
            <div className="text-left mb-5">
              <Link href="/">
                <span className="text-black-500 hover:underline text-xl">Conditions Générales de Vente</span>
              </Link>
            </div>
            <div className="text-left mb-5">
              <Link href="/">
                <span className="text-black-500 hover:underline text-xl">Politiques de Confidentialité</span>
              </Link>
            </div>
            <div className="flex items-center underline justify-center mb-5">
              <Link href="/">
                <span className="text-gray-500 hover:underline text-xl">Mention légales</span>
              </Link>
            </div>
          </div>
        </ul>
      )}
      {showRegistration && <RegistrationPage />}
    </div>
  );
}

export default DropDownMenu;

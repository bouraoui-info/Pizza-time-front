import React, { useState } from 'react';
import { CgMail } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import RegistrationPage from '../inscription/page';
import { setIsDropdownOpen, store } from '../store';
import { useSnapshot } from 'valtio';
import axios from 'axios';

function DropDownMenu() {
  const [error, setError] = useState('');
  const { isDropdownOpen } = useSnapshot(store);
  const [showRegistration, setShowRegistration] = useState(false); // État pour afficher la page d'inscription

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  const handleRegistrationClick = () => {
    setShowRegistration(true);
    console.log('Clicked on registration link. showRegistration:', showRegistration);
  };

  const handleLoginClick = async () => {
    try {
      //recuperer l'email et le mot de passe du formulaire
      const emailElement = document.getElementById('email')  as HTMLInputElement;
      const passwordElement = document.getElementById('password')  as HTMLInputElement;
      let email =''; 
      let password ='';

      // recupération de la valeur des champs email et mot de passe 
      if (emailElement && passwordElement) {

        const email = emailElement.value;
        const password = passwordElement.value;
      }


      const response = await axios.post('/api/login', { email, password });


      // traitement de la reponse de la requette
      if (response.status === 200) {
        alert("Connexion réussie");
      } else {
        setError("Mauvaise combinaison d'email et de mot de passe");
      }
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'utilisateur:', error);
      setError("Une erreur s'est produite lors de la connexion.");
    }
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
              <input id="email" className='input ml-2 border rounded-lg p-1 outline-none' placeholder='Saisissez votre e-mail' />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-5">
              <div className="mr-2">
                <RiLockPasswordFill />
              </div>
              <label>Mot de passe</label>
              <input id="password" type="password" className='w-64 input ml-2 border rounded-lg p-1 outline-none' placeholder='Saisissez votre mot de passe' />
            </div>
          </li>
          <li className="mb-5">
            <button onClick={handleLoginClick} className="w-96 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
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
      {error && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border rounded-lg shadow-lg">
          <p className="text-red-500">{error}</p>
          <button onClick={() => setError('')} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
            Fermer
          </button>
        </div>
      )}
      {showRegistration && <RegistrationPage setShowRegistration={setShowRegistration} />}
    </div>
  );
}

export default DropDownMenu;

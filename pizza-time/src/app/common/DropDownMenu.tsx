"use client"
import React, { useState } from 'react';
import { CgMail } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import RegistrationPage from '../inscription/page';
import { setIsDropdownOpen ,store} from '../store';
import { useSnapshot } from 'valtio';


function DropDownMenu() {
  const{isDropdownOpen}=useSnapshot(store)
  // const [isActive, setIsActive] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false); // État pour afficher la page d'inscription

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  const handleRegistrationClick = () => {
    setShowRegistration(true); // Inverse l'état de l'affichage de la page d'inscription
    // setIsActive(true); // Ferme le menu déroulant lorsqu'on clique sur "Inscription"
    console.log('Clicked on registration link. showRegistration:', showRegistration);

  };
  // console.log('isActive:', isActive);

// {` bg-gray-100 p-4 border rounded-lg shadow-lg`}
  return (
    <div className="fixed top-5 right-0 bg-gray-100 p-4 border rounded-lg shadow-lg h-100" >
      {/* <div className="menuToggle" onClick={handleClick}></div> */}
      {!showRegistration?
      <React.Fragment>
        <ul className="menu">
         <div className='d-flex flex-row mb-5'> <div style={{top:"11px",position:"relative"}}onClick={()=>setIsDropdownOpen(false)} ><FiChevronLeft  size={32}/></div>
        <h1 className='ml-5 pl-5'>Connexion</h1>  
       </div>
        <li className="mb-2">
          <div className="flex items-center">
            <div className="mr-2">
              <CgMail />
            </div>
            <label>Email</label>
            <input className='input ml-2 border rounded-lg p-1 outline-none' placeholder='Saisissez votre e-mail' />
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center">
            <div className="mr-2">
              <RiLockPasswordFill />
            </div>
            <label>Mot de passe</label>
            <input type="password" className='w-64 input ml-2 border rounded-lg p-1 outline-none' placeholder='Saisissez votre mot de passe' />
          </div>
        </li>
        <li className="mb-2">
          <button className="w-96 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Connexion
          </button>
        </li>
        <li className="mb-2">
          <p className='text'>ou</p>
          <div onClick={()=>{setShowRegistration(true);
          console.log({showRegistration})}}>
            <span className="text-gray-500 hover:underline">Inscription</span>
         </div>
        </li>
      </ul>
      <div className="legal">
        En continuant, vous acceptez nos :
        <ul>
          <li className="text-left">
            <Link href="/">
              <span className="text-black-500 hover:underline">Conditions Générales d'Utilisation</span>
            </Link>
          </li>
          <li className="text-left">
            <Link href="/">
              <span className="text-black-500 hover:underline">Conditions Générales de Vente</span>
            </Link>
          </li>
          <li className="text-left">
            <Link href="/">
              <span className="text-black-500 hover:underline">Politiques de Confidentialité</span>
            </Link>
          </li>
        </ul>

        <div className="flex items-center underline justify-center">
          <Link href="/">
            <span className="text-gray-500 hover:underline">Mention légales</span>
          </Link>
        </div>
      </div></React.Fragment>:<div>cccc</div>}
      {showRegistration && <RegistrationPage/>} Affiche la page d'inscription si showRegistration est vrai
    </div>
  );
}

export default DropDownMenu;

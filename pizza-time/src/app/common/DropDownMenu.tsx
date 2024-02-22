import React, { useState } from 'react';
import { CgMail } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";

function DropDownMenu() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
   
        <div className={`navigation${isActive ? " active" : ""} bg-gray-100 p-4 border rounded-lg shadow-lg`}>

          <div className="menuToggle" onClick={handleClick}></div>
          <ul className="menu">
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
                <input type="password" className='input ml-2 border rounded-lg p-1 outline-none' placeholder='Saisissez votre mot de passe' />
              </div>
            </li>
            <li className="mb-2">
              <button className="w-96 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Connexion
              </button>
            </li>
            <li className="mb-2">
              <p className='text'>ou</p>
              <a href='' className="text-gray-500 hover:underline">Inscription</a>
            </li>
          </ul>
          <div className="legal">
            En continuant, vous acceptez nos :
            <ul>
              <li className="text-left">
                <a href="/" className="text-black-500 hover:underline">Conditions Générales d'Utilisation</a>
              </li>
              <li className="text-left">
                <a href="/" className="text-black-500 hover:underline">Conditions Générales de Vente</a>
              </li>
              <li className="text-left">
                <a href="/" className="text-black-500 hover:underline">Politiques de Confidentialité</a>
              </li>
            </ul>

            <div className="flex items-center underline justify-center">

              <a href="/" className="text-gray-500 hover:underline">Mention légales</a>

            </div>
          </div>
        </div>
    
  );
}

export default DropDownMenu;

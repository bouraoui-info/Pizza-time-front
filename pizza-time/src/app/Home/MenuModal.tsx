"use client"
import React from "react"
import MenuCard from "./MenuCard";
import { useState } from "react";
import { types } from "util";
import {Menu} from '../../types';
import Modal from "../common/Modal";
import Image from "next/image";
import FavoritesBtn from  "../common/favoritesBtn"
type Props = {
  menu: Menu;
}

const MenuModal = ({ menu }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <React.Fragment>
      <MenuCard menu={menu} openModal={openModal} />
        {/* {<Modal isOpen={isOpen} closeModal={closeModal}  />} */}
        <div className="relative">
          <Image src={menu.image} width={360} height={200}alt="menu-img"
          className="h-56 w-full object-scale-down-t-lg"/>
        </div>
      <div className="absolute -top-[10px]-left-[15 px] w-12 h-22 rounded-full bg-white">
        <FavoritesBtn/>
      </div>
    </React.Fragment>
  )

  }
export default MenuModal;

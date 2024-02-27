"use client"
import React, { useState } from "react";
import MenuCard from "./MenuCard";
import { Menu } from "../../types";
import ModalComponent from "../common/ModalComponent";

type Props = {
  menu: Menu;
};

const MenuModal = ({ menu }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prepare, setPrepare] = useState("");
console.log({menu});

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <React.Fragment>
      <MenuCard menu={menu} openModal={openModal} />
      {isOpen && <ModalComponent isOpenModal={isOpen} setIsOpenModal={setIsOpen} closeModal={closeModal} title={menu.title} image={menu.image} menu={menu} user={undefined}/>}
    </React.Fragment>
  );
  
};
export default MenuModal;

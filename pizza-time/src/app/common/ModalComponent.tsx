"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from 'next/image';

import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { HiOutlineXMark } from "react-icons/hi2";
import Modal from 'react-modal';

type ModalProps = {
  isOpenModal: boolean;
  title?: string
  closeModal: () => void;
  children: React.ReactNode;
};
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer'
  },
};
const ModalComponent = ({ isOpenModal, setIsOpenModal,
  title, image }: any) => {
  console.log({ title })
  const [isOpen, setIsOpen] = React.useState(isOpenModal)
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
          setIsOpenModal(false)
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalHeader
          className="text-capitalize"
          toggle={() => {
            setIsOpen(false);
            setIsOpenModal(false)
          }}
        >
          <h2>{title}</h2>
        </ModalHeader>
        <ModalBody>
          <Image src={image} width={360} height={200} alt="menu-img" className="h-56 w-full object-scale-down rounded-t-lg" />
        </ModalBody>

        <ModalFooter className="border-top-0 ">
          <h2
            onClick={() => { setIsOpen(false); setIsOpenModal(false) }}
          >
            Close
          </h2>

        </ModalFooter>
      </Modal>
    </div>
   
  );
};

export default ModalComponent;
"use client";
import React, { Fragment } from "react";
import Image from 'next/image';
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { MenuData } from '@/Data/menu-data';
import Modal from 'react-modal';
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi2";
import { Menu } from "@/types";

type ModalProps = {
  isOpenModal: boolean;
  title: string
  closeModal: () => void;
  menu: any;
  setIsOpenModal: Function,
  image: any
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
const PutItemsIntoCart = () => { }
const ModalComponent = ({ isOpenModal, setIsOpenModal,
  title, image, menu }: ModalProps) => {
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
          {menu.prepType && (
            <Disclosure>


              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>Preparation</span>
                <HiChevronDown
                // className={`${
                //   open ? 'rotate-180 transform' : '' } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4">
                {menu.prepType?.map((prep: any, index: any) => (
                  <div key={index} className="flex my-2">
                    <input
                      className="w-6 h-6 text-green-600 bg-gray-100 rounded border-green-500 focus:ring-green-500  focus:ring-2 "
                      type="checkbox"
                    />
                    <span className="ml-3">{prep}</span>
                  </div>
                ))}
              </Disclosure.Panel>


            </Disclosure>
          )}









        </ModalBody>

        <ModalFooter className="border-top-0 ">
          <h2
            onClick={() => { setIsOpen(false); setIsOpenModal(false) }}
          >
            Close
          </h2>
          <div className="mt-4">
            <button className="form-button" onClick={PutItemsIntoCart}>
              Add to Cart :$ {menu.price}
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </div>

  );
};

export default ModalComponent;
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Modal from 'react-modal';
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi2";
import { TimePicker } from 'antd'; // Import TimePicker from Ant Design
import moment from 'moment'; // Import moment for time manipulation
import { Menu } from "@/types";
import store, { setPanier, setTime } from '../store';
import { useSnapshot } from 'valtio';


type ModalProps = {
  isOpenModal: boolean;
  title: string;
  closeModal: () => void;
  menu: Menu; // Assuming Menu is a custom type
  setIsOpenModal: Function;
  image: any;
  user: any; }

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


const ModalComponent: React.FC<ModalProps> = ({ isOpenModal, setIsOpenModal, title, image, menu ,user}: ModalProps) => {
  const { panier } = useSnapshot(store);
  const { time } = useSnapshot(store);
  const [selectedTime, setSelectedTime] = useState<moment.Moment | null>(null); // State for selected time
  const [isOpen, setIsOpen] = useState(false);
const MenuToAdd =""
const closeModal = () => setIsOpen(false);
const onOpen = () => setIsOpen(true);

const PutItemsIntoCart = (MenuToAdd:any) => { 
let newPanier=[...panier]
newPanier.push(MenuToAdd)
setPanier(newPanier)
setTime(selectedTime?.format("HH:mm"))
}
  return (
    <div>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={() => {
          setIsOpenModal(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalHeader
          className="text-capitalize"
          toggle={() => {
            setIsOpenModal(false);
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
                <HiChevronDown />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pb-2 pt-4">
                {menu.prepType.map((prep: any, index: number) => (
                  <div key={index} className="flex my-2">
                    <input
                      className="w-6 h-6 text-green-600 bg-gray-100 rounded border-green-500 focus:ring-green-500  focus:ring-2"
                      type="checkbox"
                    />
                    <span className="ml-3">{prep}</span>
                  </div>
                ))}
              </Disclosure.Panel>
            </Disclosure>
          )}
          {/* TimePicker component */}
          <div className="mt-4">
            <p className="text-center mb-3">Selectionner le Temps </p>
            <TimePicker
              defaultValue={selectedTime} // Set default value
              onChange={(time: any) => setSelectedTime(time)} // Handle time change
              format="HH:mm" // Set format
              minuteStep={5} // Set minute step
              className="w-full mt-4" // Add custom styling if needed
            />
          </div>
        </ModalBody>

        <ModalFooter className="border-top-0">
          <button
            className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            onClick={() => setIsOpenModal(false)}
          >
            Close
          </button>

          <button
            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
             onClick={()=>PutItemsIntoCart(menu)}
          >
            Add to Cart :$ {menu.price}
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent;

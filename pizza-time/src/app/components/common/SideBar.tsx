'use client'
import React, { createElement, useState } from "react";
import DialogComponent from "./DialogComponent";
import { BsHeartFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { HiHome, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image"; 
import pro from "../../../../public/humans/pro.jpg"
import logo from "../../../../public/Objects/logo.jpg" // Ajout de l'importation de Image

const Links = [
    { title: "Home", icon: HiHome, url: "/" },
    { title: "Orders", icon: FaReceipt, url: "/user/orders" },
    { title: "Favorites", icon: BsHeartFill, url: "/user/favorites" },
    { title: "Help", icon: MdHelp, url: "/user/help" },
];

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true); // Correction: utiliser 'useState' au lieu de '{ useState }'
    const closeModal = () => setIsOpen(false);
    return (
        <DialogComponent isVisible={isOpen} onClose={closeModal}>
            <div className="flex flex-col gap-y-6 px-6 pt-8">
                <div className="flex justify-center my-3">
                    <Link href="/" className="outline-none">
                        <Image src={logo} width={40} height={40} alt="logo" />
                    </Link>
                </div>
                <div className="flex items-center p-3 transition-all font-semibold">
                    <Image src={pro} width={40} height={40} alt="user-img" className="object-cover rounded-full" />
                    <div className="flex flex-col space-y-2 text-xs">
                        <span className="pl-4">Bouraoui</span>
                        <Link href="/user" className="pl-4 text-green-600">
                            View Account
                        </Link>
                    </div>
                </div>

                {Links.map((link) => (
                    <Link href={link.url} key={link.title} className="flex items-center p-3 transition-all font-semibold hover:text-green-500 hover:bg-green-100 rounded-md">
                        {createElement(link.icon, {
                            className: "h-5 w-5 mr-4 shrink-0",
                        })}
                        <span className="pl-2">{link.title}</span>
                    </Link>
                ))}
                <button className="flex items-center p-3 transition-all font-semibold">
                    <HiOutlineArrowRightOnRectangle className="mr-4 shrink-0" size={26} />
                    <span className="pl-2">Sign Out</span>
                </button>
            </div>
        </DialogComponent>
    );
};

export default SideBar;

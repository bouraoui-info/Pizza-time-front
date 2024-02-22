"use client";

import { useState } from "react";
import ModalComponent from "@/app/common/ModalComponent";
import { FaChevronRight } from "react-icons/fa";
import { Menu } from "@/types";


const LanguageSelectModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);

    const OpenModal = () => setIsOpen(true);
    const Languages = [
        "English",
        "Francais",
        "German",
        "Dutch",
        "Espanol",
        "Italiano",
    ];

    return (
        <>
            <button className="flex items-center" onClick={OpenModal}>
                <span>English</span>
                <FaChevronRight /><span className="shrink-0 ml-3" ></span>
            </button>

            <ModalComponent
                title="Select your preferred language"
                isOpen={isOpen}
                closeModal={closeModal}
                setIsOpenModal={setIsOpen}
                image
                menu
                user
            >
                <section className="py-24 grid grid-cols-2  gap-8">
                    {Languages?.map((language) => (
                        <button
                            className="p-2 rounded-md hover:bg-slate-100"
                            key={language}
                        >
                            {language}{" "}
                        </button>
                    ))}
                </section>
            </ModalComponent>
        </>
    );
};

export default LanguageSelectModal;
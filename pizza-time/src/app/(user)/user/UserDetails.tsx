"use client"
import Image from 'next/image';

import UserEditAccountModal from "./UserEditAccountModal";
import moi from "../../../../public/humans/moi.jpg"
const UserDetails = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src={moi}
                alt="moi-img"
                width={100}
                height={100}
                className="mx-auto rounded-full" />
            <div>
                <h1 className="text -xl  text-center my-5 font-semibold leading-tight trachking-tight text-gray-500 md: text-2xl">
                    Bouraoui Abdallah
                </h1>
                <p className="text--gray-500 mb-4">Ingbouraouiabdallah@gmail.com</p>
                <UserEditAccountModal />
            </div>
        </div>

    );
};
export default UserDetails; 
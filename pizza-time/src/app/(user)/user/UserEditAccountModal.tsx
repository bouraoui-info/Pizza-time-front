import { FormEvent, useState } from "react";
import { HiPencil } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import ModalComponent from "@/app/common/ModalComponent";
const UserEditAccountModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [phone, setPhone] = useState("");

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here, such as sending data to the server
        console.log("Form submitted:", { phone });
        closeModal(); // Close the modal after form submission
    };

    return (
        <>
            <button           
               className="flex items-center px-4 py-2 space-x-4 bg-green-600 text-white rounded-full"
                onClick={openModal}
            >
                <span>Edit Profile</span>
                
               <div className="shrink-0" > <FaChevronRight /></div>
            </button>
            <ModalComponent isOpen={isOpen} title="Account Info" closeModal={closeModal} setIsOpenModal={setIsOpen} image={""} user={""} menu={""} >
                <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                    <div>
                        <h2>Basic Info</h2>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <div>
                            <label htmlFor="phone" className="form-label">
                                Phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                className="form-input"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-green-600 hover:bg-green-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >


                        <div  className="mr-1 -ml-1 w-4 h-4"  style={{ fill:"currentColor" }} ><HiPencil/></div>
                        Edit Profile
                    </button>
                </form>
            </ModalComponent>
        </>
    );
};

export default UserEditAccountModal;

import Image from "next/image";
import Icon from "../ui/Icon";
const users = [
    {
        name: "Daniel Benson",
        email: "Danielbenson@gmail.com",
        date: "Sept 9, 2024",
        status: "Active",
        iconSrc: "/images/referred.svg",
    },
    {
        name: "Daniel Benson",
        email: "Danielbenson@gmail.com",
        date: "Sept 9, 2024",
        status: "Active",
        iconSrc: "/images/referred.svg",
    },
    {
        name: "Daniel Benson",
        email: "Danielbenson@gmail.com",
        date: "Sept 9, 2024",
        status: "Active",
        iconSrc: "/images/referred.svg",
    },
    {
        name: "Daniel Benson",
        email: "Danielbenson@gmail.com",
        date: "Sept 9, 2024",
        status: "Active",
        iconSrc: "/images/referred.svg",
    },
    {
        name: "Daniel Benson",
        email: "Danielbenson@gmail.com",
        date: "Sept 9, 2024",
        status: "Active",
        iconSrc: "/images/referred.svg",
    },
    {
        name: "Daniel Benson",
        email: "Danielbenson@gmail.com",
        date: "Sept 9, 2024",
        status: "Active",
        iconSrc: "/images/referred.svg",
    },
    // Add more user objects as needed
];

export default function ReferredDesktopList() {
    return (
        <>
           <div className="grid grid-cols-6 bg-light-grey shadow-sm p-3 mr-8 rounded-[15px]">
                <p className="col-span-2 text-sm text-[#0F1C3980]">Full Name</p>
                <p className="col-span-2 text-sm text-[#0F1C3980]">Email Address</p>
                <p className="text-sm text-[#0F1C3980]">Date Joined</p>
                <p className="text-sm text-[#0F1C3980]">Status</p>
            </div>
            {users.map((user, index) => (
                <section key={index} className="grid grid-cols-6 p-3 mr-8 border-b py-6">
                    <div className="flex items-center gap-4 col-span-2">
                        <Icon icon={<Image src={user.iconSrc} height={18} width={18} alt="User"/>} containerSize="w-[23.86px] h-[23.86px]"/>
                        <p className="text-color-zero text-sm">{user.name}</p>
                    </div>
                    <p className="col-span-2 text-color-zero text-sm">{user.email}</p>
                    <p className="text-color-zero text-sm">{user.date}</p>
                    <p className="text-color-one text-sm">{user.status}</p>
                </section>
            ))}
        </>
    );
}

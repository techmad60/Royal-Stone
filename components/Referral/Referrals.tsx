import Image from "next/image";
import Icon from "../ui/Icon";
const users = [
    {
        name: "Daniel Benson",
        email: "Danielbenson@gmail.com",
        joined: "12/8/2024",
        status: "Active",
        iconSrc: "/images/referred.svg",
    },
    {
        name: "Daniel Benson",
        email: "Danielbenson@gmail.com",
        joined: "12/8/2024",
        status: "Active",
        iconSrc: "/images/referred.svg",
    },
    {
        name: "Daniel Benson",
        email: "Danielbenson@gmail.com",
        joined: "12/8/2024",
        status: "Active",
        iconSrc: "/images/referred.svg",
    },
];

export default function ReferralList() {
    return (
        <>
            {users.map((user, index) => (
                <section key={index} className="flex justify-between  bg-light-grey shadow-sm shadow-[#00000026] p-4 rounded-common my-4">
                    <div className="flex gap-4">
                        <Icon icon={<Image src={user.iconSrc} height={90} width={90} alt="User"/>} containerSize="w-[39.6px] h-[39.6px]"/> 
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-color-zero">{user.name}</p>
                            <p className="text-xs text-[#6B7385B2]">{user.email}</p>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs text-[#6B7385B2]">Joined {user.joined}</p>
                        <p className="text-color-one text-xs">{user.status}</p>
                    </div>
                </section>
            ))}
        </>
    );
}

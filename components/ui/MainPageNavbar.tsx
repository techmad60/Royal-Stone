//mport Image from "next/image";
import Link from "next/link";
import {FaTimes} from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

export default function MainPageNavbar() {
  return (
    <div className="flex flex-col">
        <FaTimes className="lg:hidden"/>
        <nav>
            <ul>
                <li>
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-6 h-6 shadow-sm flex items-center justify-center">
                            <GoHomeFill className=""/>
                        </div>
                        <p>Dashboard</p>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function Pagination () {
    return (
        <div className="hidden lg:flex items-center justify-center gap-4 mt-auto">
        <p className="text-sm text-slate-400">Page 1 of 7</p>
        <div className="flex items-center gap-2">
            <div className="w-[22px] h-[22px] rounded-[4px] border shadow-sm flex items-center justify-center pl-1">
                <MdArrowBackIos className="text-color-form"/>
            </div>
            <div className="w-[22px] h-[22px] rounded-[4px] border shadow-sm flex items-center justify-center">
                <MdArrowForwardIos className="text-color-form"/>
            </div>
        </div>
    </div> 
    )
}

    
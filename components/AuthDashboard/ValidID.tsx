import { useEffect } from "react";
import { FaRegImage } from "react-icons/fa6";
import Button from "../ui/Button";
import NoHistory from "../ui/NoHistory";
import { IoIosArrowDown } from "react-icons/io";

interface ValidIdInfoProps {
  onClose: () => void;
}

export default function ValidIdInformation({ onClose }: ValidIdInfoProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#D9D9D9A6] flex items-end lg:items-center justify-end lg:justify-center z-50">
      <div className="flex flex-col bg-white rounded-t-[15px] w-full h-[430px] sm:h-[500px] lg:rounded-[20px] lg:max-w-[621px] lg:h-[430px]">
        <div className="flex justify-center items-center mt-4 lg:hidden">
          <hr className="w-[51px] h-[5px] rounded-[40px] bg-[#D9D9D9]" />
        </div>
        <div className="flex items-center border-b w-full pb-2 p-4 sm:p-8 lg:p-4">
          <p
            onClick={onClose}
            className="text-color-form text-sm cursor-pointer"
          >
            Cancel
          </p>
          <p className="text-color-zero font-semibold text-lg mx-auto relative right-4">
            Valid Identification
          </p>
        </div>
        <div className="flex flex-col p-4 sm:p-8 lg:p-4">
          <div>
            <div className="flex flex-col gap-1">
              <p className="text-color-form text-sm">ID type</p>
              <div className="relative border-b border-slate-200">
                <input
                  type="text"
                  required
                  className="rounded-sm  placeholder:text-color-zero placeholder:text-sm py-1"
                  placeholder="International Passport"
                />
                <div className="absolute top-3 right-3 ">
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          </div>
          <section className="mt-4">
            <p className="text-color-form text-sm">
              Provide a picture of the ID
            </p>
            <NoHistory
              icon={<FaRegImage className="text-color-one" />}
              text="Tap to Upload Image"
              classname="text-color-one"
              width="justify-self-center sm:w-[400px]"
            />
            <hr />
          </section>

          <Button ButtonText="Finish" className="w-full mt-4" />
        </div>
      </div>
    </div>
  );
}

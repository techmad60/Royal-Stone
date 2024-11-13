import { FaBell } from "react-icons/fa";
import PortfolioNavigator from "@/components/Portolio/PortfolioNavigator";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
export default function Navigation () {
    return (
        <div>
            <PortfolioNavigator currentStep={1}/>
            <p className="font-semibold text-base my-4">Notifications</p>
            <div className="hidden">
                <div className="flex flex-col justify-center items-center space-y-4 my-8 py-6 shadow-sm bg-light-grey rounded-common w-full pr-8">
                    <div
                    className={`w-7 h-7 shadow-sm flex items-center justify-center transform rotate-45 rounded-[9px] bg-white"
                    }`}
                    >
                        <span className="text-color-one transform -rotate-45"><FaBell /></span>
                    </div>
                    <p className="text-sm text-color-form">You have no notifications</p>
                </div>
                <Button ButtonText="With notifications" className="mx-auto"/>
            </div>

            <div>
                <div>
                    <div className="lg:hidden">
                        <p className="text-sm text-color-form pb-3">Today</p>
                        <hr />
                    </div>
                 
                    <section className="flex my-6 items-end bg-light-grey p-[8px] shadow-sm rounded-[14.85px] lg:w-[572px] lg:h-[67px] lg:justify-between lg:items-center lg:rounded-common lg:p-6">
                        <div className="flex gap-2 lg:gap-4">
                            <Icon icon={<FaBell className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px] bg-[rgba(241,255,240,1)]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium tracking-tight">Sodales et tortor diam sit elit gravida</p>
                                <p className=" text-sm text-color-form">Id netus malesuada luctus...</p>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <p className="hidden lg:flex text-sm text-[rgba(107,115,133,1)] mr-2">Today</p>
                            <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                            {/* Green Dot */}
                            <span className="absolute -top-4 right-0 transform translate-x-[50%] -translate-y-[50%] w-[8px] h-[8px] bg-green-700 rounded-full lg:-top-0"></span>
                        </div>
                    </section>

                    <section className="flex my-6 items-end bg-light-grey p-[8px] shadow-sm rounded-[14.85px] lg:w-[572px] lg:h-[67px] lg:justify-between lg:items-center lg:rounded-common lg:p-6">
                        <div className="flex gap-2 lg:gap-4">
                            <Icon icon={<FaBell className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium tracking-tight">Sodales et tortor diam sit elit gravida</p>
                                <p className=" text-sm text-color-form">Id netus malesuada luctus...</p>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <p className="hidden lg:flex text-sm text-[rgba(107,115,133,1)] mr-2">12/9/2024</p>
                            <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                              {/* Green Dot */}
                              <span className="absolute -top-0 right-0 transform translate-x-[50%] -translate-y-[50%] w-[8px] h-[8px] bg-green-700 rounded-full hidden lg:-top-0 lg:flex"></span>
                        </div>
                    </section>
                    <section className="flex my-6 items-end bg-light-grey p-[8px] shadow-sm rounded-[14.85px] lg:w-[572px] lg:h-[67px] lg:justify-between lg:items-center lg:rounded-common lg:p-6">
                        <div className="flex gap-2 lg:gap-4">
                            <Icon icon={<FaBell className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium tracking-tight">Sodales et tortor diam sit elit gravida</p>
                                <p className=" text-sm text-color-form">Id netus malesuada luctus...</p>
                            </div>
                        </div>
                        
                        <div>
                            <p className="hidden lg:flex text-sm text-[rgba(107,115,133,1)] mr-2">12/9/2024</p>
                            <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                        </div>
                    </section>
                </div>

                <div>
                    <div className="lg:hidden">
                        <p className="text-sm text-color-form pb-3">Yesterday, 12/9/2024</p>
                        <hr />
                    </div>
                    <section className="flex my-6 items-end bg-light-grey p-[8px] shadow-sm rounded-[14.85px] lg:w-[572px] lg:h-[67px] lg:justify-between lg:items-center lg:rounded-common lg:p-6">
                        <div className="flex gap-2 lg:gap-4">
                            <Icon icon={<FaBell className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium tracking-tight">Sodales et tortor diam sit elit gravida</p>
                                <p className=" text-sm text-color-form">Id netus malesuada luctus...</p>
                            </div>
                        </div>
                        
                        <div>
                            <p className="hidden lg:flex text-sm text-[rgba(107,115,133,1)] mr-2">12/9/2024</p>
                            <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                        </div>
                    </section>
                </div>

                <div>
                    <div className="lg:hidden">
                        <p className="text-sm text-color-form pb-3">11/9/2024</p>
                        <hr />
                    </div>
                    <section className="flex my-6 items-end bg-light-grey p-[8px] shadow-sm rounded-[14.85px] lg:w-[572px] lg:h-[67px] lg:justify-between lg:items-center lg:rounded-common lg:p-6">
                        <div className="flex gap-2 lg:gap-4">
                            <Icon icon={<FaBell className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium tracking-tight">Sodales et tortor diam sit elit gravida</p>
                                <p className=" text-sm text-color-form">Id netus malesuada luctus...</p>
                            </div>
                        </div>
                        
                        <div>
                            <p className="hidden lg:flex text-sm text-[rgba(107,115,133,1)] mr-2">12/9/2024</p>
                            <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                        </div>
                    </section>
                    <section className="flex my-6 items-end bg-light-grey p-[8px] shadow-sm rounded-[14.85px] lg:w-[572px] lg:h-[67px] lg:justify-between lg:items-center lg:rounded-common lg:p-6">
                        <div className="flex gap-2 lg:gap-4">
                            <Icon icon={<FaBell className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium tracking-tight">Sodales et tortor diam sit elit gravida</p>
                                <p className=" text-sm text-color-form">Id netus malesuada luctus...</p>
                            </div>
                        </div>
                        
                        <div>
                            <p className="hidden lg:flex text-sm text-[rgba(107,115,133,1)] mr-2">12/9/2024</p>
                            <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                        </div>
                    </section>
                    <section className="flex my-6 items-end bg-light-grey p-[8px] shadow-sm rounded-[14.85px] lg:w-[572px] lg:h-[67px] lg:justify-between lg:items-center lg:rounded-common lg:p-6">
                        <div className="flex gap-2 lg:gap-4">
                            <Icon icon={<FaBell className="text-2xl text-color-one"/>} containerSize="w-[39.6px] h-[39.6px] rounded-[14.85px]"/>
                            <div>
                                <p className="text-sm text-color-zero font-medium tracking-tight">Sodales et tortor diam sit elit gravida</p>
                                <p className=" text-sm text-color-form">Id netus malesuada luctus...</p>
                            </div>
                        </div>
                        
                        <div>
                            <p className="hidden lg:flex text-sm text-[rgba(107,115,133,1)] mr-2">12/9/2024</p>
                            <p className="text-xs text-[rgba(107,115,133,0.7)] tracking-tight">11:04 AM</p>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    )
}
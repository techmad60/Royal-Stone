import Image from "next/image"

export default function CardComponent ({title = "", text = "", icon = ""}) {
    return (
        <section className="flex flex-col justify-start items-start border border-slate-100 bg-color-three p-4 rounded-[25px] w-[345px] h-[275px] sm:w-[370px] xl:w-[450px]">
        <Image src={icon} alt={`${title} Icon`} width={35.36} height={35.36} />
        <div className="flex flex-col justify-start items-start">
            <h3 className="font-semibold text-[18px] text-color-zero mt-4">{title}</h3>
            <p className="text-sm leading-base text-colour-five">{text}</p>
        </div>
    </section>
    )
}
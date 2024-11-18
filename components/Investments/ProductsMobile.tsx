import Image from "next/image"
export default function ProductMobile () {
    return (
        <div className="flex-col space-y-3 py-4 lg:hidden">
        <section className="flex gap-2 bg-light-grey shadow-sm p-3 rounded-common">
          <div className="flex-shrink-0">
            <Image
              src="/images/potato-2.svg"
              height={77}
              width={77}
              alt="Potato image"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <p className="text-color-one text-[0.625rem]">ONGOING</p>
                <p className="text-sm text-colour-five">
                  Pharetra diam vitae duis vash aliquet
                </p>
              </div>
              <div>
                <p className="text-xs text-color-zero font-medium">
                  $210
                </p>
                <p className="text-[0.625rem] text-color-one tracking-tight whitespace-nowrap">
                  ROI:10% ($21)
                </p>
              </div>
            </div>
            <hr className="my-1" />
            <p className="text-[0.625rem] text-[rgba(151,156,169,1)]">
              MATURITY DATE: 22/9/2025
            </p>
          </div>
        </section>
        <section className="flex gap-2 bg-light-grey shadow-sm p-3 rounded-common">
          <div className="flex-shrink-0">
            <Image
              src="/images/potato-2.svg"
              height={77}
              width={77}
              alt="Potato image"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <p className="text-color-one text-[0.625rem]">ONGOING</p>
                <p className="text-sm text-colour-five">
                  Pharetra diam vitae duis vash aliquet
                </p>
              </div>
              <div>
                <p className="text-xs text-color-zero font-medium">
                  $210
                </p>
                <p className="text-[0.625rem] text-color-one tracking-tight whitespace-nowrap">
                  ROI:10% ($21)
                </p>
              </div>
            </div>
            <hr className="my-1" />
            <p className="text-[0.625rem] text-[rgba(151,156,169,1)]">
              MATURITY DATE: 22/9/2025
            </p>
          </div>
        </section>
        <section className="flex gap-2 bg-light-grey shadow-sm p-3 rounded-common">
          <div className="flex-shrink-0">
            <Image
              src="/images/potato-2.svg"
              height={77}
              width={77}
              alt="Potato image"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <p className="text-color-one text-[0.625rem]">ONGOING</p>
                <p className="text-sm text-colour-five">
                  Pharetra diam vitae duis vash aliquet
                </p>
              </div>
              <div>
                <p className="text-xs text-color-zero font-medium">
                  $210
                </p>
                <p className="text-[0.625rem] text-color-one tracking-tight whitespace-nowrap">
                  ROI:10% ($21)
                </p>
              </div>
            </div>
            <hr className="my-1" />
            <p className="text-[0.625rem] text-[rgba(151,156,169,1)]">
              MATURITY DATE: 22/9/2025
            </p>
          </div>
        </section>
      </div>
    )
}
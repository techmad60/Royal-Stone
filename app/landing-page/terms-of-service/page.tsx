//app/privacy-policy/page.tsx
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import DownloadApp from "@/components/ui/DownloadApp";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className={`flex flex-col`}>
      <Header />
      <main className="">
        <div className="flex flex-col px-4 mx-auto lg:max-w-[57.5rem] xl:max-w-[75.5rem] ">
          <section className="flex flex-col justify-start items-start mt-32">
            <h1
              className={`text-color-zero text-lg-base font-extrabold my-4 text-start lg:text-[39px]`}
            >
              TERMS AND CONDITION
            </h1>
            <p className="text-sm text-colour-five mb-4 lg:text-base">
              By accessing, viewing the Platform or using the Services through
              any means, you accept our terms and conditions and agree to be
              bound.
            </p>
            <p className="text-sm text-colour-five mb-4 lg:text-base">
              Updated Last: 30th September 2024
            </p>
          </section>
          <section className="flex flex-col justify-start items-start space-y-4 py-4 lg:space-y-20">
            {/* Introduction */}
            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                Introduction
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Royal stone Financial Technology Limited (&quot;Royal
                stone&quot;) is registered with Investment company in USA as a
                fund/portfolio manager. Royal stone provides an automated
                savings and investment platform available on its website at
                Royal stone.com and/or through its mobile applications.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                1.1 Definitions
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                This agreement will be effective on your acceptance of its terms
                electronically or otherwise through the platform.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                1.1.2 &quot;APIs&quot; means programmatic web application
                programming interfaces and associated tools and documentation
                that provide access to certain data displayed on the Platform.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                1.1.3 &quot;Applicable Law&quot; means, any constitution,
                statute, law, rule, regulation, ordinance, judgement, order,
                decree of the United States of America, or any published
                directive, guideline, requirement or other governmental
                restriction that has the force of law, whether in effect as of
                the date hereof or as of any date thereafter in United States of
                America.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                1.1.4 &quot;Client&quot;, &quot;Customer&quot;, &quot;you&quot;,
                &quot;your&quot; means a party using and utilising our Services
                through our Platform.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                1.1.5 &quot;Royal stone&quot;, We&quot;, &quot;us&quot;, and
                &quot;our&quot; means Royal stone capital and its successors,
                affiliates, and assignees. &quot;Royal stone Account&quot; means
                a Client or Customer&apos;s account with Royal stone for the
                Services we render.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                1.1.6 &quot;Partner Program&quot; refers to contractual
                relationships entered into between Royal stone and thirdparty
                service providers to enhance or build on Royal stone&apos;s
                product offerings.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                1.1.7 &quot;Platform&quot; means collectively, Royal
                stone&apos;s website, mobile applications, and blog and includes
                any updates or replacements as may be applicable.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                1.1.8 &quot;Services&quot; means the management of a
                Client&apos;s savings and investments made through the Platform
                and/or other services as may be agreed between the parties but
                subject always to the terms of our license.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                1.1.9 &apos;Terms of Use&apos; means these terms of use.
              </p>
            </section>

            {/* Whys? */}
            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                1.2 Purpose
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                We offer an automated savings and investment service as a
                licensed fund/portfolio manager. As our Client, we will use best
                efforts and reasonable care to manage your savings and
                investments made through our Platform on your behalf to maximize
                your returns.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                These Terms of Use set out the terms and conditions under which
                Royal stone will provide the Services to its Clients and under
                which they may access the Platform.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Please read the privacy policy carefully before accessing the
                Platform or using the Services.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                References to &quot;you&quot; or &quot;your&quot; are references
                to any person accessing or using the Platform, and/or Services
                by any means.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                1.3 Scope of Terms of Use
              </h2>

              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Subject to the provisions of clause 7 (Termination), these Terms
                of Use remain in effect until you discontinue your use of the
                Services/access to the Platform and all financial obligations
                with regard to your use of the Services have been fulfilled.
              </p>

              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Royal stone reserves the right to amend, modify or change any
                portion of the Terms of Use without prior notice to you and
                without your consent. Where any portion of the Terms of Use are
                amended or modified, such changes shall be effective
                immediately.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                We suggest that you review these Terms of Use periodically for
                such changes and/or modifications. You acknowledge that by
                accessing our Platform and using the Services after such
                change/modifications, you agree to these terms as modified.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                If you do not agree with these Terms of Use, please do not
                proceed with utilising the Platform and our Services. Please
                note that if you are an existing Client, these Terms of Use will
                apply in addition to those contained in any agreement entered
                into between Royal stone and third parties in relation to
                provision of the Services.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                2. Obligations
              </h2>
              <p className="font-bold text-colour-five lg:text-base">
                2.1 Eligibility
              </p>

              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Our services are available to individuals aged 18+ who meet our
                eligibility criteria.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Any access to the Platform or use of the Services by any person
                or entity who does not meet up with the above criteria is not
                allowed or permitted, and shall be in violation of these Terms
                of Use.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                2.2 Your Access
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                In order to access certain features of the Platform, you must
                register to create an account (&quot;Client Account&quot;). When
                you register, you will be asked to choose a password which you
                will be required to provide in order to access your Account.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Royal stone has physical, electronic, and procedural safeguards
                that comply with regulatory standards under Applicable Law to
                guard Clients&apos; personal information (see privacy policy).
                You are responsible for safeguarding your password and other
                Account information. You agree not to disclose your password to
                any third party and you will notify Royal stone immediately if
                your password is lost or stolen or if you suspect any
                unauthorised use of your Account.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                As a Client, you agree that you shall be solely responsible for
                any activities or actions under your Royalstone Account and that
                Royal stone is irrevocably authorised to comply with any
                instructions received on the Services on your behalf for your
                use of the Services. Such instructions shall be irrevocably
                deemed to have been authorised by you.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                If you do not use the Services/Platform for a certain period of
                time, Applicable Law may require us to report the funds in your
                Client Account as unclaimed property. If this occurs, we may try
                to locate you or your next of kin at the address shown in our
                records. If we are unable to locate you, we may be required to
                deliver any funds in your Client Account to the applicable state
                as unclaimed property. The specified period of time to report
                and deliver funds to a state varies by state.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                In the event of death, payments of all monies/interest in a
                Client Account shall be made in accordance with the Applicable
                Law.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                2.3 Alerts, Notifications and Service Communications
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                By creating a Client Account, you automatically sign up for
                various types of alerts via e-mail and mobile notification. We
                never include your password in these communications, but we may
                include your name, or email address and information about your
                portfolio(s) if you are a Client. Anyone with access to your
                e-mail or mobile device will be able to view these alerts. You
                may unsubscribe from marketing oriented emails at any time.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                2.4 Confidentiality
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                All information and documents obtained by Royal stone or its
                employees, consultants or agents which are not published or
                otherwise publicly available shall be kept confidential and not
                disclosed to third parties or the public. This restriction shall
                not apply to any information disclosed to legal advisers, or to
                a third party to the extent that this is deemed by Royal stone
                as required, by any court of competent jurisdiction, or by a
                governmental or regulatory authority. This covenant shall
                survive termination of these Terms of Use.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                3. Fund/Portfolio Manager services
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                The Client hereby appoints Royal stone as its fund/portfolio
                manager and grants a limited power-of-attorney with
                discretionary trading authority to manage the assets in your
                Customer Account. Royal stone accepts this appointment under the
                terms and conditions set forth.
              </p>

              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Our authority will include the ability to manage your Customer
                Account utilising your selected Royal stone investment model to:
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Buy, sell and trade stocks;
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Invest in different investment packages;
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Manage cash balances within your Client Account and
              </p>

              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Periodically rebalance your portfolio
              </p>

              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                In such circumstances, we will provide you with a simple means
                of opting-out of such marketing at the time that we collect your
                contact details and in any subsequent communications. The Soft
                Opt-In cannot be used to promote third party products and
                services.
              </p>

              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                If you do not want to receive any marketing communications from
                us, you can unsubscribe when we initially obtain your details,
                or by contacting us in writing at any time or by opting out by
                following the opt out instructions on our website or app or
                contained in the relevant telephone, SMS, other electronic
                means, post, or email marketing communication.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Please note that your opting out of marketing communications
                will not prevent us from continuing to communicate with you as
                necessary to manage your account (such service messages may
                include, for example, where we consider it suitable or proper,
                in the circumstances, to make you aware of economic matters
                which may require your attention, and that you may otherwise
                have been unaware). Please refer to www.ii.co.uk for details of
                our products and services. Any such opt-out requests will not
                affect the running of your existing account or the services you
                request from us, in respect of which we will still process your
                personal data in accordance with this policy.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                7. Breach of Personal Data
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                In the event of a breach of security leading to the accidental
                or unlawful destruction, loss, alteration, unauthorized
                disclosure of, or access to Personal Data, we shall, within 72
                (Seventy-Two) hours of having knowledge of such breach, report
                the details of the breach to the relevant regulatory body.
              </p>

              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Furthermore, where we ascertain that such breach is detrimental
                to your rights and freedom in relation to your Personal Data, we
                shall within 7 (Seven) working days of having knowledge of the
                occurrence of such breach take steps to inform you of the breach
                incident, the risk to your rights and freedom and any course of
                action to remedy said breach.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                8. Cookies
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Most web browsers are set to accept cookies by default. If you
                prefer, you can usually choose to set your browser to remove or
                reject browser cookies. Please note that if you choose to remove
                or reject cookies, this could affect the availability and
                functionality of our Services.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                9. Who is your personal data shared with?
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                We may disclose your personal data to: Entities within our
                Group; Law enforcement bodies and/or other regulatory entities
                in order to comply with any legal obligation; Third parties who
                we use to carry out the checks that we need to carry out on you,
                such as identification verification, account verification,
                anti-money laundering checks, including financial crime
                prevention agencies and utility companies, and as specified in
                the terms of service; Other parties who help us to deliver the
                services to you who may be located in or outside the European
                Economic Area (EEA); Third parties for marketing purposes
                subject to the limitations set out in section 6; Third parties
                to run, develop and/or grow our business, when it is in our
                legitimate interests to do so; Your employer (or the employer of
                a person who you are connected to) and/or an agent designated by
                your employer, if required by law or regulation which the
                relevant employer is subject to and you have consented to such
                data sharing.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Third parties who we share your personal data with may only use
                it for the purposes set out in this policy and in accordance
                with all applicable laws. If we transfer your data outside of
                the EEA, we will always ensure that appropriate controls are in
                place to protect your data in accordance with applicable data
                protection laws.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                For details of the potential transfers of or access to your
                personal data within or outside of the EEA and the safeguards
                that we have in place when transferring, or allowing access to,
                your personal data, (and for a copy of the safeguards, where
                applicable) please contact our Data Protection Officer via email
                at EMAIL ADDRESS or using the postal address given at the end of
                this policy. Your information may also be collected and used by
                any of the parties detailed in this section.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                10. Safeguarding your personal data
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                We take all reasonable care in the collection, storage,
                processing and disclosure of your personal data and have
                implemented internal security procedures to minimize the risk
                that unauthorized parties will be able to access and misuse the
                information. It is because of these security procedures that we
                may ask for proof of identity before we disclose any personal
                information about you.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                11. Sale of the business
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                In the event that we are sold (fully or partially), integrated
                with another business or dispose of our rights and obligations
                under any agreement with you, your records may be disclosed
                under appropriate confidentiality terms to our advisers and any
                prospective purchaser&apos;s adviser, and will be passed onto
                the new owners in accordance with all applicable laws. In the
                event that we buy any business or assets, we may disclose your
                personal data to the prospective seller of such business or
                assets under appropriate confidentiality terms and in accordance
                with all applicable laws.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                12. Third Party Links
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Please bear in mind that this policy only applies to websites
                and services operated by us and not those operated by third
                parties, including those to which our websites may link. We
                suggest that you make yourself familiar with any privacy policy
                provided by such third-party websites before providing personal
                information about yourself.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                13. Your rights and contacting us
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Subject to certain exemptions, and in some cases dependent upon
                the processing activity we are undertaking, you have certain
                rights in relation to your personal information, as follows:
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                To ask us not to process your personal data for marketing
                purposes;
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                To access personal information held about you and to obtain a
                copy of it (Please note: If you require information about your
                account and/or about any services we have provided to you,
                please contact our Customer Services team in the first instance.
                In most cases, we should be able to provide the information you
                require, and this will typically be quicker than submitting a
                Data Subject Access Request (DSAR));
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                To restrict or object to the processing of your personal data
                and to request its erasure under certain circumstances. Please
                note that we will not be able to erase personal data where we
                have a legal obligation to retain such data or if we need to
                hold onto such data for other legitimate purposes e.g. defending
                any potential legal claim. In most cases, this means that we
                need to retain all or some of your personal data for 6 years
                after the closure of your account with us;
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                To prevent any processing of a record of personal data that is
                causing or is likely to cause unwarranted and substantial damage
                or distress to you or another individual;
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                In certain circumstances, to request that the personal data
                which you have provided to us, be transmitted to another data
                controller in a structured, commonly used, and machine-readable
                format without hindrance, where technically feasible;
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                To obtain a copy of personal information safeguards used for
                transfers outside your jurisdiction;
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                To lodge a complaint about the way in which your personal data
                is being shared with a supervisory authority; and Where we rely
                on your consent to use your personal data, you have the right to
                withdraw that consent at any time.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                If you wish to exercise any of the above mentioned rights, we
                may ask you for additional information to confirm your identity
                and for security purposes, in particular before disclosing
                personal information to you. We reserve the right to charge a
                fee where permitted by law, for example if your request is
                manifestly unfounded or excessive.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                You can exercise your rights by contacting us using the details
                below. Subject to legal and other permissible considerations, we
                will make every reasonable effort to honour your request
                promptly or inform you if we require further information in
                order to fulfil your request.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Please note that we may not always be able to fully address your
                request, for example if it would impact the duty of
                confidentiality we owe to others, or if we are legally permitted
                to deal with the request in a different way.
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                If you have any queries about this policy or our use of your
                personal data, please contact our Data Protection Officer at{" "}
                <span className="font-semibold">EMAIL ADRESS</span> or in
                writing at:
              </p>
              <p className="text-sm text-colour-five leading-[28px] font-semibold lg:text-lg lg:leading-[44px]">
                PHYSICAL ADERESS
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                If you have any queries about any of our terms of service
                documents or the website in general, do not hesitate to contact
                us at:
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Customer Services
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Royal Stone Capital
              </p>
              <p className="text-sm text-colour-five leading-[28px] font-semibold lg:text-lg lg:leading-[44px]">
                PHYSICAL ADERESS
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Tel:
              </p>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                Email:
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="font-bold text-colour-five lg:text-base">
                14. Complaints
              </h2>
              <p className="text-sm text-colour-five leading-[28px] lg:text-lg lg:leading-[44px]">
                If you have any concerns or complaints as to how we have handled
                your personal data you may lodge a complaint with the USA&apos;s
                data protection regulator, the FTC, who can be contacted through
                their website at{" "}
                <Link
                  href="https://www.ftc.gov/about-ftc/contact"
                  className="text-color-one duration-300 hover:text-green-700"
                >
                  https://www.ftc.gov/about-ftc/contact
                </Link>
                .
              </p>
            </section>
          </section>
        </div>
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
}

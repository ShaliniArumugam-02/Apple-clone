import React from "react";
import FooterHeading from "./FooterHeading";
import {
  shopAndLearnLinks,
  accountLinks,
  entertainmentLinks,
  appleStoreLinks,
  businessLinks,
  educationLinks,
  healthcareLinks,
  appleValuesLinks,
  aboutAppleLinks,
} from "../utils/Constant/FooterLinks";
import FooterCollapseSection from "./FooterCollapseSection";

function Footer() {
  return (
    <>
      <div className=" footer1  bg-[#F5F5F7] mt-6">
        <div className="text-xs flex flex-col gap-4 text-gray-500 px-4 py-6 max-w-[980px] mx-auto">
          <p>
            ◊No Cost EMI is available with the purchase of an eligible product
            made using qualifying cards on 3-, 6-, 9- or 12-month tenures from
            most leading card issuers. Eligible AirPods, HomePod and Beats
            products are available with No Cost EMI on 3- and 6-month tenures
            only. Monthly pricing is rounded to the nearest rupee. Exact pricing
            will be provided by your card issuer, subject to your card issuer’s
            terms and conditions. Minimum order spend applies as per your card
            issuer’s threshold. No Cost EMI is not available to business
            customers and cannot be combined with Apple Store for Education or
            Corporate Employee Purchase Plan pricing. Card eligibility is
            subject to terms and conditions between you and your card issuer.
            Offer may be revised or withdrawn at any time without any prior
            notice. Terms apply.
          </p>
          <p>Representative example:</p>
          <p>
            A purchase of ₹79900.00 repaid over 12 months with an interest rate
            of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly
            payments of ₹6658.00. Total amount payable: ₹79900.00.
          </p>
          <p>
            ‡Instant cashback is available with the purchase of an eligible
            product with qualifying American Express, Axis Bank and ICICI Bank
            cards only. Minimum transaction value of ₹10001.00 applies. Click
            here to see instant cashback amounts and eligible devices. Instant
            cashback is available for up to two orders per rolling 90-day period
            with an eligible card. Card eligibility is subject to terms and
            conditions between you and your card issuer. Total transaction value
            is calculated after any trade-in credit or eligible discount is
            applied. Any subsequent order adjustment(s) or cancellation(s) may
            result in instant cashback being recalculated, and any refund may be
            adjusted to account for instant cashback clawback; this may result
            in no refund being made to you. Offer may be revised or withdrawn at
            any time without any prior notice. Additional terms apply. Instant
            cashback is not available to Business customers and cannot be
            combined with Apple Store for Education or Corporate Employee
            Purchase Plan pricing. Multiple separate orders cannot be combined
            for instant cashback.
          </p>
          <p>
            *Apple Education Pricing is available to current and newly accepted
            college students and their parents, as well as teachers and staff at
            all levels. For more information, visit apple.com/in-edu/store.
          </p>
          <p>
            1. Qualified Purchasers can receive Promotion Savings when they
            purchase an eligible Mac or iPad with their choice of a Promotion
            Product at a Qualifying Location. Customers will be charged for all
            items in their cart, including the Promotion Product. Only one
            Promotion Product can be obtained per eligible Mac or iPad per
            Qualified Purchaser. The offer is subject to availability, while
            supplies last. View full terms and conditions of offer here.
          </p>
          <p>
            2. Available in two models: AirPods 4 and AirPods 4 with Active
            Noise Cancellation. Apple Intelligence is available in beta on all
            iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17
            Pro), and iPad and Mac models with M1 and later, with Siri and
            device language set to the same supported language, as part of an
            iOS 18, iPadOS 18 and macOS Sequoia software update. Supported
            languages include English, French, German, Italian, Portuguese
            (Brazil), Spanish, Japanese, Korean and Chinese (Simplified). More
            languages are coming over the course of the year, including
            Vietnamese. Some features may not be available in all regions or
            languages.
          </p>
          <p>A subscription is required for Apple TV+.</p>
          <p>
            Features are subject to change. Some features, applications and
            services may not be available in all regions or all languages.
          </p>

          <div className="border-t border-gray-400"></div>
        </div>
        {/* mobile footer */}
        <div className="block md:hidden px-4 pb-6">
          <FooterCollapseSection
            title="Shop and Learn"
            links={shopAndLearnLinks}
          />
          <FooterCollapseSection title="Account" links={accountLinks} />
          <FooterCollapseSection
            title="Entertainment"
            links={entertainmentLinks}
          />
          <FooterCollapseSection title="Apple Store" links={appleStoreLinks} />
          <FooterCollapseSection title="For Business" links={businessLinks} />
          <FooterCollapseSection title="For Education" links={educationLinks} />
          <FooterCollapseSection
            title="For Healthcare"
            links={healthcareLinks}
          />
          <FooterCollapseSection
            title="Apple Values"
            links={appleValuesLinks}
          />
          <FooterCollapseSection title="About Apple" links={aboutAppleLinks} />
        </div>

        {/* laptop footer */}
        <div className=" footer2 text-xs text-gray-500  gap-20 px-4 py-6 max-w-[980px] mx-auto hidden lg:flex">
          <div className="space-y-3">
            <FooterHeading>Shop and Learn</FooterHeading>
            {shopAndLearnLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="space-y-3">
            <FooterHeading>Account</FooterHeading>
            {accountLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            <FooterHeading>Entertainment</FooterHeading>
            {entertainmentLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="space-y-3">
            <FooterHeading>Apple Store</FooterHeading>
            {appleStoreLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="space-y-3">
            <FooterHeading>For Business</FooterHeading>
            {businessLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <FooterHeading>For Education</FooterHeading>
            {educationLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <FooterHeading>For Healthcare</FooterHeading>
            {healthcareLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="space-y-3">
            <FooterHeading>Apple Values</FooterHeading>
            {appleValuesLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <FooterHeading>About Apple</FooterHeading>
            {aboutAppleLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="max-w-[980px] mx-auto px-4">
          <div className="border-t border-gray-400 h-[1x] mt-4"></div>
        </div>
        <div className="flex gap-5 text-gray-500 text-xs p-5 max-w-[980px] mx-auto">
          <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
          <p>Privacy Policy | </p>
          <p>Terms oF Use | </p>
          <p>Sales Policy | </p>
          <p>Legal | </p>
          <p>Site Map | </p>
          <p className="ml-auto">India</p>
        </div>
      </div>
    </>
  );
}

export default Footer;

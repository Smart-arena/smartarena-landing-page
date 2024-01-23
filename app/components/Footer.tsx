import { Mail, Send } from "@/public/Icons";
import SmartArena from "@/public/Smart Arena overall.svg";
import Image from "next/image";
import Link from "next/link";
import { Key } from "react";

const Footer = () => {
  type FooterType = {
    link: string;
    name: string;
    key: Key | null | undefined;
  }[];

  const homeLinks: FooterType = [
    {
      link: "https://shop.mysmartarena.com/allproducts",
      name: "Product Store",
      key: 0,
    },
    {
      link: "#features",
      name: "Features",
      key: 1,
    },
    {
      link: "#testimonials",
      name: "Testimonials",
      key: 2,
    },
    {
      link: "#faqs",
      name: "FAQs",
      key: 3,
    },
  ];

  const aboutLinks: FooterType = [
    {
      link: "#",
      name: "Our Story",
      key: 0,
    },
    {
      link: "#",
      name: "Our Works",
      key: 1,
    },
    {
      link: "#",
      name: "How it Works",
      key: 2,
    },
    {
      link: "#",
      name: "Our Team",
      key: 3,
    },
    {
      link: "#",
      name: "Our Clients",
      key: 3,
    },
  ];

  // const servicesLinks: FooterType = [
  //   {
  //     link: "#",
  //     name: "Valuation Mastery",
  //     key: 0,
  //   },
  //   {
  //     link: "#",
  //     name: "Strategic Marketing",
  //     key: 1,
  //   },
  //   {
  //     link: "#",
  //     name: "Negotiation Wizardry",
  //     key: 2,
  //   },
  //   {
  //     link: "#",
  //     name: "Closing Success",
  //     key: 3,
  //   },
  //   {
  //     link: "#",
  //     name: "Property Management",
  //     key: 3,
  //   },
  // ];

  const contactLinks: FooterType = [
    {
      link: "#",
      name: "Contact Form",
      key: 0,
    },
    {
      link: "#",
      name: "Our Offices",
      key: 1,
    },
  ];

  return (
    <>
      <footer className="max-w-7xl mx-auto grid lg:grid-cols-7 gap-4 h-auto">
        <div className="lg:col-span-2 lg:mx-auto">
          <Image src={SmartArena} alt="smart-arena" className="lg:ml-6" />

          <div className="flex h-auto items-center mt-4 ">
            <Mail className=" z-10 scale-110 absolute left-6 lg:relative lg:left-7" />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-[#141414] px-3 pl-9 lg:pl-10 py-3 rounded-lg text-white outline-2 outline-white"
            />
            <a href="mailto:contact@mysmartarena.com" className="pb-5 lg:pb-0">
              <Send className=" z-10 scale-110 absolute left-[14.2rem] lg:relative lg:-left-10" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="py-8 grid lg:grid-cols-3 grid-cols-2 gap-4">
            <div className="space-y-4">
              <h1 className="text-white/50">Home</h1>
              <div className="space-y-3">
                {homeLinks.map(({ name, link, key }) => (
                  <>
                    <h1
                      className="cursor-pointer hover:scale-110 w-fit duration-200 font-light active:scale-90 text-white"
                      key={key}
                    >
                      <Link href={link}>{name}</Link>
                    </h1>
                  </>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-white/50">About Us</h1>
              <div className="space-y-3">
                {aboutLinks.map(({ name, link, key }) => (
                  <>
                    <h1
                      className="cursor-pointer hover:scale-110 font-light duration-200 w-fit active:scale-90 text-white"
                      key={key}
                    >
                      <Link href={link}>{name}</Link>
                    </h1>
                  </>
                ))}
              </div>
            </div>

            {/* <div className="space-y-4">
              <h1 className="text-white/50">Services</h1>
              <div className="space-y-3">
                {servicesLinks.map(({ name, link, key }) => (
                  <>
                    <h1
                      className="cursor-pointer hover:scale-110 font-light duration-200 w-fit active:scale-90 text-white"
                      key={key}
                    >
                      <Link href={link}>{name}</Link>
                    </h1>
                  </>
                ))}
              </div>
            </div> */}

            <div className="space-y-4">
              <h1 className="text-white/50">Contact Us</h1>
              <div className="space-y-3">
                {contactLinks.map(({ name, link, key }) => (
                  <>
                    <h1
                      className=" cursor-pointer hover:scale-110 font-light duration-200 w-fit active:scale-90 text-white"
                      key={key}
                    >
                      <Link href={link}>{name}</Link>
                    </h1>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

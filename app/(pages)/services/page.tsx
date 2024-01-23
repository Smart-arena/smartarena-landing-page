"use client";
import Navbar from "@/app/components/Navbar";
import { Key, SetStateAction, useEffect, useState } from "react";
import Home1 from "@/public/smart-home-1.png";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import { fetchServices } from "@/app/utils/utils";
import Loading from "./Loading";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@/public/Icons";

const Services = () => {
  type ServicesProps = {
    id: String;
    name: String;
    key: null | Key | undefined;
  }[];

  type ProductType = {
    _id: string;
    category: string;
    description: string;
    images: string[];
    name: string;
    videoLink: string;
  }[];

  const services: ServicesProps = [
    {
      id: "smart-home-integration",
      name: "Smart Home Integration",
      key: 0,
    },
    {
      id: "smart-door-locks",
      name: "Smart Door Locks",
      key: 1,
    },
    {
      id: "gate-automation",
      name: " Gate Automation",
      key: 2,
    },
    {
      id: "hotel-access-control",
      name: "Hotel Access Control",
      key: 3,
    },
    {
      id: "cctv-system",
      name: "CCTV System",
      key: 4,
    },
    {
      id: "interiors-finishing",
      name: "Interiors Finishing",
      key: 5,
    },
    {
      id: "air-conditioning-system",
      name: "Air Conditioning System",
      key: 6,
    },
    {
      id: "electric-perimeter-system",
      name: "Electric Perimeter System",
      key: 7,
    },
    {
      id: "lightning-automation",
      name: "Lightning automation",
      key: 8,
    },
    {
      id: "electrical-services",
      name: "Electrical Services",
      key: 9,
    },
    {
      id: "solar-inverter-system",
      name: "Solar Inverter System",
      key: 10,
    },
    {
      id: "sound-system",
      name: "Sound System",
      key: 11,
    },
  ];

  const [servicesData, setServicesData] = useState<ProductType>([]);
  const [specificServiceData, setSpecificServiceData] = useState<ProductType>(
    []
  );
  const [serviceFilter, setFilter] = useState("");
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      const services = await fetchServices();
      setServicesData(services?.data);
      console.log(services?.data);
      setLoading(false);
    };
    fetchService();
  }, []);

  const servicesValue = (value: SetStateAction<string>) => {
    // const serviceDatum = servicesData.filter(
    //   (service) => service.category === value
    // );
    // console.log(serviceDatum);
    // setSpecificServiceData(serviceDatum);4
    setFilter(value);
  };

  return (
    <>
      {/* Navigation menu */}
      <nav
        id="home"
        className="bg-dark-blue sticky top-0 shadow shadow-white/50 lg:shadow-none z-20"
      >
        <Navbar />
      </nav>

      <Select onValueChange={servicesValue}>
        <SelectTrigger className="w-[180px] m-8">
          <SelectValue placeholder="Select a Service" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>All Services</SelectLabel>

            {services.map(({ id, name, key }) => (
              <>
                <SelectItem value={`${id}`} key={key}>
                  {name}
                </SelectItem>
              </>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="flex justify-center">
            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {servicesData
                .filter((item) => {
                  if (serviceFilter === "") {
                    return true;
                  }
                  return item.category === serviceFilter;
                })
                .map((service) => (
                  <Link href={`${service?.videoLink}`}>
                    <section className="bg-light-ash rounded-md">
                      <div className="p-4">
                        <Image
                          src={`https://res.cloudinary.com/deipg69lh/image/upload/${service.images.slice(
                            -1
                          )}`}
                          width={308}
                          height={222}
                          alt={`${service.name}`}
                          priority
                          className="rounded-sm"
                        />
                        <div className="py-4">
                          <h1 className="pb-3 text-xl font-semibold w-[290px]">
                            {service.name}
                            {/* Smart Home <br /> Integration */}
                          </h1>
                          <p className="text-black/50 leading-7 w-[290px]">
                            {/* Industrial development is our main <br />
                            line of business. We do factory <br />
                            Construction, Warehouse and others. */}
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </section>
                  </Link>
                ))}
            </section>
          </section>
        </>
      )}

      {/* Footer */}

      <footer
        className=" bg-dark-blue lg:px-10 p-8 px-4 mt-9"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="500"
      >
        <Footer />
      </footer>
      <footer id="contact" className="bg-[#000B0E] text-white p-3 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-between">
          <div className="lg:space-x-5 space-y-3 flex lg:flex-row flex-col pb-4 lg:pb-0 font-extralight h-auto items-center">
            <h1 className="lg:pt-[.8rem]">
              @{new Date().getFullYear()} Smart Arena. All Rights Reserved.
            </h1>
            <h1>Terms & Conditions</h1>
          </div>

          <div className="flex space-x-5 mx-auto lg:mx-0 p-4 lg:p-0 ">
            <Link href={"/"}>
              <FacebookLogo className="w-6 hover:scale-110 duration-200" />
            </Link>
            <Link href={"/"}>
              <TwitterLogo className="w-6 hover:scale-110 duration-200" />
            </Link>
            <Link href={"/"}>
              <InstagramLogo className="w-6 hover:scale-110 duration-200" />
            </Link>
            <Link href={"/"}>
              <LinkedinLogo className="w-6 hover:scale-110 duration-200" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Services;

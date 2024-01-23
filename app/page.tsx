"use client";

import { Key, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import HouseImg from "@/public/smart-arena-home.png";
import Home1 from "@/public/smart-home-1.png";
import Home2 from "@/public/smart-home-2.png";
import Home3 from "@/public/smart-home-3.png";
import BigE from "@/public/bg-e.png";
import BigW from "@/public/bg-w.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Portfolio,
  ProductStore,
  Services,
  SmartChoice,
  Amazon,
  Sonos,
  Centurion,
  Hikvision,
  Nemtek,
  Google,
  Apple,
  Ahua,
  Zemismart,
  Moes,
  Sprinkles,
  Phone,
  Gmail,
  SprinklesWhite,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@/public/Icons";
import Counter from "./components/Counter";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { fetchProducts } from "./utils/utils";
import productImg1 from "@/public/EchoShow1edit.jpg";
import productImg2 from "@/public/hikjong.png";
import productImg3 from "@/public/security-cam.png";
import Experienced from "@/public/Experienced.svg";
import CompetitivePrice from "@/public/Competitive-price.svg";
import OnTime from "@/public/On-time.svg";
import BestMaterials from "@/public/Best-materials.svg";
import CommaSvg from "@/public/CommaSvg.svg";
import Ratings from "@/public/Ratings.svg";
import Footer from "./components/Footer";

const Home = () => {
  type ProductTypeTypes = {
    name: string;
    value: string;
    key: Key | null | undefined;
  }[];

  const productType: ProductTypeTypes = [
    {
      name: `${Amazon}`,
      value: "Amazon",
      key: 1,
    },
    {
      name: `${Sonos}`,
      value: "Sonos",
      key: 2,
    },
    {
      name: `${Centurion}`,
      value: "Centurion",
      key: 3,
    },
    {
      name: `${Hikvision}`,
      value: "Hikvision",
      key: 4,
    },
    {
      name: `${Nemtek}`,
      value: "Nemtek",
      key: 5,
    },
    {
      name: `${Google}`,
      value: "Google",
      key: 6,
    },
    {
      name: `${Apple}`,
      value: "Apple",
      key: 7,
    },
    {
      name: `${Ahua}`,
      value: "Ahua",
      key: 8,
    },
    {
      name: `${Zemismart}`,
      value: "Zemistart",
      key: 9,
    },
    {
      name: `${Moes}`,
      value: "Moes",
      key: 10,
    },
  ];

  // const [products, setProduct] = useState<any>([]);

  useEffect(() => {
    AOS.init();

    // const fetchProduct = async () => {
    //   const product = await fetchProducts();
    //   setProduct(product?.data);
    // };

    // fetchProduct();
  }, []);

  // console.log(products);

  return (
    <>
      {/* Navigation menu */}
      <nav
        id="home"
        className="bg-dark-blue sticky top-0 shadow shadow-white/50 lg:shadow-none z-20"
      >
        <Navbar />
      </nav>

      {/* Home page */}
      <section className="flex flex-col-reverse lg:flex-row pt-3 lg:pt-0 bg-dark-blue text-white">
        <div className="lg:w-[63%] w-[100%] lg:mx-0 mx-auto lg:py-10 py-6 lg:px-[4.3rem] px-7">
          <h1 className=" lg:text-4xl text-2xl leading-relaxed tracking-wider">
            We Transform Regular <br /> Homes into Intelligent <br /> Smart
            Homes.
          </h1>
          <p className="text-white/65 leading-7 tracking-wider lg:pr-4 text-sm lg:text-base lg:pt-5 pt-4">
            Your journey to living in the most comfortable and luxurious AI
            property begins here. Explore our listings to find products or
            services that matches your dreams
          </p>

          <div className="lg:space-x-9 my-10 space-y-5 lg:space-y-0 lg:my-8">
            <button className="border-[1px] border-white/65 mt-3 py-4 px-5 rounded-lg hover:scale-110 active:scale-100  focus:scale-90 duration-200 lg:inline block w-full lg:w-max">
              Learn More
            </button>
            <button className="bg-light-blue mt-3 py-4 px-5 rounded-lg hover:scale-110 active:scale-100 focus:scale-90 duration-200 lg:inline block w-full lg:w-max">
              Browse Properties
            </button>
          </div>

          <div className="mt-6 grid lg:grid-cols-3 grid-cols-2 lg:gap-8 gap-6 lg:text-left text-center">
            <div
              className="border-[1px] border-white/50 lg:p-3 p-4 inline-block rounded-lg lg:pr-10"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              <h1 className="text-xl lg:font-semibold">
                <Counter start={0} end={200} duration={8} />+
              </h1>
              <p className="text-white/65 lg:text-sm text-xs">
                Happy Customers
              </p>
            </div>
            <div
              className="border-[1px] border-white/50 lg:p-3 p-4 inline-block rounded-lg lg:pr-10"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <h1 className="text-xl lg:font-semibold">
                <Counter start={0} end={200} duration={7} />+
              </h1>
              <p className="text-white/65 lg:text-sm text-xs">
                Serviced Properties
              </p>
            </div>
            <div
              className="border-[1px] border-white/50 lg:p-3 p-4 inline-block rounded-lg lg:pr-10 lg:col-span-1 col-span-2"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <h1 className="text-xl lg:font-semibold">
                $<Counter start={0} end={160} duration={7} />
                k+
              </h1>
              <p className="text-white/65 lg:text-sm text-xs">
                In Sales Of Products
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-[90%] mx-auto lg:mx-0 lg:w-[40%]"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <Image
            src={HouseImg}
            priority
            width={600}
            alt="house-image"
            className="lg:mx-0 lg:rounded-none mx-auto rounded-3xl"
          />
        </div>
      </section>
      {/* Home page */}
      <section className="grid lg:grid-cols-4 grid-cols-2 gap-5 p-2 bg-[#373737]">
        <Link href={"https://shop.mysmartarena.com"}>
          <div
            className="bg-dark-blue flex flex-col h-auto py-4 items-center justify-center rounded-lg lg:space-y-3 space-y-4 px-3"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <ProductStore />
            <h1 className="text-white lg:text-sm text-xs">Product Store</h1>
          </div>
        </Link>
        <Link href={"/services"}>
          <div
            className="bg-dark-blue flex flex-col h-auto py-4 items-center justify-center rounded-lg lg:space-y-3 space-y-4 px-3"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <Services />
            <h1 className="text-white lg:text-sm text-xs">Services</h1>
          </div>
        </Link>
        <Link href={"/"}>
          <div
            className="bg-dark-blue flex flex-col h-auto py-4 items-center justify-center rounded-lg lg:space-y-3 space-y-4 px-33"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <Portfolio />
            <h1 className="text-white lg:text-sm text-xs">Project Portfolio</h1>
          </div>
        </Link>
        <Link href={"/"}>
          <div
            className="bg-dark-blue flex flex-col h-auto py-4 items-center justify-center rounded-lg lg:space-y-3 space-y-4 px-3"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <SmartChoice />
            <h1 className="text-white lg:text-sm text-xs text-center">
              Smart Investments. Informed Decisions
            </h1>
          </div>
        </Link>
      </section>

      {/* Icons */}
      <section className="max-w-7xl mx-auto ">
        {/* <div className="grid grid-cols-5 gap-4"> */}

        <main className="flex justify-between p-4 space-x-4 rounded-xl pr-6 h-auto items-center">
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <Image src={Amazon} priority alt={"Amazon"} className="p-1" />
          </div>

          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="150"
          >
            <Image src={Sonos} priority alt={"Sonos"} />
          </div>

          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <Image src={Centurion} priority alt={"Centurion"} />
          </div>
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="450"
          >
            <Image src={Hikvision} priority alt={"Hikvision"} />
          </div>
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <Image src={Nemtek} priority alt={"Nemtek"} />
          </div>
        </main>

        <main className="flex justify-between p-4 pt-0 space-x-4 rounded-xl pr-6 h-auto items-center">
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="750"
          >
            <Image src={Google} priority alt={"Google"} />
          </div>
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="900"
          >
            <Image src={Apple} priority alt={"Apple"} className="" />
          </div>
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="1050"
          >
            <Image src={Ahua} priority alt={"Ahua"} />
          </div>
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="1200"
          >
            <Image src={Zemismart} priority alt={"Zemismart"} />
          </div>
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="1350"
          >
            <Image src={Moes} priority alt={"Moes"} />
          </div>
        </main>
        {/* </div> */}
      </section>

      {/* Featured Services */}
      <section className="bg-light-ash" id="services">
        <section className="p-8 grid grid-cols-2 max-w-7xl mx-auto">
          <div
            className="col-span-2 md:col-span-1"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <div className="space-y-2 col-span-3 md:col-span-2 ">
              <Sprinkles />
              <Link href={"services"}>
                <h1 className="text-xl md:text-3xl inline-block font-semibold">
                  Featured Services
                </h1>
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <div className="grid grid-cols-5 gap-5">
              <div
                className="lg:block hidden col-span-2 border-2 border-dark-blue p-8 rounded-3xl"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <div className="flex h-auto items-center mb-5 w-full">
                  <Phone />
                  <h1>
                    Call <br />
                    (+234) 9092622716
                  </h1>
                </div>
                <Link
                  href="tel:+2349092622716"
                  className="w-3/4 bg-light-blue rounded-xl text-white px-10 py-3"
                >
                  Call Now
                </Link>
              </div>
              <div
                className="col-span-3 lg:block hidden border-2 border-dark-blue p-8 rounded-3xl justify-self-end "
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                <div className="flex h-auto items-center mb-5 w-full space-x-3 space-y-3">
                  <Gmail className="scale-150" />
                  <h1>
                    Email <br />
                    contact@mysmartarena.com
                  </h1>
                </div>
                <Link
                  href="mailto:contact@mysmartarena.com"
                  className="w-3/4 bg-light-blue rounded-xl text-white px-10 py-3"
                >
                  Email Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Carousel
          className="w-full bg-light-ash pb-4 max-w-7xl mx-auto"
          // plugins={[
          //   Autoplay({
          //     delay: 3000,
          //   }),
          // ]}
        >
          <CarouselContent>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1 lg:pl-14 mx-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <section className="bg-light-ash">
                <div className="p-4">
                  <Image src={Home1} alt="home-1" priority />
                  <div className="p-4">
                    <h1 className="pb-3 text-xl font-semibold">
                      Smart Home <br /> Integration
                    </h1>
                    <p className="text-black/50 leading-7">
                      Industrial development is our main <br />
                      line of business. We do factory <br />
                      Construction, Warehouse and others.
                    </p>
                  </div>
                </div>
              </section>
            </CarouselItem>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1 lg:pl-12"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="400"
            >
              <section className="bg-light-ash">
                <div className="p-4">
                  <Image src={Home2} alt="home-1" priority />
                  <div className="p-4">
                    <h1 className="pb-3 text-xl font-semibold">
                      Smart Doorlock <br /> Installation
                    </h1>
                    <p className="text-black/50 leading-7">
                      Our experience building in the <br />
                      Commercial field includes Showrooms,
                      <br />
                      Supermalls and Office Buildings
                    </p>
                  </div>
                </div>
              </section>
            </CarouselItem>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1 lg:pr-4"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <section className="bg-light-ash">
                <div className="p-4">
                  <Image src={Home3} alt="home-1" priority />
                  <div className="p-4">
                    <h1 className="pb-3 text-xl font-semibold">
                      In-Ceiling Speaker <br />
                      Installation
                    </h1>
                    <p className="text-black/50 leading-7">
                      Residential development is the <br />
                      beginning that has shaped us to this <br />
                      day. Our development includes <br />
                      Houses & Apartments.
                    </p>
                  </div>
                </div>
              </section>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            className="absolute left-7"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="500"
          />
          <CarouselNext
            className="absolute right-7"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="500"
          />
        </Carousel>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto ">
        <div
          className="space-y-2 col-span-3 md:col-span-2 p-8"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <SprinklesWhite />
          <h1 className="text-xl md:text-3xl font-semibold">
            Featured Products
          </h1>
        </div>

        <div
          className="flex justify-between pt-5 h-auto items-center p-8"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="600"
        >
          <h1>
            Explore our handpicked selection of featured products. Click `View
            Details` for more information.
          </h1>
          <Link
            href={"https://shop.mysmartarena.com/allproducts"}
            className="bg-dark-blue text-white px-4 py-3 rounded-lg hover:scale-110 active:scale-100 duration-200 lg:block hidden "
          >
            View all Products
          </Link>
        </div>

        {/* <main>
          <Carousel className="w-full">
            <CarouselContent>
              {products &&
                products?.slice(3, 8)?.map((product: any) => {
                  return (
                    <>
                      <CarouselItem className=" lg:basis-1/3 md:basis-1/2 basis-1/1">
                        <Product product={product} />
                      </CarouselItem>
                    </>
                  );
                })}
            </CarouselContent>
            <CarouselPrevious
              className="absolute -left-7"
              // data-aos="zoom-in"
              // data-aos-duration="500"
              // data-aos-delay="500"
            />
            <CarouselNext
              className="absolute -right-7"
              // data-aos="zoom-in"
              // data-aos-duration="500"
              // data-aos-delay="500"
            />
          </Carousel>
        </main> */}

        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1 mx-3 md:mx-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <main className=" bg-dark-blue text-white rounded-lg w-[368px] p-8 my-8 md:m-8 ">
                <div>
                  <Image
                    src={productImg1}
                    alt={"Product image 1"}
                    className=" rounded-lg"
                    priority
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="font-semibold pt-4">Amazon Echo Show 15</h1>
                  <p className="text-white/70 text-sm h-[5rem]">
                    BRAND NEW Amazon Echo Show 15 Full HD 15.6` smart display
                    Alexa{" "}
                    <span className="text-white hover:cursor-pointer">
                      ... Read More
                    </span>
                  </p>
                </div>
                <div>
                  <button className="bg-light-blue mt-4 w-full py-3 rounded-lg font-light">
                    View Product Details
                  </button>
                </div>
              </main>
            </CarouselItem>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <main className=" bg-dark-blue my-8 md:m-8 text-white rounded-lg w-[368px] p-8">
                <div className="">
                  <Image
                    src={productImg2}
                    alt={"Product image 2"}
                    className=" rounded-lg"
                    priority
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="font-semibold pt-4">Smart Door Lock - F01</h1>
                  <p className="text-white/70 text-sm h-[5rem]">
                    Tuya WiFi Fingerprint Smart Door Lock Zigbee APP. Remote
                    Control Face Recognition Anti-theft Home Electronic
                    <span className="text-white hover:cursor-pointer">
                      ... Read More
                    </span>
                  </p>
                </div>
                <div>
                  <button className="bg-light-blue mt-4 w-full py-3 rounded-lg font-light">
                    View Product Details
                  </button>
                </div>
              </main>
            </CarouselItem>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1 mx-7 md:mx-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="800"
            >
              <main className=" bg-dark-blue my-8 md:m-8 text-white rounded-lg w-[368px] p-8">
                <div className="">
                  <Image
                    src={productImg3}
                    alt={"Product image 3"}
                    className=" rounded-lg"
                    priority
                  />
                </div>
                <div className="space-y-4">
                  <h1 className="font-semibold pt-4">5mp Hikvision Camera</h1>
                  <p className="text-white/70 text-sm h-[5rem]">
                    5MP Turbo HD TVI Turret Dome Mini Eyeball Analog Security
                    Camera, CCTV Surveillance. 2.8mm Wide Angle
                    <span className="text-white hover:cursor-pointer">
                      ... Read More
                    </span>
                  </p>
                </div>
                <div>
                  <button className="bg-light-blue mt-4 w-full py-3 rounded-lg font-light">
                    View Product Details
                  </button>
                </div>
              </main>
            </CarouselItem>
          </CarouselContent>

          <div
            className="absolute -bottom-[4rem] left-[1rem]"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="800"
          >
            <Link
              href={"https://shop.mysmartarena.com/allproducts"}
              className="bg-dark-blue text-white px-4 py-3 rounded-lg hover:scale-110 active:scale-100 duration-200 lg:hidden block "
            >
              View all Products
            </Link>
          </div>
          <div className="absolute -bottom-[1.5rem] right-[8rem] md:right-[10rem]">
            <CarouselPrevious
              className="absolute left-7"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="800"
            />
          </div>
          <div className="absolute -bottom-[1.5rem] -right-[.5rem] md:right-[1rem]">
            <CarouselNext
              className="absolute right-7"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="800"
            />
          </div>
        </Carousel>
        <div
          className="border-b-[2px] border-[#262626] mx-3 md:lg-mx-6 mb-[3rem]"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="900"
        ></div>
      </section>

      {/* What makes us different? */}
      <section className=" max-w-7xl mx-auto">
        <div
          className="space-y-2 col-span-3 md:col-span-2 p-8 pt-16"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <SprinklesWhite />
          <h1 className="text-xl md:text-3xl font-semibold">
            What Makes Us Different?
          </h1>
        </div>

        <section className="grid lg:grid-cols-4 md:grid-cols-2 mx-10 lg:mx-5 gap-8">
          <div
            className="space-y-3 md:space-y-7"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <Image src={Experienced} alt="Experienced" />
            <h1 className="font-semibold text-base lg:text-xl">Experienced</h1>
            <p className="leading-8">
              We have highly trained professionals with minimum of 5 years
              working experience in their field.
            </p>
          </div>
          <div
            className="space-y-3 md:space-y-7"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="700"
          >
            <Image src={CompetitivePrice} alt="Competitive-Price" />
            <h1 className="font-semibold text-base lg:text-xl">
              Competitive-Price
            </h1>
            <p className="leading-8">
              The prices we offer you are very competitive without reducing the
              quality of the company`s work in the slightest
            </p>
          </div>
          <div
            className="space-y-3 md:space-y-7"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="800"
          >
            <Image src={OnTime} alt="On-Time" />
            <h1 className="font-semibold text-base lg:text-xl">On-Time</h1>
            <p className="leading-8">
              We prioritize the quality of our work and finish it on time.
            </p>
          </div>
          <div
            className="space-y-3 md:space-y-7"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="900"
          >
            <Image src={BestMaterials} alt="Best-Materials" />
            <h1 className="font-semibold text-base lg:text-xl">
              Best-Materials
            </h1>
            <p className="leading-8">
              The material determines the building itself so we recommend that
              you use the best & quality materials in its class.
            </p>
          </div>
        </section>
      </section>

      {/* Frequently Asked Questions  FAQ*/}

      <section id="faqs" className="max-w-7xl mx-auto ">
        <div
          className="space-y-2 col-span-3 md:col-span-2 p-8 pt-16"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <SprinklesWhite />
          <h1 className="text-xl md:text-3xl font-semibold">
            Frequently Asked Questions
          </h1>
        </div>

        <div
          className="grid md:grid-cols-3 pt-5 h-auto items-center p-8"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="600"
        >
          <h1 className="col-span-2">
            Find answers to common questions about Smart Arena&apos;s products,
            services and smart home automation processes. We&apos;re here to
            provide clarity and assist you every step of the way.
          </h1>
          <div className="col-span-1 justify-self-end">
            <Link
              href={"/"}
              className="bg-dark-blue text-white px-4 py-3 rounded-lg hover:scale-110 active:scale-100 duration-200 lg:block hidden max-w-fit "
            >
              View all FAQ&apos;S
            </Link>
          </div>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1 mx-3 md:mx-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <main className=" bg-dark-blue text-white rounded-lg w-[368px] p-9 my-8 md:m-8 space-y-5 ">
                <h1>How do I search for services on Smart Arena?</h1>
                <p className="text-white/60 text-sm h-[3.8rem]">
                  Learn how to use our user-friendly search tools to find
                  services that match your criteria.
                </p>
                <button className=" border-[1px] border-white/50 px-3 py-2 rounded-lg">
                  Read More
                </button>
              </main>
            </CarouselItem>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <main className=" bg-dark-blue text-white rounded-lg w-[368px] p-9 my-8 md:m-8 space-y-5 ">
                <h1>How do I search for products on Smart Arena?</h1>
                <p className="text-white/60 text-sm h-[3.8rem]">
                  Learn how to use our user-friendly search tools to find
                  products that match your criteria..
                </p>
                <button className=" border-[1px] border-white/50 px-3 py-2 rounded-lg">
                  Read More
                </button>
              </main>
            </CarouselItem>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1 mx-7 md:mx-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="800"
            >
              <main className=" bg-dark-blue text-white rounded-lg w-[368px] p-9 my-8 md:m-8 space-y-5 ">
                <h1>How can I contact a Smart Arena Engineer?</h1>
                <p className="text-white/60 text-sm h-[3.8rem]">
                  Discover the different ways you can get in touch with our
                  experienced engineers.
                </p>
                <button className=" border-[1px] border-white/50 px-3 py-2 rounded-lg">
                  Read More
                </button>
              </main>
            </CarouselItem>
          </CarouselContent>

          <div
            className="absolute -bottom-[4rem] left-[1rem]"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="800"
          >
            <Link
              href={"/"}
              className="bg-dark-blue text-white px-4 py-3 rounded-lg hover:scale-110 active:scale-100 duration-200 lg:hidden block "
            >
              View all FAQ&apos;S
            </Link>
          </div>
          <div className="absolute -bottom-[1.5rem] right-[8rem] md:right-[10rem]">
            <CarouselPrevious
              className="absolute left-7"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="800"
            />
          </div>
          <div className="absolute -bottom-[1.5rem] -right-[.5rem] md:right-[1rem]">
            <CarouselNext
              className="absolute right-7"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="800"
            />
          </div>
        </Carousel>
        <div
          className="border-b-[2px] border-[#262626] mx-3 md:lg-mx-6 mb-[9rem]"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="900"
        ></div>
      </section>

      {/* What are our clients saying */}
      <section
        className="lg:flex hidden p-8 bg-[#001218] shadow-md shadow-white/10 max-w-[60rem] mx-auto justify-between h-[85vh] relative top-32 z-10"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="500"
      >
        <Carousel
          className="w-1/2"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="600"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="w-full mx-auto">
                <Image src={BigE} alt="Big-e" width={250} />
                <div className="bg-white rounded-3xl p-5 w-[250px] text-center space-y-3 relative left-[10rem] bottom-[7rem]">
                  <Image
                    src={CommaSvg}
                    alt="semicolon"
                    className="absolute -top-[2.7rem] left-[5rem]"
                  />
                  <h1 className="font-semibold ">Esther Lazarus</h1>
                  <p className="text-xs leading-5">
                    Smart Arena&apos;s automated devices have made my life
                    easier and given my home a sense of luxury. Their products
                    are unmatched in terms of usability and dependability.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full mx-auto">
                <Image src={BigW} alt="Big-e" width={250} />
                <div className="bg-white rounded-3xl p-5 w-[250px] text-center space-y-3 relative left-[10rem] bottom-[7rem]">
                  <Image
                    src={CommaSvg}
                    alt="semicolon"
                    className="absolute -top-[2.7rem] left-[5rem]"
                  />
                  <h1 className="font-semibold "> Wade Warren</h1>
                  <p className="text-xs leading-5">
                    Our experience with Smart Arena was outstanding. Their
                    team&apos;s dedication and professionalism made finding our
                    dream home a breeze. Highly recommended!
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute -bottom-[.1rem] right-[8rem] md:right-[10rem]">
            <CarouselPrevious
              className="absolute left-7"
              // data-aos="zoom-in"
              // data-aos-duration="500"
              // data-aos-delay="800"
            />
          </div>
          <div className="absolute -bottom-[.1rem] left-[10rem] md:right-[1rem]">
            <CarouselNext
              className="absolute right-7"
              // data-aos="zoom-in"
              // data-aos-duration="500"
              // data-aos-delay="800"
            />
          </div>
        </Carousel>

        <div
          className="w-1/2 mx-auto p-4 space-y-8 "
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="700"
        >
          <h1 className="text-white text-2xl font-semibold leading-10">
            What we have done & what our Customers say
          </h1>
          <p className="text-white/60 leading-9">
            We are to help you build a excellent build, with us nothing is
            impossible. See what we have done and what they have to say about
            our work perform.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto lg:hidden block">
        <div
          className="space-y-2 col-span-3 md:col-span-2 p-8 pt-16"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <SprinklesWhite />
          <h1 className="text-xl md:text-3xl font-semibold">
            What Our Clients Are Saying
          </h1>
        </div>

        <div
          className="grid md:grid-cols-3 pt-5 h-auto items-center p-8"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="600"
        >
          <h1 className="col-span-2">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Smart Arena.
          </h1>
          {/* <div className="col-span-1 justify-self-end">
            <Link
              href={"/"}
              className="bg-dark-blue text-white px-4 py-3 rounded-lg hover:scale-110 active:scale-100 duration-200 lg:block hidden max-w-fit "
            >
              View all FAQ&apos;S
            </Link>
          </div> */}
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1 mx-3 md:mx-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <main className=" bg-dark-blue text-white rounded-lg w-[368px] p-9 my-8 md:m-8 space-y-4 ">
                <div>
                  <Image src={Ratings} alt="ratings tag" />
                </div>
                <div>
                  <h1>Exceptional Service!</h1>
                  <p className="text-white/75 text-sm h-[6rem]">
                    Our experience with Smart Arena was outstanding. Their
                    team&apos;s dedication and professionalism made finding our
                    dream home a breeze. Highly recommended!
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.pn" />
                    <AvatarFallback className="bg-dark-blue border-[1px] p-5">
                      WW
                    </AvatarFallback>
                  </Avatar>

                  <h1>
                    Wade Warren <br />
                    <span className="text-white/60 text-sm">
                      Port Harcourt, Rivers State
                    </span>
                  </h1>
                </div>
              </main>
            </CarouselItem>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <main className=" bg-dark-blue text-white rounded-lg w-[368px] p-9 my-8 md:m-8 space-y-4 ">
                <div>
                  <Image src={Ratings} alt="ratings tag" />
                </div>
                <div>
                  <h1>Exceptional Service!</h1>
                  <p className="text-white/75 text-sm h-[6rem]">
                    Our experience with Smart Arena was outstanding. Their
                    team&apos;s dedication and professionalism made finding our
                    dream home a breeze. Highly recommended!
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.pn" />
                    <AvatarFallback className="bg-dark-blue border-[1px] p-5">
                      WW
                    </AvatarFallback>
                  </Avatar>

                  <h1>
                    Wade Warren <br />
                    <span className="text-white/60 text-sm">
                      Port Harcourt, Rivers State
                    </span>
                  </h1>
                </div>
              </main>
            </CarouselItem>
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2 basis-1/1 mx-7 md:mx-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="800"
            >
              <main className=" bg-dark-blue text-white rounded-lg w-[368px] p-9 my-8 md:m-8 space-y-4 ">
                <div>
                  <Image src={Ratings} alt="ratings tag" />
                </div>
                <div>
                  <h1>Exceptional Service!</h1>
                  <p className="text-white/75 text-sm h-[6rem]">
                    Our experience with Smart Arena was outstanding. Their
                    team&apos;s dedication and professionalism made finding our
                    dream home a breeze. Highly recommended!
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.pn" />
                    <AvatarFallback className="bg-dark-blue border-[1px] p-5">
                      WW
                    </AvatarFallback>
                  </Avatar>

                  <h1>
                    Wade Warren <br />
                    <span className="text-white/60 text-sm">
                      Port Harcourt, Rivers State
                    </span>
                  </h1>
                </div>
              </main>
            </CarouselItem>
          </CarouselContent>

          <div
            className="absolute -bottom-[4rem] left-[1rem]"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="800"
          >
            <Link
              href={"/"}
              className="bg-dark-blue text-white px-4 py-3 rounded-lg hover:scale-110 active:scale-100 duration-200 lg:hidden block "
            >
              View all Testimonials
            </Link>
          </div>
          <div className="absolute -bottom-[1.5rem] right-[8rem] md:right-[10rem]">
            <CarouselPrevious
              className="absolute left-7"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="800"
            />
          </div>
          <div className="absolute -bottom-[1.5rem] -right-[.5rem] md:right-[1rem]">
            <CarouselNext
              className="absolute right-7"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="800"
            />
          </div>
        </Carousel>
        <div
          className="border-b-[2px] border-[#262626] mx-3 md:lg-mx-6 mb-[9rem]"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="900"
        ></div>
      </section>

      {/* Footer */}

      <footer
        className=" bg-dark-blue lg:px-10 lg:pt-48 p-8 px-4"
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

export default Home;

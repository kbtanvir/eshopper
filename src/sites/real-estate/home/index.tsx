import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { BiArea } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import { IoCarSportOutline, IoLocate } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import { usePrevNextButtons } from "./CarouselNavigation";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { IoBedOutline } from "react-icons/io5";
import { Routes, imageRoute } from "../../../pages/sites/real-estate";
import { EmblaCarouselItem } from "./EmblaCarousel";

function WelcomeSliderItem({
  item,
}: {
  item: {
    title: string;
    discount: string;
    bg: string;
  };
}) {
  return (
    <CarouselItem className="relative h-[91.5vh]">
      <Image
        src={`${imageRoute}/demo-real-estate-slider-01.jpg`}
        fill
        alt="Picture of the author"
        className="z-0 object-cover"
      />
      <div
        className={`${item.bg}  section-box-w  grid cursor-pointer items-start gap-5 overflow-hidden`}
      >
        <div className="absolute z-10 flex h-full w-full flex-col justify-center gap-4 bg-opacity-50 ">
          <h3 className="text-base text-white max-md:text-xl">
            Some location in the city
          </h3>
          <h5 className="grid gap-0 text-[60px] text-white max-md:text-base">
            <span className="mb-[-20px] font-light">Luxurious</span>
            <span className="font-bold">Mension</span>
          </h5>
          <div className="flex gap-4">
            <Link href={Routes.shop.path}>
              <Button className="mt-2 bg-white text-[10px] uppercase text-black">
                Schedule Visit
              </Button>
            </Link>
            <Link href={Routes.shop.path}>
              <Button
                className="mt-2 bg-transparent  text-[10px] uppercase text-white"
                variant="outline"
              >
                View details
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-10 flex place-items-center gap-10 rounded-tl-lg bg-white px-10 py-10">
          <div className="flex  divide-x ">
            {/* convinience */}
            {[
              {
                icon: <IoBedOutline />,
                title: "3 Beds",
                price: "1000",
              },
              {
                icon: <PiBathtubLight />,
                title: "3 Baths",
                price: "1000",
              },
              {
                icon: <IoCarSportOutline />,
                title: "3 Parking",
                price: "1000",
              },
            ].map((conv, index) => (
              <div
                key={index}
                className="grid place-items-center items-center gap-2 px-5  text-black first:pl-0 last:pr-0"
              >
                <div className="text-[40px]">{conv.icon}</div>
                <div className="text-[14px]">{conv.title}</div>
              </div>
            ))}
          </div>
          <div className="grid place-items-center gap-2">
            For sell price
            <div className="text-3xl font-bold">$100000</div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
function WelcomeSection() {
  return (
    <Carousel
      // plugins={[plugin.current]}
      // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      // onMouseEnter={plugin.current.start}
      // // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      // onMouseLeave={plugin.current.stop}
      className=" w-full "
    >
      <CarouselContent>
        {[
          {
            title: "Fresh & Healthy Backery",
            discount: "35%",
            bg: "bg-red-100",
          },
        ].map((item, index) => (
          <WelcomeSliderItem key={index} item={item} />
        ))}
      </CarouselContent>
    </Carousel>
  );
}
function AboutSection() {
  return (
    <>
      <div className="section-box-w section-py flex gap-24">
        <div className="w-1/2">
          <div className="relative h-[600px] max-w-[500px]">
            <Image
              src={"/sites/real-estate/demo-real-estate-slider-01.jpg"}
              layout="fill"
              alt="Picture of the author"
              className="z-0 object-cover"
            />
          </div>
        </div>
        <div className="grid w-1/2 content-center items-center gap-4">
          <h3 className="text-[20px] font-bold text-purple-600">
            Online property marketplace
          </h3>
          <h2 className="text-[60px] font-light leading-[1.1em] text-black max-md:text-base">
            We help you find your{" "}
            <span className="underline-green-300 font-bold text-purple-600 underline">
              new place.
            </span>
          </h2>
          <p className="max-w-[400px] py-6 leading-9">
            Online property marketplace to buy, sell, and rent residential and
            commercial properties. Used by millions of renters to find property.
          </p>

          <div className="grid">
            {[
              {
                text: "10,000+ people trusting our agency.",
              },
              {
                text: "10,000+ people trusting our agency.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-center h-10  w-10 rounded-full bg-green-100 text-green-500">
                  <FaCheck />
                </div>
                <div className="font-bold">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="pt-10">
            <Button>About community</Button>{" "}
            <Button variant={"link"} className="flex-center gap-2">
              Our services <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
function CategorySection() {
  return (
    <>
      <div className="border-y-2">
        <div className="section-box-w flex items-center ">
          <div className="justify-stretchs grid-cols- flex w-full items-center divide-x-2">
            {/* Text box */}
            <div className="w-full max-w-[200px] pr-10 text-xl font-bold">
              What are you{" "}
              <span className="underline-green-300 font-bold text-purple-600 underline">
                looking
              </span>{" "}
              for?
            </div>
            {/* Category box grid */}
            <div className="grid w-full grid-cols-5 divide-x-2">
              {[
                {
                  icon: <IoBedOutline />,
                  title: "House",
                  count: 100,
                },
                {
                  icon: <IoBedOutline />,
                  title: "House",
                  count: 100,
                },
                {
                  icon: <IoBedOutline />,
                  title: "House",
                  count: 100,
                },
                {
                  icon: <IoBedOutline />,
                  title: "House",
                  count: 100,
                },
                {
                  icon: <IoBedOutline />,
                  title: "House",
                  count: 100,
                },
              ].map((item, i) => (
                <div
                  className="relative grid h-[180px] w-full place-items-center content-center justify-center gap-2"
                  key={i}
                >
                  <div className="text-[40px] font-bold">{item.icon}</div>
                  <div className="font-bold">{item.title}</div>
                  <div className="flex-center absolute left-4 top-4 rounded-md bg-green-100 px-3 py-1 text-sm text-green-500">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PropertyListCard() {
  return (
    <div className="relative w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-solid border-gray-100 bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg max-md:ml-0 max-md:w-full">
      {/* THUMBNAIL BOX */}
      <div className="relative flex  w-full  flex-col rounded-lg">
        {/* THUMBNAIL */}
        <div className="relative h-[260px]">
          <Image
            loading="lazy"
            src={"/sites/real-estate/demo-real-estate-slider-01.jpg"}
            alt="Picture of the author"
            fill
          />
        </div>
        {/* TAGS */}
        <div className="absolute flex w-full flex-col items-start">
          <div className="flex items-stretch pl-6 pt-6">
            <span className="justify-self-start whitespace-nowrap rounded-md border border-solid border-white border-opacity-10 bg-red-600 px-3.5 py-1.5 text-center text-xs leading-3 text-white">
              Rent
            </span>
          </div>
        </div>
      </div>
      {/* DETAILS BOX */}
      <div className="grid gap-6 px-10 py-6">
        {/* Title */}
        <div className="">
          <h3 className="text-lg font-bold">Luxury villa in Texas</h3>
          <p className="text-base opacity-80 ">982 Monroe ave, rochester</p>
        </div>
        {/* convinience */}
        <div className="flex justify-between">
          {[
            {
              icon: <IoBedOutline />,
              title: "Beds",
              amount: "04",
            },
            {
              icon: <PiBathtubLight />,
              title: "Baths",
              amount: "05",
            },
            {
              icon: <BiArea />,
              title: "Area",
              amount: "780m2",
            },
          ].map((conv, index) => (
            <div
              key={index}
              className="grid place-items-start gap-2 px-5  text-black first:pl-0 last:pr-0"
            >
              <div className="flex gap-2">
                <div className="text-[25px]">{conv.icon}</div>
                <div className="text-base font-bold">{conv.amount}</div>
              </div>
              <div className="text-[14px]">{conv.title}</div>
            </div>
          ))}
        </div>
      </div>
      {/* buttons and price */}
      <div className="flex items-center justify-between gap-6 border-t-2 px-10 py-6">
        <Button className="uppercase">View details</Button>
        <p className="text-2xl font-bold opacity-80">$600,000</p>
      </div>
    </div>
  );
}

function PropertyListSection() {
  return (
    <>
      <div className="section-py bg-gray-100">
        <div className="section-box-w">
          {/* SECTION TITLE 
          -----------------*/}
          <div className="flex justify-between pb-14">
            <div className="">
              <h2 className="text-[44px] font-light leading-[1.1em] text-black max-md:text-base">
                Property for{" "}
                <span className="underline-green-300 font-bold text-purple-600 underline">
                  sell and rent
                </span>
              </h2>
            </div>
            <div className="flex-center gap-2">
              <Button variant="link" className="flex-center gap-2 text-lg">
                View all properties{" "}
                <div className="flex-center ml-2 h-10 w-10 rounded-full bg-black text-[20px] text-white">
                  <FaArrowRight />
                </div>
              </Button>
            </div>
          </div>
          {/* Propertiy List
          -----------------*/}
          <div className="autofit-grid-250 grid w-full grid-cols-3  gap-6">
            <PropertyListCard />
            <PropertyListCard />
            <PropertyListCard />
            <PropertyListCard />
            <PropertyListCard />
            <PropertyListCard />
          </div>
        </div>
      </div>
    </>
  );
}
function WhyUs1Section() {
  return (
    <>
      <div className="section-box-w">
        <div className="section-py flex gap-24">
          {/* text box */}
          <div className="grid w-1/2 content-center items-center gap-4">
            <h3 className="text-[20px] font-bold text-purple-600">
              Online property marketplace
            </h3>
            <h2 className="max-w-[480px] text-[44px] font-light leading-[1.1em] text-black max-md:text-base">
              Accurate to 99% of a{" "}
              <span className="underline-green-300 font-bold text-purple-600 underline">
                property`s
              </span>{" "}
              details.
            </h2>

            <div className="grid max-w-[400px] gap-10 pt-14">
              {[
                {
                  text: "10,000+ people trusting our agency.",
                  desc: "Browse millions of properties in your city save your favorites.",
                  icon: <Image src={`${imageRoute}/loan.png`} alt="" fill />,
                },
                {
                  text: "Highest rental income projects",
                  desc: "Browse millions of properties in your city save your favorites.",
                  icon: (
                    <Image src={`${imageRoute}/satisfaction.png`} alt="" fill />
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-center relative  h-[80px] w-[80px] overflow-hidden rounded-full bg-green-100   text-green-500">
                    {item.icon}
                  </div>
                  <div className="grid gap-4">
                    <div className="font-bold">{item.text}</div>
                    <div className="opacity-70">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-10">
              <Button>Learn more</Button>{" "}
              <Button
                variant={"outline"}
                className="flex-center gap-2 border-2 border-black"
              >
                Trusted agents <FaArrowRight />
              </Button>
            </div>
          </div>
          {/* image box */}
          <div className="w-1/2">
            <div className="relative h-[600px]">
              <Image
                src={"/sites/real-estate/demo-real-estate-slider-01.jpg"}
                layout="fill"
                alt="Picture of the author"
                className="z-0 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="section-box-w flex-center gap-4 pb-20 text-xl font-semibold">
          <IoLocate className="text-purple-600" />
          Our selection of the best places around the world and pick yours.
        </div>
      </div>
    </>
  );
}
function WhyUs2Section() {
  return (
    <>
      <div className="section-box-w">
        <div className="section-py flex gap-24">
          {/* text box */}
          <div className="grid w-1/2 content-center items-center gap-4">
            <h3 className="text-[20px] font-bold text-purple-600">
              Online property marketplace
            </h3>
            <h2 className="max-w-[480px] text-[44px] font-light leading-[1.1em] text-black max-md:text-base">
              Accurate to 99% of a{" "}
              <span className="underline-green-300 font-bold text-purple-600 underline">
                property`s
              </span>{" "}
              details.
            </h2>

            <div className="grid max-w-[400px] gap-10 pt-14">
              {[
                {
                  text: "10,000+ people trusting our agency.",
                  desc: "Browse millions of properties in your city save your favorites.",
                  icon: <Image src={`${imageRoute}/loan.png`} alt="" fill />,
                },
                {
                  text: "Highest rental income projects",
                  desc: "Browse millions of properties in your city save your favorites.",
                  icon: (
                    <Image src={`${imageRoute}/satisfaction.png`} alt="" fill />
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-center relative  h-[80px] w-[80px] overflow-hidden rounded-full bg-green-100   text-green-500">
                    {item.icon}
                  </div>
                  <div className="grid gap-4">
                    <div className="font-bold">{item.text}</div>
                    <div className="opacity-70">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-10">
              <Button>Learn more</Button>{" "}
              <Button
                variant={"outline"}
                className="flex-center gap-2 border-2 border-black"
              >
                Trusted agents <FaArrowRight />
              </Button>
            </div>
          </div>
          {/* image box */}
          <div className="w-1/2">
            <div className="relative h-[600px]">
              <Image
                src={"/sites/real-estate/demo-real-estate-slider-01.jpg"}
                layout="fill"
                alt="Picture of the author"
                className="z-0 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="section-box-w flex-center gap-4 pb-20 text-xl font-semibold">
          <IoLocate className="text-purple-600" />
          Our selection of the best places around the world and pick yours.
        </div>
      </div>
    </>
  );
}
function LocationSliderItem() {
  return (
    <div className="relative h-[485px] bg-blue-300 ">
      <Image
        src={"/sites/real-estate/demo-real-estate-slider-01.jpg"}
        fill
        alt="Picture of the author"
        className="z-0 object-cover"
      />
      <div className="absolute h-full w-full bg-gradient-to-t from-gray-600 mix-blend-overlay" />
      <div className="relative h-[485px] w-[250px] text-white">
        <div className="absolute bottom-10 left-10 w-full">
          <div className="pb-4 text-2xl font-bold">Washington DC, USA</div>
          <div className="">20 property listing</div>
        </div>
        <div className="absolute flex w-full flex-col items-start">
          <div className="flex items-stretch pl-6 pt-6">
            <span className="justify-self-start whitespace-nowrap rounded-md border border-solid border-white border-opacity-10 bg-red-600 px-3.5 py-1.5 text-center text-xs leading-3 text-white">
              Rent
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      align: "start",
      loop: true,
    },
    [Autoplay()],
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="section-py   bg-gray-100">
        <div className="section-box-w relative flex  gap-14">
          <div className="grid content-center items-center gap-4">
            <h3 className="text-[20px] font-bold text-purple-600">
              Online property marketplace
            </h3>
            <h2 className="max-w-[480px]  text-[44px] font-light leading-[1.1em] text-black max-md:text-base">
              We are available in{" "}
              <span className="underline-green-300 font-bold text-purple-600 underline">
                many countries
              </span>
            </h2>
            <p className="max-w-[400px] pb-10 pt-6">
              Online property marketplace to buy, sell, and rent residential and
              commercial properties. Used by millions of renters to find
              property.
            </p>
            <div className="relative flex gap-4 ">
              <Button
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                className="h-20 w-20 rounded-full   bg-white text-[20px]  text-gray-600"
              >
                <FaArrowLeft />
              </Button>
              <Button
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                className="h-20 w-20  rounded-full     bg-white text-[20px]  text-gray-600"
              >
                <FaArrowRight />
              </Button>
            </div>
          </div>

          <div className="  mr-[-20vw]">
            <div className="">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {" "}
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <EmblaCarouselItem key={i} slides={3}>
                        <LocationSliderItem />
                      </EmblaCarouselItem>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function View() {
  return (
    <main>
      <WelcomeSection />
      <AboutSection />
      <CategorySection />
      <PropertyListSection />
      <WhyUs1Section />
      <LocationsSection />
      <WhyUs2Section />

     
      <>footer</>
    </main>
  );
}
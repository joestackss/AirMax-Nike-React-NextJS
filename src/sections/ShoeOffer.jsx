import Image from "next/image";
import { Button } from "../assets/component";
import { offers } from "../assets/images";

const ShoeOffer = () => {
  return (
    <section
      id="offers"
      className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container mt-4"
    >
      {/* Title */}
      <div
        className="flex flex-1 flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-spaceGrotesk font-semibold">
          Best Shoes for{" "}
        </h2>

        <h2 className="text-5xl font-spaceGrotesk font-extrabold my-4">
          <span className="text-[#0077b6]"> Best People</span>
        </h2>

        {/* Subtitle */}

        <p className="mt-4 font-spaceGrotesk">
          Start a shopping adventure that transforms your expectations with
          unbeatable bargains. Whether you're seeking premium choices or
          astonishing discounts, we provide unmatched value that distinguishes
          us from the rest.
        </p>

        {/* Button */}
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Shoes" border="border-0" />
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 justify-center items-center">
        <Image
          src={offers}
          alt="Shoe Promotion"
          width={773}
          height={100}
          className="object-contain h-full w-full"
        />
      </div>
    </section>
  );
};

export default ShoeOffer;

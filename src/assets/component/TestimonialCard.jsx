import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const TestimonialCard = ({ imgURL, clientName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* Image */}
      <Image
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      {/* Rating */}
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <h3 className=" mt-1 font-spaceGrotesk text-3xl text-center font-bold">
          {clientName}
        </h3>

        <div className="flex gap-1 justify-center items-center">
          <StarIcon className="w-6 h-6 text-yellow-500" />
          <p className="text-lg font-spaceGrotesk text-slate-gray">
            ({rating})
          </p>
        </div>
      </div>
      {/* Feedback */}
      <p className="mt-2 font-spaceGrotesk max-w-sm text-center text-lg">
        {feedback}
      </p>
      Testimonial Card
    </div>
  );
};

export default TestimonialCard;

import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const ArrivalCard = ({ imgURL, name, price }) => {
  const numberOfStars = Math.floor(Math.random() * 4) + 2;

  const stars = [];

  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<StarIcon className="w-6 h-6 text-yellow-500 " key={i} />);
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <Image src={imgURL} alt={name} className="w-full" />

      <div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-spaceGrotesk">
          {name}
        </h3>

        <div className="flex justify-start gap-2.5 items-center">
          <div className="my-2 flex">{stars}</div>

          <div>
            <p className="font-spaceGrotesk text-xl font-semibold leading-normal text-slate-gray">
              ({stars.length})
            </p>
          </div>
        </div>

        <p className="mt-2 font-semibold font-spaceGrotesk text-2xl leading-normal text-[#0077b6]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ArrivalCard;

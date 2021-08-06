import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";

function InfoCard({ img, location, title, description, star, price, total }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className={`rounded-2xl ${!imageLoaded && "opacity-0"}`}
          src={img}
          layout={"fill"}
          objectFit="cover"
          onLoad={() => {
            setTimeout(() => {
              setImageLoaded(true);
            }, 1000);
          }}
        />
        {!imageLoaded && <div className="skeleton-image"></div>}
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          {!imageLoaded && (
            <div className="skeleton-text bg-black">{location}</div>
          )}
          {imageLoaded && (
            <>
              <p>{location}</p>
            </>
          )}
          {!imageLoaded && (
            <div className="skeleton-text">
              <HeartIcon className="h-7 cursor-pointer" />
            </div>
          )}
          {imageLoaded && (
            <HeartIcon className="h-7 cursor-pointer fill-current hover:text-red-400" />
          )}
        </div>
        {!imageLoaded && <h4 className="skeleton-text text-xl">{title}</h4>}
        {imageLoaded && <h4 className="text-xl">{title}</h4>}
        <div className="border-b w-10 pt-2"></div>
        {!imageLoaded && (
          <p className="skeleton-text pt-2 text-sm flex-grow">{description}</p>
        )}
        {imageLoaded && (
          <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        )}

        <div className="flex justify-between items-end pt-5 ">
          {!imageLoaded && (
            <p className="skeleton-text flex items-center">
              <StarIcon className="h-5 text-red-400" />
              {star}
            </p>
          )}
          {imageLoaded && (
            <p className="flex items-center">
              <StarIcon className="h-5 text-red-400" />
              {star}
            </p>
          )}

          <div>
            {!imageLoaded && (
              <>
                <p className="skeleton-text text-lg lg:text-2xl font-semibold pb-2">
                  {price}
                </p>
                <p className="skeleton-text  text-right font-extralight">
                  {total}
                </p>
              </>
            )}
            {imageLoaded && (
              <>
                <p className="text-lg lg:text-2xl font-semibold pb-2">
                  {price}
                </p>
                <p className="text-right font-extralight">{total}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;

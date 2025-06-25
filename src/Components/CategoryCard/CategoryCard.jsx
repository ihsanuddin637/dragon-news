import React from "react";
import { FaRegEye, FaStar } from "react-icons/fa";

const CategoryCard = ({ card }) => {
  const {
    title,
    author,
    published_date,
    rating,
    total_view,
    image_url,
    details,
  } = card;
  return (
    <div className="bg-base-100 shadow-sm border">
      <div className="flex items-center justify-between px-4 pt-4 text-sm text-gray-500">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-base text-black">{author.name}</p>
            <p className="text-xs">{published_date}</p>
          </div>
        </div>
        <div className="text-xl">
          <button className="btn btn-ghost btn-circle">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM4 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM10 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="card-body pt-2">
        <h2 className="card-title text-lg">{title}</h2>
        <figure className="my-3">
          <img src={image_url} alt="News" className="w-full rounded-lg" />
        </figure>
        <p className="text-sm text-gray-700">
          {details?.length > 200 ? (
            <>
              {details.slice(0, 200)}...{" "}
              <span className="text-primary font-medium cursor-pointer">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>

        <div className="flex justify-between items-center pt-4 border-t mt-4">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(Math.floor(rating.number || 0))].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-black ml-1">{rating.number}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

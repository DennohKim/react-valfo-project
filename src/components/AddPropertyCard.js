import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddPropertyCard = () => {
  return (
    <div class="max-w-2xl mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="../pages/Land.js">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="../pages/Land.js">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="../pages/Land.js"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
        <AiOutlinePlus />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyCard;
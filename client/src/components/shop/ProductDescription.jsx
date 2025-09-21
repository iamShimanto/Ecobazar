import React from "react";
import { FaCheck } from "react-icons/fa";
import { PiSealPercentFill } from "react-icons/pi";


const ProductDescription = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="max-w-161">
        <p className="text-sm font-normal text-secondary">
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
          posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
          vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
          porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
          Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
          et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
          scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
          commodo quis, egestas elementum leo. Donec convallis mollis enim.
          Aliquam id mi quam. Phasellus nec fringilla elit.
        </p>
        <p className="text-sm font-normal text-secondary mt-6">
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
          iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit,
          pellentesque tristique neque mi eget nulla. Proin luctus elementum
          neque et pharetra.{" "}
        </p>
        <div className="mt-7 flex flex-col gap-2">
          <p className="text-sm text-secondary flex items-center gap-2">
            <FaCheck className="size-5 bg-primary p-1 text-white rounded-full" />
            100 g of fresh leaves provides.
          </p>
          <p className="text-sm text-secondary flex items-center gap-2">
            <FaCheck className="size-5 bg-primary p-1 text-white rounded-full" />
            Aliquam ac est at augue volutpat elementum.
          </p>
          <p className="text-sm text-secondary flex items-center gap-2">
            <FaCheck className="size-5 bg-primary p-1 text-white rounded-full" />
            Quisque nec enim eget sapien molestie.
          </p>
          <p className="text-sm text-secondary flex items-center gap-2">
            <FaCheck className="size-5 bg-primary p-1 text-white rounded-full" />
            Proin convallis odio volutpat finibus posuere.
          </p>
        </div>
        <p className="text-sm font-normal text-secondary mt-6">
          Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
          blandit eros non turpis lobortis iaculis at ut massa.{" "}
        </p>
      </div>
      <div>
        <div className="w-full">
          <img className="w-full" src="/images/description.png" alt="description" />
          <div className="px-5 py-6 border border-secondary/40 rounded-sm mt-5 flex items-center gap-5.5">
            <div className="flex items-center gap-3">
              <PiSealPercentFill className="size-8"/>
              <div>
                <p className="text-sm font-medium text-black mb-1.5">64% Discount</p>
                <p className="text-sm font-normal text-secondary">Save your 64% money with us</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PiSealPercentFill className="size-8"/>
              <div>
                <p className="text-sm font-medium text-black mb-1.5">64% Discount</p>
                <p className="text-sm font-normal text-secondary">Save your 64% money with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

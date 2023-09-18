import { useRef } from "react";
import Business from "./Business";

interface BusinessListProps {
  businesses: any[];
}

const BusinessList = ({ businesses }: BusinessListProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const slideLeft = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft -= 500;
    } else {
      return;
    }
  };

  const slideRight = (element: HTMLDivElement | null) => {
    if (element) {
      element.scrollLeft += 500;
    } else {
      return;
    }
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        onClick={() => slideLeft(elementRef.current)}
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 absolute  rotate-180 top-[35%]
            bg-gray-300 cursor-pointer p-1 rounded-full text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      <div
        className="flex overflow-scroll overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {businesses.map((business, idx) => (
          <Business key={idx} business={business}></Business>
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => slideRight(elementRef.current)}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 absolute right-0 top-[35%]
            bg-gray-300 cursor-pointer p-1 rounded-full text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

export default BusinessList;

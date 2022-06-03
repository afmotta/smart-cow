import { CheckIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    features: [true, true, false, false, false],
    price: "0",
  },
  {
    name: "Pro",
    features: [true, true, true, false, false],
    price: "12",
  },
  {
    name: "Team",
    features: [true, true, true, true, false],
    price: "23",
  },
  {
    name: "Agency",
    features: [true, true, true, true, true],
    price: "43",
  },
];

export const Plans = () => {
  const [active, setActive] = useState(2);

  return (
    <div className='flex flex-row'>
      {plans.map((plan, planIndex) => (
        <div
          className={clsx(
            "flex-1 rounded-lg mr-10 p-4 pb-8",
            active === planIndex && "bg-green-500 text-white"
          )}
        >
          <h2 className='text-2xl'>{plan.name}</h2>
          <div className='flex flex-col mt-4'>
            {plan.features.map((value, index) => (
              <div className='flex flex-row items-center mt-2'>
                <div className='w-1/12'>
                  <div className='h-4 w-4'>
                    {value ? <CheckIcon /> : <XIcon />}
                  </div>
                </div>
                <div className='w-10/12'>Feature {index + 1}</div>
              </div>
            ))}
            <h3 className='mt-2 font-black'>
              <span className='text-xl'>$</span>
              <span className='text-3xl'>{plan.price}</span>
            </h3>
          </div>
          {active === planIndex ? (
            <div className='flex flex-row items-center justify-center mt-4'>
              <span className='text-2xl'>Current plan</span>
            </div>
          ) : (
            <button
              type='button'
              className='mt-4 w-full inline-flex items-center justify-center py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              onClick={() => setActive(planIndex)}
            >
              {active > planIndex ? "Downgrade" : "Upgrade"}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

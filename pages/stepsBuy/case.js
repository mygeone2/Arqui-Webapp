import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import React,{useEffect, useContext} from "react";
import Router from "next/router";
import { CheckIcon } from "@heroicons/react/solid";
import { ProductsContext } from "../../Context/ProductsContext";


const productsList = {
  2: {
    name: "FancyAlice Aluminum",
    price: "$10000",
    imageSrc: "/FotosMinijo/case/1.jpg",
    imageAlt: "Grey",
  },
  3: {
    name: "Tokyo60 Aluminum",
    price: "$22000",
    imageSrc: "/FotosMinijo/case/2.jpg",
    imageAlt: "Black",
  },
  4: {
    name: "standar 60% Aluminum",
    price: "$10000",
    imageSrc: "/FotosMinijo/case/3.jpg",
    imageAlt: "White",
  },
  5: {
    name: "standar 60% Aluminum",
    price: "$10000",
    imageSrc: "/FotosMinijo/case/4.jpg",
    imageAlt: "Black",
  },
  6: {
    name: "standar 60% Wood",
    price: "$10000",
    imageSrc: "/FotosMinijo/case/5.jpg",
    imageAlt: "Brown",
  },
  7: {
    name: "standar 60% Wood",
    price: "$10000",
    imageSrc: "/FotosMinijo/case/5.jpg",
    imageAlt: "Brown",
  },
};

const steps = [
  {
    id: "Step 1",
    name: "Elige tu PCB",
    href: "/stepsBuy/start",
    status: "complete",
  },
  {
    id: "Step 2",
    name: "Elige tus switches",
    href: "/stepsBuy/switches",
    status: "current",
  },
  {
    id: "Step 3",
    name: "Elige tu case",
    href: "/stepsBuy/case",
    status: "upcoming",
  },
  {
    id: "Step 4",
    name: "Elige tu Keycaps",
    href: "/stepsBuy/keycaps",
    status: "upcoming",
  },
];

export default function Case() {
  const { products, setProducts } = React.useContext(ProductsContext);
  const [stateProductsDisplay, setStateProductsDisplay] = React.useState([]);

  useEffect(() => {
    console.log(stateProductsDisplay);

    fetch(process.env.NEXT_PUBLIC_URL_API_PRODUCTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: "paso=2,pcb="+products.PCB
      })
    })
    .then(res => res.json())
    .then(data => {
      //conver from string to int all items in array "data"
      data.result.map((item) => {
        item = parseInt(item);
        return item;
      });
      setStateProductsDisplay(data.result);
    })
    .catch(err => console.log(err));

    
  }, []);

  const handleClickCase = (id) => {
    setProducts({
      ...products,
      Case: id,
    });
    Router.replace("/stepsBuy/switches");
  }

  return (
    <>
      <Navbar />
      <nav aria-label="Progress">
        <ol
          role="list"
          className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex-1 md:flex">
              {step.status === "complete" ? (
                <a href={step.href} className="group flex items-center w-full">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                      <CheckIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              ) : step.status === "current" ? (
                <a
                  href={step.href}
                  className="px-6 py-4 flex items-center text-sm font-medium"
                  aria-current="step"
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                    <span className="text-indigo-600">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-indigo-600">
                    {step.name}
                  </span>
                </a>
              ) : (
                <a href={step.href} className="group flex items-center">
                  <span className="px-6 py-4 flex items-center text-sm font-medium">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="text-gray-500 group-hover:text-gray-900">
                        {step.id}
                      </span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </a>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div
                    className="hidden md:block absolute top-0 right-0 h-full w-5"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {stateProductsDisplay.map((product, productIdx) => (
              // Item Product
              //<Link href="/stepsBuy/case">
              <div
                //key={'a'}
                className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                onClick={() => {
                  handleClickCase(product);
                }}
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <img
                    src={productsList[product].imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                  />
                </div>
                <div className="flex-1 p-4 space-y-2 flex flex-col">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={productsList[product].href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {productsList[product].name}
                    </a>
                  </h3>

                  <div className="flex-1 flex flex-col justify-end">
                    <p className="text-sm italic text-gray-500">
                      {productsList[product].imageAlt}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {productsList[product].price}
                    </p>
                  </div>
                </div>
              </div>
              //</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

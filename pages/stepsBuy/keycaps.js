import { LockClosedIcon } from "@heroicons/react/solid";
import React,{ Fragment, useEffect, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";

import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import { CheckIcon } from "@heroicons/react/solid";
import { ProductsContext } from "../../Context/ProductsContext";
import Router from "next/router";

const productsList = {
  1: {
    name: "PBTFANS",
    price: "$10000",
    imageSrc: "/FotosMinijo/keycaps/1.jpg",
    imageAlt: "MX Pink",
  },
  2: {
    name: "PBTFANS",
    price: "$22000",
    imageSrc: "/FotosMinijo/keycaps/2.jpg",
    imageAlt: "MX RED",
  },
  3: {
    name: "GMK",
    price: "$10000",
    imageSrc: "/FotosMinijo/keycaps/3.jpg",
    imageAlt: "MX Sky Cho",
  },
  4: {
    name: "GMK",
    price: "$10000",
    imageSrc: "/FotosMinijo/keycaps/4.jpg",
    imageAlt: "MX AKUMA",
  },
  5: {
    name: "PBTFANS",
    price: "$10000",
    imageSrc: "/FotosMinijo/keycaps/5.jpg",
    imageAlt: "MX Purple",
  },
  6: {
    name: "GMK",
    price: "$10000",
    imageSrc: "/FotosMinijo/keycaps/3.jpg",
    imageAlt: "MX Sky Cho",
  },
  7: {
    name: "GMK",
    price: "$10000",
    imageSrc: "/FotosMinijo/keycaps/4.jpg",
    imageAlt: "MX AKUMA",
  },
  8: {
    name: "PBTFANS",
    price: "$10000",
    imageSrc: "/FotosMinijo/keycaps/5.jpg",
    imageAlt: "MX Purple",
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
    href: "/stepsBuy/keycaps",
    status: "upcoming",
  },
  {
    id: "Step 4",
    name: "Elige tu Keycaps",
    href: "/stepsBuy/keycaps",
    status: "upcoming",
  },
];

export default function Start() {
  const { products, setProducts } = React.useContext(ProductsContext);
  const [stateProductsDisplay, setStateProductsDisplay] = React.useState([]);
  const { stockError, setStockError } = React.useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(stateProductsDisplay);

    fetch(process.env.NEXT_PUBLIC_URL_API_PRODUCTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data:
          "paso=4,pcb=" +
          products.PCB +
          ",kb_case=" +
          products.Case +
          ",switch=" +
          products.Switches,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result[0] == "") {
          setStockError(true);
        }
        data.result.map((item) => {
          item = parseInt(item);
          return item;
        });
        setStateProductsDisplay(data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   if (stockError) {
  //     setOpen(true);
  //     setErrorCredentials(!stockError);
  //     Router.replace("/");
  //   }
  // }, [stockError]);

  const handleClickKeycaps = (id) => {
    setProducts({
      ...products,
      Keycaps: id,
    });
    Router.replace("/venta");
  };

  return (
    <>
      <Navbar />

      {/* Stock Error */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      El usuario o la password no son correctas
                    </Dialog.Title>
                    {}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

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
              //<Link href="/stepsBuy/pcb">
              <div
                //key={'a'}
                className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                onClick={() => {
                  handleClickKeycaps(product);
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

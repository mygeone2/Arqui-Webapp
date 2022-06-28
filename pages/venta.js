/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, ClockIcon } from "@heroicons/react/solid";
import React,{useEffect, useState} from "react";
import { ProductsContext } from "../Context/ProductsContext";
import Router from "next/router";
const URL_API_VENTA = "http://localhost:3000/api/venta";


const productsData = {
  Keycaps: {
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
  },
  Case: {
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
  },
  Switches: {
    1: {
      name: "Gateron Black",
      price: "$1000",
      imageSrc: "/FotosMinijo/switches/3.jpg",
      imageAlt: "MX",
    },
    2: {
      name: "Gateron Milky",
      price: "$500",
      imageSrc: "/FotosMinijo/switches/1.jpg",
      imageAlt: "BlMXack",
    },
    3: {
      name: "Kailh Crystal Jade",
      price: "$700",
      imageSrc: "/FotosMinijo/switches/2.jpg",
      imageAlt: "MX",
    },
    4: {
      name: "Cherry Blue",
      price: "$650",
      imageSrc: "/FotosMinijo/switches/4.jpg",
      imageAlt: "MX",
    },
    5: {
      name: "Gateron Housing",
      price: "$400",
      imageSrc: "/FotosMinijo/switches/1.jpg",
      imageAlt: "MX",
    },
    6: {
      name: "Kailh Low Profile ",
      price: "$300",
      imageSrc: "/FotosMinijo/switches/2.jpg",
      imageAlt: "Alps",
    },
  },
  PCB: {
    2: {
      name: "niu Mini ",
      price: "$10000",
      imageSrc: "/FotosMinijo/pcb/3.jpg",
      imageAlt: "MX",
    },
    3: {
      name: "tokyo60 ",
      price: "$22000",
      imageSrc: "/FotosMinijo/pcb/4.jpg",
      imageAlt: "MX",
    },
    4: {
      name: "kbdfans60",
      price: "$30000",
      imageSrc: "/FotosMinijo/pcb/2.jpg",
      imageAlt: "MX",
    },
    5: {
      name: "FancyAlice66",
      price: "$80000",
      imageSrc: "/FotosMinijo/pcb/2.jpg",
      imageAlt: "MX",
    },
    6: {
      name: "xd64",
      price: "$26000",
      imageSrc: "/FotosMinijo/pcb/3.jpg",
      imageAlt: "Alps",
    },
  },
};

;

export default function Venta() {
    const { products, setProducts } = React.useContext(ProductsContext);
    const [stateProductsDisplay, setStateProductsDisplay] = React.useState([]);

    const onClickBuy = (e) => {
        e.preventDefault();

        fetch(process.env.NEXT_PUBLIC_API_VENTA, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: 1,
            pcb: products.PCB,
            kb_case: products.Case,
            switch: products.Switches,
            keycaps: products.Keycaps,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Router.replace("/invoice");
          })
          .catch((err) => {
            console.log(err);
          });
    }
    var suma = 0;

    const sumaTotal = () => {
       Object.keys(products).map((product) => {
        suma = +productsData[product][products[product]].price;
        return suma
       })
    }


    
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
          <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>

          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                {Object.keys(products).map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="flex-shrink-0">
                      <img
                        src={productsData[product][products[product]].imageSrc}
                        alt={productsData[product][products[product]].imageAlt}
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm">
                            <a
                              href={product.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {productsData[product][products[product]].name}
                            </a>
                          </h4>
                          <p className="ml-4 text-sm font-medium text-gray-900">
                            {productsData[product][products[product]].price}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {productsData[product][products[product]].imageAlt}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section aria-labelledby="summary-heading" className="mt-10">
              <h2 id="summary-heading" className="sr-only">
                Order summary
              </h2>

              <div>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Subtotal
                    </dt>
                    <dd className="ml-4 text-base font-medium text-gray-900">
                      {sumaTotal}
                    </dd>
                  </div>
                </dl>
                <p className="mt-1 text-sm text-gray-500">
                  Shipping and taxes will be calculated at checkout.
                </p>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  onClick={onClickBuy}
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Checkout
                </button>
              </div>

              <div className="mt-6 text-sm text-center">
                <p>
                  or{" "}
                  <a
                    href="#"
                    className="text-indigo-600 font-medium hover:text-indigo-500"
                  >
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </a>
                </p>
              </div>
            </section>
          </form>
        </div>
      </div>
    );
}

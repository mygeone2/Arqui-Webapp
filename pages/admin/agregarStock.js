import {
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from "@heroicons/react/outline";
import { AdminAuthContext } from "../../Context/AdminAuthContext";
import Navbar from '../../components/navbar/Navbar';
import React,{useState} from "react";


const navigation = [
  {
    name: "Add PCB",
    href: "#",
    icon: UserCircleIcon,
    current: true,
    component: "compoPCB",
  },
  {
    name: "Add Case",
    href: "#",
    icon: KeyIcon,
    current: false,
    component: "compoCase",
  },
  {
    name: "Add Switches",
    href: "#",
    icon: CreditCardIcon,
    current: false,
    component: "compoSwitches",
  },
  {
    name: "Add Keycaps",
    href: "#",
    icon: UserGroupIcon,
    current: false,
    component: "compoKeycaps",
 
},
];

const compoPCB = (
  <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <form action="#" method="POST">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Add PCB product
            </h3>
          </div>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                ID
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 ">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Switch Compatibility
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Layout
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-3/2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Color
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-3/2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                USB Type
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-3/2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Hotswap?
              </label>
              <input
                type="text"
                name="street-address"
                placeholder="f/t"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-3/2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Leds?
              </label>
              <input
                type="text"
                name="street-address"
                placeholder="f/t"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-3/2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-3 bg-gray-50 text-left sm:px-6">
          <button
            type="submit"
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
);

const compoCase = (
  <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <form action="#" method="POST">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Add Case product
            </h3>
          </div>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                ID
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 ">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Model
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Material
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-3/2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Color
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-3/2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>


            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-3 bg-gray-50 text-left sm:px-6">
          <button
            type="submit"
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
);

const compoSwitches = (
  <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <form action="#" method="POST">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Add Switch product
            </h3>
          </div>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                ID
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 ">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Model
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Type
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-3/2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>


            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-3 bg-gray-50 text-left sm:px-6">
          <button
            type="submit"
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
);

const compoKeycaps = (
  <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
    <form action="#" method="POST">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Add Keycaps product
            </h3>
          </div>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                ID
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 ">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Color
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
               Type
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-3/2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Model
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-3/2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-2/15 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-3 bg-gray-50 text-left sm:px-6">
          <button
            type="submit"
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [productToAdd, setProductToAdd] = useState(null);
  return (
    <>
      <Navbar isAdminSite={true} />

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            {navigation.map((item) => (
              <a
                href={item.href}
                onClick={() => {
                  setProductToAdd(item.component);
                }}
                className={classNames(
                  item.current
                    ? "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white"
                    : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                  "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-indigo-500 group-hover:text-indigo-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
              </a>
            ))}
          </nav>
        </aside>
        {productToAdd == "compoPCB" ? compoPCB : null}
        {productToAdd == "compoCase" ? compoCase : null}
        {productToAdd == "compoSwitches" ? compoSwitches : null}
        {productToAdd == "compoKeycaps" ? compoKeycaps : null}
      </div>
    </>
  );
}

"use client"
import { Fragment, useState, useLayoutEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import NavLogo from "../../../public/Nav_logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Cookies from "js-cookie";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const pathName = usePathname();
  const [getPath, setGetPath] = useState<string>("");

  useLayoutEffect(() => {
    pathName && setGetPath(pathName.split("/")[2]);
  }, [pathName]);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    src={NavLogo}
                    className="h-8 w-auto"
                    alt="Your Company"
                  />
                </div>
              </div>
              {(() => {
                return getPath === "dashboard" ? true : false;
              })() && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>
                          {(() => {
                            const name = localStorage.getItem("name");
                            if (name) {
                              return name[0];
                            } else {
                              return "A";
                            }
                          })()}
                        </Avatar>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }: { active: boolean }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={() => Cookies.remove("auth_token")}
                            >
                              Log out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

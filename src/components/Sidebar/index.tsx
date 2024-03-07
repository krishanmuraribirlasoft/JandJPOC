// @ts-nocheck
"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setSearchClickTrue } from "@/lib/features/searchSlice";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  //const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  const customData = {
    type: "Home",
  };

  const handleClick = () => {
    // Navigate to the desired path
    //router.push('/');
    //console.log("hello vicky")
  };

  const handleLinkClick = () => {
    console.log("home clicked");
    dispatch(setSearchClickTrue(false));
  };

  return (
    <>
      {/* <!-- SIDEBAR HEADER --> */}

      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}

        {/* <!-- Menu Group --> */}

        <ul className="mb-6 flex flex-col">
          {/* <!-- Menu Item Dashboard --> */}

          {/* <!-- Menu Item Dashboard --> */}

          {/* <!-- Menu Item Calendar --> */}
          <li>
            <Link
              state={customData}
              href="/"
              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                pathname === "/" && "text-white"
              }`}
            >
              <svg
                onClick={() => handleLinkClick()}
                xmlns="http://www.w3.org/2000/svg"
                width="11.167"
                height="13.078"
                viewBox="0 0 11.167 13.078"
              >
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M1.5,12.5H3.786V7.547H8.209V12.5H10.5V5.249L6,1.858,1.5,5.249ZM.414,13.582V4.707L6,.5l5.583,4.2v8.875H7.126V8.63H4.869v4.952Z"
                  transform="translate(-0.414 -0.504)"
                  fill="#fff"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                pathname.includes("calendar") && "bg-graydark dark:bg-meta-4"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.667"
                height="11.167"
                viewBox="0 0 16.667 11.167"
              >
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M6.27,11.583V10.5H7.553a.247.247,0,0,0,.256-.256V1.756A.247.247,0,0,0,7.553,1.5H6.27V.416H7.553A1.332,1.332,0,0,1,8.539.77a1.332,1.332,0,0,1,.354.986v8.487a1.228,1.228,0,0,1-1.34,1.34Zm5.623,0a1.228,1.228,0,0,1-1.34-1.34V1.756A1.332,1.332,0,0,1,10.908.77a1.332,1.332,0,0,1,.986-.354h3.848a1.332,1.332,0,0,1,.986.354,1.332,1.332,0,0,1,.354.986v8.487a1.228,1.228,0,0,1-1.34,1.34Zm0-1.083h3.848A.247.247,0,0,0,16,10.243V1.756a.247.247,0,0,0-.257-.256H11.893a.247.247,0,0,0-.256.256v8.487a.247.247,0,0,0,.256.256Zm-8.6-1.869-.772-.761L3.876,6.541H.414V5.458H3.876L2.522,4.148l.764-.772L5.949,6Z"
                  transform="translate(-0.414 -0.416)"
                  fill="#fff"
                />
              </svg>
            </Link>
          </li>

          {/* <!-- Menu Item Calendar --> */}

          {/* <!-- Menu Item Profile --> */}
          <li>
            <Link
              href="/"
              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13.327"
                height="13.327"
                viewBox="0 0 13.327 13.327"
              >
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M12.889,13.647,7.926,8.684a4.955,4.955,0,0,1-1.371.735,4.634,4.634,0,0,1-1.539.26A4.513,4.513,0,0,1,1.7,8.313,4.512,4.512,0,0,1,.336,5,4.512,4.512,0,0,1,1.7,1.686,4.512,4.512,0,0,1,5.015.32,4.512,4.512,0,0,1,8.329,1.686,4.513,4.513,0,0,1,9.695,5a4.579,4.579,0,0,1-.268,1.563A4.993,4.993,0,0,1,8.7,7.91l4.963,4.963ZM5.015,8.6A3.471,3.471,0,0,0,7.567,7.551,3.471,3.471,0,0,0,8.612,5,3.471,3.471,0,0,0,7.567,2.448,3.471,3.471,0,0,0,5.015,1.4,3.471,3.471,0,0,0,2.464,2.448,3.471,3.471,0,0,0,1.419,5,3.471,3.471,0,0,0,2.464,7.551,3.471,3.471,0,0,0,5.015,8.6Zm-1.3-1.7L4.2,5.306,2.884,4.253H4.507l.508-1.587.508,1.587H7.147L5.83,5.306,6.317,6.9l-1.3-.974Z"
                  transform="translate(-0.336 -0.32)"
                  fill="#fff"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.167"
                height="13.279"
                viewBox="0 0 19.167 13.279"
              >
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M1.61,13.695a1.15,1.15,0,0,1-.843-.352A1.15,1.15,0,0,1,.414,12.5h3.34a1.327,1.327,0,0,1-1.34-1.34v-9.4A1.294,1.294,0,0,1,2.8.8,1.294,1.294,0,0,1,3.754.416H16.241A1.294,1.294,0,0,1,17.192.8a1.294,1.294,0,0,1,.389.951v9.4a1.327,1.327,0,0,1-1.34,1.34h3.34a1.2,1.2,0,0,1-1.2,1.2Zm8.383-.542a.579.579,0,0,0,.419-.17.558.558,0,0,0,.175-.415.579.579,0,0,0-.17-.419A.557.557,0,0,0,10,11.974a.58.58,0,0,0-.419.17.558.558,0,0,0-.175.415.58.58,0,0,0,.17.419A.558.558,0,0,0,9.993,13.153ZM3.754,11.416H16.241a.276.276,0,0,0,.257-.256v-9.4a.276.276,0,0,0-.257-.256H3.754a.276.276,0,0,0-.256.256v9.4a.276.276,0,0,0,.256.256Z"
                  transform="translate(-0.414 -0.416)"
                  fill="#fff"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

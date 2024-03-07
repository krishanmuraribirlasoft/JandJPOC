// @ts-nocheck
"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import appStore from "../../lib/store";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Provider store={appStore()}>
      <>
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex h-screen overflow-hidden">
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="relative flex min-h-screen">
                <main className="bg-gray-200 flex flex-1 overflow-y-auto overflow-x-hidden">
                  <aside className=" left-custom-sidebar flex h-full w-72.5 flex-shrink-0 -translate-x-full flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
                    <Sidebar
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                    />
                  </aside>
                  <div className="mx-auto max-w-screen-2xl bg-white p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              </div>
            </main>
          </div>
        </div>
      </>
    </Provider>
  );
}

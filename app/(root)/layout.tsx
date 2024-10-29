import React, { ReactNode } from "react";

import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";
import RightSidebar from "@/components/navigation/RightSidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <aside className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col p-6 pt-36 shadow-light-300 dark:shadow-none max-md:pb-14 max-sm:hidden sm:px-14 lg:w-[266px]">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </aside>
    </main>
  );
};

export default RootLayout;

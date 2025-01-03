import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <div
        className={` w-full h-full inline-block px-5 py-7 xl:p-12 lg:p-16 md:p-12 sm:p-8 ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;

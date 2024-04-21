import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center h-[10vh]">
      <p className="text-center text-xs/relaxed text-gray-500">
        © 2024{" "}
        <a
          href="#"
          className="text-gray-700 underline transition hover:text-gray-700/75"
        >
          Ritoban Goswami.
        </a>{" "}
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

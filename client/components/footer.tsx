import Link from "next/link";

import React from "react";
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container-full">
        <span className="text-md text-gray-500">© 2023
          <Link href="/" id="link" className="hover:underline">
            Job™
          </Link>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
          <Link href="/" id="link" className="footer-item">
            <i>Facebook</i>
          </Link>
          <Link href="/" id="link" className="footer-item">
            <i>Instagram</i>
          </Link>
          <Link href="/" id="link" className="footer-item">
            <i>Twitter</i>
          </Link>
          <Link href="/" id="link" className="footer-item">
            <i>Github</i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
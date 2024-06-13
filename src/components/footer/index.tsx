import { FC } from "react";
import Social from "@/components/ui/social";

interface FooterProps {}
const Footer: FC<FooterProps> = () => {
  return (
    <footer className="mx-auto max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8">
      <nav
        className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        {/* {footerNavigation.main.map((item) => (
          <div key={item.name} className="pb-6">
            <a
              href={item.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </a>
          </div>
        ))} */}
      </nav>
      <Social />

      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; 2024 USVI Softball Federation, Inc. (503c) All rights reserved.
      </p>
      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        Powered with ❤️ by{" "}
        <a href="https://juvae.co">
          <b
            className="bg-gradient-to-r 
            from-blue-400 to-green-300  text-transparent bg-clip-text"
          >
            juvae
          </b>
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;

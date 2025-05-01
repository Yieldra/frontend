import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 w-full flex items-center justify-center backdrop-blur-sm z-50 text-white px-8">
      <div className="max-w-4xl lg:max-w-7xl w-full flex flex-row">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="https://github.com/Yieldra" target="_blank">Documentation</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="text-2xl font-bold">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text mr-2">
                Yieldra
              </div>
              <div className="hidden md:flex space-x-1 items-center">
                <span className="bg-teal-500 px-2 py-0.5 text-xs rounded-full font-semibold">
                  HACKATHON
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-md lg:text-xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/contract">Contract</Link>
            </li>
            <li>
              <Link href="https://github.com/Yieldra" target="_blank">Documentation</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a> */}
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

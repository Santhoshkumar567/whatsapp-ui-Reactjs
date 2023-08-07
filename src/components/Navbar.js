import React from "react";

const Navbar = () => {
  return (
    <div className="navbar  bg-green-800 text-start mt-5">
      <div className="flex-1">
        <a
          href="/"
          className="  normal-case text-xl font-semibold ml-2 font-sans"
        >
          WhatsApp
        </a>
      </div>
      <div className="flex-none">
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ms-4 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>
        </button>
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" ms-6 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <div className="dropdown dropdown-bottom dropdown-start ">
          <button tabIndex={0} className="btn btn-rounded btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="  w-5 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clipRule="evenodd"
              />
            </svg>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1]  menu bg-white text-black   w-56 "
            >
              <li className="normal-case text-sm p-1">
                <p>New group</p>
              </li>
              <li className="normal-case text-sm p-1">
                <p>New broadcast</p>
              </li>
              <li className="normal-case text-sm p-1">
                <p>Linked devices</p>
              </li>
              <li className="normal-case text-sm p-1">
                <p>Starred messages</p>
              </li>
              <li className="normal-case text-sm p-1">
                <p>Payments</p>
              </li>
              <li className="normal-case text-sm p-1">
                <p>Settings</p>
              </li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

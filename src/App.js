import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Users from "./components/Users";
import Chats from "./components/Chats";
import Status from "./components/Status";
import Calls from "./components/Calls";

function App() {
  const [activeTab, setActiveTab] = useState("Chats");

  function tabphase(tabName) {
    setTimeout(() => {
      setActiveTab(tabName);
    }, 120);
  }
  return (
    <div className="App mt-5">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 bg-green-800 ">
            <Navbar />
            
            <div>
              <ul className="tabs border-b-2  bg-green-800  ">
                <li
                  className={`tab tab-bordered  ${
                    activeTab === "users" ? "tab-active  text-white " : ""
                  } w-12`}
                  onClick={() => tabphase("users")}
                >
                  {" "}
                  <Link to="Users">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                    </svg>
                  </Link>
                </li>
                <li
                  className={`tab tab-bordered  ${
                    activeTab === "Chats" ? "tab-active text-white" : ""
                  } text-xl  w-24`}
                  onClick={() => tabphase("Chats")}
                >
                  <Link to="/">Chats</Link>
                </li>
                <li>
                  <Link
                    to="/Status"
                    className={`tab tab-bordered  ${
                      activeTab === "Status" ? "tab-active  text-white " : ""
                    } text-xl  w-24`}
                    onClick={() => tabphase("Status")}
                  >
                    Status
                  </Link>
                </li>
                <li
                  className={`tab tab-bordered  ${
                    activeTab === "Calls" ? "tab-active  text-white" : ""
                  } text-xl  w-20`}
                  onClick={() => tabphase("Calls")}
                >
                  <Link to="/Calls">Calls</Link>
                </li>
              </ul>
            </div>
            <Routes>
              <Route path="Users" element={<Users />} />
              <Route path="/" element={<Chats />} />
              <Route path="Status" element={<Status />} />
              <Route path="Calls" element={<Calls />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

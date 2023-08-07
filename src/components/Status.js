import React from "react";

const Status = () => {
  return (
    <div className="bg-white w-full h-full overflow-y-scroll text-black custom-scrollbar ">
      <ul className="flex mt-2">
        <li>
          <div className="avatar">
            <div className="w-12 ml-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-green-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </li>
        <li>
          <div className="font-bold  text-left ml-3 ">Mystatus</div>
          <div className="text-sm opacity-50 text-left ml-3">
            Tap to add Status update
          </div>
        </li>
      </ul>
      <div className="text-sm opacity-80 text-left ml-3 mb-2">
        Recent updates
      </div>
      <ul className="flex mt-1">
        <li>
          <div className="avatar">
            <div className="w-10 ml-3 rounded-full ring ring-success  ring-offset-2">
              <img src="https://tse3.mm.bing.net/th?id=OIP.kQUNDndPumP1XQatNLxf4QHaEK&pid=Api&P=0&h=180"  alt="Thrisha" />
            </div>
          </div>
        </li>
        <li>
          <div className="font-bold  text-left ml-3 ">Thrisha</div>
          <div className="text-sm opacity-50 text-left ml-3">5 minutes ago</div>
        </li>
      </ul>
      <ul className="flex mt-2">
        <li>
          <div className="avatar">
            <div className="w-10 ml-3 rounded-full ring ring-success  ring-offset-2">
              <img src="https://tse2.mm.bing.net/th?id=OIP.P9FoTvIZOxqSwL_6Srup1wHaEK&pid=Api&P=0&h=180" alt="Swetha"/>
            </div>
          </div>
        </li>
        <li>
          <div className="font-bold  text-left ml-3 ">Swetha</div>
          <div className="text-sm opacity-50 text-left ml-3">
            52 minutes ago
          </div>
        </li>
      </ul>

      <ul className="flex mt-2">
        <li>
          <div className="avatar">
            <div className="w-10 ml-3 rounded-full ring ring-success  ring-offset-2">
              <img src="https://wallpapercave.com/wp/wp6505636.jpg" alt="Rubi" />
            </div>
          </div>
        </li>
        <li>
          <div className="font-bold  text-left ml-3 ">Rubi</div>
          <div className="text-sm opacity-50 text-left ml-3">Today,9.39 am</div>
        </li>
      </ul>
      <ul className="flex mt-2">
        <li>
          <div className="avatar">
            <div className="w-10 ml-3 rounded-full ring ring-success  ring-offset-2">
              <img src="https://wallpapercave.com/wp/wp6505636.jpg" alt="Rubi" />
            </div>
          </div>
        </li>
        <li>
          <div className="font-bold  text-left ml-3 ">suriya</div>
          <div className="text-sm opacity-50 text-left ml-3">Today,9.35 am</div>
        </li>
      </ul>
      <div className="text-sm opacity-80 text-left ml-3 my-1">
        Viewed updates
      </div>
      <ul className="flex mt-2">
        <li>
          <div className="avatar">
            <div className="w-10 ml-3 rounded-full ring ring-neutral ring-offset-2 ">
              <img src="https://tse2.mm.bing.net/th?id=OIP.5-pZ5bIgBhH5wsZTF7rluwHaF7&pid=Api&P=0&h=180" alt="vaishanvi" />
            </div>
          </div>
        </li>
        <li>
          <div className="font-bold  text-left ml-3 ">Vaishnavi</div>
          <div className="text-sm opacity-50 text-left ml-3">
            yesterday,9.39 pm
          </div>
        </li>
      </ul>
      <ul className="flex mt-2">
        <li>
          <div className="avatar">
            <div className="w-10 ml-3 rounded-full ring ring-neutral ring-offset-2">
              <img src="https://wallpapercave.com/wp/emDr23u.jpg" alt="Srisudhrassan" />
            </div>
          </div>
        </li>
        <li>
          <div className="font-bold  text-left ml-3 ">Srisudharssan</div>
          <div className="text-sm opacity-50 text-left ml-3">
            yesterday,7.30 pm
          </div>
        </li>
      </ul>
      <ul className="flex mt-2">
        <li>
          <div className="avatar">
            <div className="w-10 ml-3 rounded-full ring ring-neutral ring-offset-2 ">
              <img src="https://tse4.mm.bing.net/th?id=OIP.tWoRSaT36nfzhAtfPo090QHaHa&pid=Api&P=0&h=180" alt="nandhini" />
            </div>
          </div>
        </li>
        <li>
          <div className="font-bold  text-left ml-3 mb-1 ">Nandhini</div>
          <div className="text-sm opacity-50 text-left ml-3">
            yesterday,6.39 pm
          </div>
        </li>
      </ul>
      <ul className="flex mt-2">
        <li>
          <div className="avatar">
            <div className="w-10 ml-3 rounded-full ring ring-neutral ring-offset-2 ">
              <img src="https://tse4.mm.bing.net/th?id=OIP.tWoRSaT36nfzhAtfPo090QHaHa&pid=Api&P=0&h=180" alt="nandhini" />
            </div>
          </div>
        </li>
        <li>
          <div className="font-bold  text-left ml-3 mb-1 ">madhumitha</div>
          <div className="text-sm opacity-50 text-left ml-3">
            yesterday,5.39 pm
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Status;

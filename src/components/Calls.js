import React from "react";

const Calls = () => {
  
  return (
    <div className="bg-white w-full  text-black custom-scrollbar overflow-y-scroll">
      <ul className="flex mt-2">
        <li>
          <div className="avatar">
            <div className="w-12 ml-2 rounded-full bg-green-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6 ml-3 mt-3 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </li>
        <li>
          <div className="font-semibold  text-left ml-3 ">Create call link</div>
          <div className="text-xs opacity-50 text-left ml-3">
            Share a link for your whatsApp call
          </div>
        </li>
      </ul>

      <div className="text-sm opacity-80 text-left ml-3 mb-3">Recent </div>
      <ul className="flex mt-1">
        <li>
          <div className="avatar">
            <div className="w-12 ml-2 rounded-full">
              <img src="http://www.pixelstalk.net/wp-content/uploads/2016/06/Images-Download-Anime-Girl-Backgrounds.jpg" alt="rakshana" />
            </div>
          </div>
        </li>
        <li className="w-48">
          <div className="font-bold  text-left ml-3 ">Rakshana</div>
          <div className="text-sm opacity-50 text-left ml-3 flex">
            <span className="mt-1 text-red-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M20.03 3.97a.75.75 0 010 1.06L6.31 18.75h9.44a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75V8.25a.75.75 0 011.5 0v9.44L18.97 3.97a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-1">18 August, 5.37 pm</span>
          </div>
        </li>
        <li className="w-32">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 ms-16 mt-4 text-green-700"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
      <ul className="flex mt-1">
        <li>
          <div className="avatar">
            <div className="w-12 ml-2 rounded-full">
              <img src="https://tse3.mm.bing.net/th?id=OIP.hbASvH3zgjL4TT7rRyk7bgHaEK&pid=Api&P=0&h=180" alt="kedzi" />
            </div>
          </div>
        </li>
        <li className="w-48">
          <div className="font-bold  text-left ml-3 ">Kedzi</div>
          <div className="text-sm opacity-50 text-left ml-3 flex">
            <span className="mt-1 text-green-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-1">17 August, 1.53 pm</span>
          </div>
        </li>
        <li className="w-32">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 ms-16 mt-4 text-green-700"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
      <ul className="flex mt-1">
        <li>
          <div className="avatar">
            <div className="w-12 ml-2 rounded-full">
              <img src="https://tse3.mm.bing.net/th?id=OIP.W_YZcLesl1v5aRnVHm-vqAHaEK&pid=Api&P=0&h=180i" alt="saru" />
            </div>
          </div>
        </li>
        <li className="w-44">
          <div className="font-bold  text-left ml-3 ">Saru</div>
          <div className="text-sm opacity-50 text-left ml-3 flex">
            <span className="mt-1 text-red-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M20.03 3.97a.75.75 0 010 1.06L6.31 18.75h9.44a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75V8.25a.75.75 0 011.5 0v9.44L18.97 3.97a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-1">16 august, 1.37 pm</span>
          </div>
        </li>
        <li className="w-32">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 ms-16 mt-4 text-green-700"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
      <ul className="flex mt-1">
        <li>
          <div className="avatar">
            <div className="w-12 ml-2 rounded-full">
              <img src="http://www.pixelstalk.net/wp-content/uploads/2016/06/Images-Download-Anime-Girl-Backgrounds.jpg" alt="rakshana" />
            </div>
          </div>
        </li>
        <li className="w-44">
          <div className="font-bold  text-left ml-3 ">Rakshana</div>
          <div className="text-sm opacity-50 text-left ml-3 flex">
            <span className="mt-1 text-red-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M20.03 3.97a.75.75 0 010 1.06L6.31 18.75h9.44a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75V8.25a.75.75 0 011.5 0v9.44L18.97 3.97a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-1">18 july, 5.37 pm</span>
          </div>
        </li>
        <li className="w-32">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 ms-16 mt-4 text-green-700"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
      <ul className="flex mt-1">
        <li>
          <div className="avatar">
            <div className="w-12 ml-2 rounded-full">
              <img src="https://tse3.mm.bing.net/th?id=OIP.hbASvH3zgjL4TT7rRyk7bgHaEK&pid=Api&P=0&h=180" alt="kedzi" />
            </div>
          </div>
        </li>
        <li className="w-44">
          <div className="font-bold  text-left ml-3 ">Kedzi</div>
          <div className="text-sm opacity-50 text-left ml-3 flex">
            <span className="mt-1 text-green-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-1">17 july, 1.53 pm</span>
          </div>
        </li>
        <li className="w-32">
          <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 ms-16 mt-4 text-green-700"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
      <ul className="flex mt-1">
        <li>
          <div className="avatar">
            <div className="w-12 ml-2 rounded-full">
              <img src="https://tse3.mm.bing.net/th?id=OIP.W_YZcLesl1v5aRnVHm-vqAHaEK&pid=Api&P=0&h=180i" alt="saru" />
            </div>
          </div>
        </li>
        <li className="w-44">
          <div className="font-bold  text-left ml-3 ">Saru</div>
          <div className="text-sm opacity-50 text-left ml-3 flex">
            <span className="mt-1 text-red-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M20.03 3.97a.75.75 0 010 1.06L6.31 18.75h9.44a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75V8.25a.75.75 0 011.5 0v9.44L18.97 3.97a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-1">16 july, 1.37 pm</span>
          </div>
        </li>
        <li className="w-32">
          <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 ms-16 mt-4 text-green-700"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
      <ul className="flex mt-1">
        <li>
          <div className="avatar">
            <div className="w-12 ml-2 rounded-full">
              <img src="http://www.hdwallpaperslife.com/wp-content/uploads/2019/03/anime_girl_3.jpg" alt="maha" />
            </div>
          </div>
        </li>
        <li className="w-44">
          <div className="font-bold  text-left ml-3 ">Maha</div>
          <div className="text-sm opacity-50 text-left ml-3 flex">
            <span className="mt-1 text-red-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M20.03 3.97a.75.75 0 010 1.06L6.31 18.75h9.44a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75V8.25a.75.75 0 011.5 0v9.44L18.97 3.97a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-1">16 july, 7.53 am</span>
          </div>
        </li>
        <li className="w-32"> 
           <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 ms-16 mt-4 text-green-800"
            >
              <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>
          </div>
        </li>
      </ul>
      <ul className="flex mt-1">
        <li>
          <div className="avatar">
            <div className="w-12 ml-2 rounded-full">
              <img src="https://www.goodmorninghdloveimages.com/wp-content/uploads/2020/04/Sweet-Whatsapp-DP-Images-10.gif" alt="amma" />
            </div>
          </div>
        </li>
        <li className="w-44">
          <div className="font-bold  text-left ml-3 ">Amma</div>
          <div className="text-sm opacity-50 text-left ml-3 flex">
            <span className="mt-1 text-green-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-1">15 july, 8.53 am</span>
          </div>
        </li>
        <li className="w-32">
          <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 ms-16 mt-4 text-green-800"
            >
              <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>
          </div>
        </li>
      </ul>

      <ul className="flex mt-1">
        <li>
          <div className="avatar">
            <div className="w-12 ml-2 rounded-full">
              <img src="https://www.trickscity.com/wp-content/uploads/2019/05/photo-1529946825183-536c6317f60e.jpeg" alt="riyas" />
            </div>
          </div>
        </li>
        <li className="w-44">
          <div className="font-bold  text-left ml-3 ">Riyas</div>
          <div className="text-sm opacity-50 text-left ml-3 flex">
            <span className="mt-1 text-green-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-1">14 july, 9.53 am</span>
          </div>
        </li>
        <li className="w-32">
          <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 ms-16 mt-4 text-green-800"
            >
              <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Calls;

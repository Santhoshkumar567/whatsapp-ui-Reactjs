import React from "react";
import Uc from "./Images/Uc.jpg";
const Users = () => {
  return (
    <div className="bg-white w-full h-full  text-black  ">
      <div className="bg-white mx-16">
        <img src={Uc} alt="users"></img>
      </div>
      <div>
        <h3 className="text-xl font-bold ">Introducing Communities</h3>
        <p className="text-sm opacity-50 mt-2 mb-4">
          Easily organise your related groups and send announcements. Now, your
          communities, like neighbourhoods or schools, can have their own space
        </p>
        <button className="btn  w-10/12 rounded-full bg-green-900 text-white mb-7 ">
          Start your community
        </button>
      </div>
    </div>
  );
};

export default Users;

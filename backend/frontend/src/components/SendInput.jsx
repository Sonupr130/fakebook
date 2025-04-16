import React from "react";

const SendInput = () => {
  return (
    <div className="flex w-full">
        <div className="w-full bg-red-400 ">
        <input
          className="text-white w-full p-2"
          type="text"
          required
          placeholder="enter message"
        />
    </div>
      <button className="bg-blue-600 px-4 py-2">Send</button>
    </div>
  );
};

export default SendInput;

import React from "react";

const SignBtn = ({ text }) => {
  return (
    <div>
      <button
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-xl "
      >
        {text}
      </button>
    </div>
  );
};

export default SignBtn;

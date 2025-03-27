import React from "react";

const SignBtn = ({ text }) => {
  return (
    <div>
      <button
        type="submit"
        className="w-full bg-primary text-white p-3 text-[26px] rounded-custom "
      >
        {text}
      </button>
    </div>
  );
};

export default SignBtn;

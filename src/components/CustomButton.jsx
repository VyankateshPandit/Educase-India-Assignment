import React from "react";
import { useNavigate } from "react-router-dom";

function CustomButton({ btnTextColor, btnColor, btnText, navPath }) {
  const navigate = useNavigate();
  return (
    <button
    type="submit"
      style={{
        backgroundColor: btnColor,
        color: btnTextColor,
      }}
      onClick={() => navigate(navPath)}
      className="hover:bg-[#6C25FF] w-full opacity-[1] p-2.5 rounded-[6px] font-(font-family:Rubik) font-medium"
    >
      {btnText}
    </button>
  );
}

export default CustomButton;

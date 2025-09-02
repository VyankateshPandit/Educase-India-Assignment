import React from "react";

function inputBox({ labelValue, placeHolderValue }) {
  return (
    <>
      <span className="relative w-fit top-3 left-3">
        <label className="px-[10px] text-[#6C25FF] font-(font-family:Rubik) font-medium bg-[#F7F8F9] focus:outline-none">
          {labelValue}
          <label className="text-[#DD4A3D]">*</label>
        </label>
      </span>
      <input
        required
        type="text"
        className="border-[1.5px] rounded-[6px] py-3 px-5 font-(font-family:Rubik) border-[#CBCBCB] font-medium placeholder-[#8d8d8d]"
        placeholder={placeHolderValue}
      />
    </>
  );
}

export default inputBox;

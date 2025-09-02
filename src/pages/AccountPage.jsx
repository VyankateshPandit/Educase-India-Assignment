import React from "react";
import girlIcon from "../assets/girlIcon.jpg";
import cameraIcon from "../assets/cameraIcon.svg";
function accountPage() {
  return (
    <>
      <div className="w-full h-screen  bg-[#F7F8F9]">
        <div className="bg-[#FFFFFF] shadow-sm">
          <h1 className="text-[#1D2226] px-5 py-6 text-lg font-(font-family:Rubik)">
            Account Settings
          </h1>
        </div>
        <div className="flex flex-col px-5 gap-7 py-6 border-dashed border-b-2 border-[#CBCBCB] ">
          <div className="flex flex-row">
            <div className="flex flex-row">
              <img src={girlIcon} alt="girl icon" />
              <img
                src={cameraIcon}
                alt="camera icon"
                className="relative -left-4 top-5"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#1D2226] text-sm font-bold font-(font-family:Rubik)">
                Marry Doe
              </h2>
              <p>marry@gmail.com</p>
            </div>
          </div>
          <p className="text-sm font-(font-family:Rubik)">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </>
  );
}

export default accountPage;

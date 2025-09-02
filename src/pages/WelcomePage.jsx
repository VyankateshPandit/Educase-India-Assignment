import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
function welcomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidden sm:block text-2xl text-gray-500">
        🖥 This site is for mobile resolution please open site on mobile
      </div>

      <div className="block sm:hidden">
        <div className="w-full h-screen bg-[#F7F8F9] flex flex-col items-center justify-end">
          <div className="flex flex-col gap-7 px-5 py-10">
            <div className="flex flex-col gap-2.5">
              <h1 className="text-3xl rubik text-[#1D2226] text-left">
                Welcome to PopX
              </h1>
              <p className="text-lg text-left font-(font-family:Rubik) font-medium text-[#1D2226] opacity-[0.6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <CustomButton
                btnTextColor={"#FFFFFF"}
                btnColor={"#6C25FF"}
                btnText={"Create Account"}
                navPath={"/signUpPage"}
              />
              <CustomButton
                btnTextColor={"#1D2226"}
                btnColor={"#6C25FF4B"}
                btnText={"Already Registered? Login"}
                navPath={"/signInPage"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default welcomePage;

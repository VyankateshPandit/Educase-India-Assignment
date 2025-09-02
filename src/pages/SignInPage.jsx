import React from "react";
import CustomButton from "../components/CustomButton";
import InputBox from "../components/InputBox";
function signInPage() {
  return (
    <>
      <div className="w-full h-screen bg-[#F7F8F9] flex flex-col items-center justify-start">
        <div className="flex flex-col gap-5 px-5 py-6">
          <div className="flex flex-col gap-3.5">
            <h1 className="text-3xl text-left rubik text-[#1D2226]">
              Signin to your PopX account
            </h1>
            <p className="text-lg text-left font-(font-family:Rubik) font-medium text-[#1D2226] opacity-[0.6]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className="flex flex-col">
            <InputBox
              placeHolderValue={"Enter email address"}
              labelValue={"Email Address"}
            />
            <InputBox
              placeHolderValue={"Enter password"}
              labelValue={"Password"}
            />
          </div>
          <CustomButton
            btnTextColor={"#FFFFFF"}
            btnColor={"#CBCBCB"}
            btnText={"Login"}
            navPath={"/accountPage"}
          />
        </div>
      </div>
    </>
  );
}

export default signInPage;

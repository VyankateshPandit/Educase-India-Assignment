import React from "react";
import InputBox from "../components/InputBox";
import RadioInput from "../components/RadioInput";
import CustomButton from "../components/CustomButton";
function signUpPage() {
  return (
    <>
      <div className="w-full h-screen bg-[#F7F8F9] flex flex-col items-center justify-between px-5 py-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-[22px]">
            <h1 className="text-3xl text-left rubik text-[#1D2226]">
              Create your PopX account
            </h1>
            <div className="flex flex-col">
              <InputBox
                placeHolderValue={"Marry Doe"}
                labelValue={"Full Name"}
              />
              <InputBox
                placeHolderValue={"+91 0000000000"}
                labelValue={"Phone number"}
              />
              <InputBox
                placeHolderValue={"Marry Doe"}
                labelValue={"Email address"}
              />
              <InputBox
                placeHolderValue={"Marry Doe"}
                labelValue={"Password"}
              />
              <InputBox
                placeHolderValue={"Marry Doe"}
                labelValue={"Company Name"}
              />
            </div>
            <label className="font-(font-family:Rubik) font-normal text-gray-800">
              Are you an Agency?<label className="text-[#DD4A3D]">*</label>
            </label>
            <RadioInput />
          </div>
        </div>
        <CustomButton
          btnTextColor={"#FFFFFF"}
          btnColor={"#6C25FF"}
          btnText={"Create Account"}
          navPath={"/accountPage"}
        />
      </div>
    </>
  );
}

export default signUpPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigateState } from "./NAVIGATESTATE";

interface NavigateNoneProps {
  setNavigateState: React.Dispatch<React.SetStateAction<NavigateState>>;
  setIsNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigateNone: React.FunctionComponent<NavigateNoneProps> = ({
  setNavigateState,
  setIsNavVisible,
}) => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-[40%] flex flex-col items-center">
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => {
          setNavigateState(NavigateState.WORK);
        }}
      >
        WORK
      </p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => {
          setIsNavVisible(false);
          navigate("/work/personal");
        }}
      >
        PERSONAL WOLK
      </p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => {
          setIsNavVisible(false);
          navigate("/aboutmkb");
        }}
      >
        ABOUT MKB
      </p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => {
          setIsNavVisible(false);
          navigate("/workprocess");
        }}
      >
        WORK PROCESS
      </p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => {
          setIsNavVisible(false);
          navigate("/contact");
        }}
      >
        CONTACT
      </p>
    </div>
  );
};

export default NavigateNone;

import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigateState } from "./NAVIGATESTATE";

interface NavigateNoneProps {
  setNavigateState: React.Dispatch<React.SetStateAction<NavigateState>>;
}

const NavigateNone: React.FunctionComponent<NavigateNoneProps> = ({
  setNavigateState,
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative top-[35%] flex flex-col items-center">
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
        onClick={() => navigate("/personalwork")}
      >
        PERSONAL WOLK
      </p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => navigate("/aboutmkb")}
      >
        ABOUT MKB
      </p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => setNavigateState(NavigateState.PROCESS)}
      >
        WORK PROCESS
      </p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => navigate("/contact")}
      >
        CONTACT
      </p>
    </div>
  );
};

export default NavigateNone;

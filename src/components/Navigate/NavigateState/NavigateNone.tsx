import React from "react";
import { NavigateState } from "./NAVIGATESTATE";

interface NavigateNoneProps {
  setNavigateState: React.Dispatch<React.SetStateAction<NavigateState>>;
}

const NavigateNone: React.FunctionComponent<NavigateNoneProps> = ({
  setNavigateState,
}) => {
  return (
    <div className="relative top-[35%] flex flex-col items-center">
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => setNavigateState(NavigateState.WORK)}
      >
        WORK
      </p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => setNavigateState(NavigateState.PRESONAL)}
      >
        PERSONAL WALK
      </p>
      <p
        className="my-[0.75em] cursor-pointer"
        onClick={() => setNavigateState(NavigateState.ABOUTMKB)}
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
        onClick={() => setNavigateState(NavigateState.CONTACT)}
      >
        CONTACT
      </p>
    </div>
  );
};

export default NavigateNone;

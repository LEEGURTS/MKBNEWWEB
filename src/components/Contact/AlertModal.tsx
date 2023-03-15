import useVH from "react-viewport-height";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

interface AlertModalProps {
  content: string;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: () => void;
}

export const AlertModal: React.FunctionComponent<AlertModalProps> = ({
  content,
  isOpened,
  setIsOpened,
  onClick = () => {},
}) => {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const vh = useVH();

  const handleClickOutside = (e: any) => {
    if (innerRef && !innerRef.current?.contains(e.target)) {
      setIsOpened(false);
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.addEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className="absolute w-full left-[50%] flex items-center justify-center -translate-x-[50%] top-[50%] -translate-y-[50%] z-50 bg-black bg-opacity-50 backdrop-blur"
            style={{ height: vh * 100 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              ref={innerRef}
              className="relative w-[80%] sm:w-[60%] lg:w-[40%] h-[36%] sm:h-[30%] rounded-[0.5em] bg-[#253F4D] text-white p-6 "
            >
              <p className="font-bold text-[3vh] sc4:text-[1.25em]">잠깐만요</p>
              <p className="absolute w-full text-[2vh] sc4:text-[0.75em]  whitespace-pre-line top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] p-6">
                {content}
              </p>
              <button
                className="absolute left-[50%] -translate-x-[50%] bottom-[1em] flex items-center justify-center bg-white text-black rounded-[5px] p-2 w-[calc(100%-2em)] text-[0.7em]"
                onClick={() => {
                  setIsOpened(false);
                  onClick();
                }}
              >
                확인
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

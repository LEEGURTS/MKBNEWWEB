import { ContactAskForm } from "./ContactAskForm";
import useVH from "react-viewport-height";
import Slider from "../Slider/Slider";
import { useRef, useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import { ArrowRightSvg } from "../../Icon/Svg/ArrorRightSvg";

export const Contact: React.FunctionComponent = () => {
  const vh = useVH();
  const formData = useRef({
    name: "",
    phone: "",
    email: "",
    majorField: "",
    detail: "",
  });
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [buttonHeight, setButtonHeight] = useState<number>(0);
  const isKeyboardOpen = useDetectKeyboardOpen();
  const [infoIdx, setInfoIdx] = useState(0);
  const [controlIdx, setControlIdx] = useState(0);

  useLayoutEffect(() => {
    setButtonHeight(visualViewport?.height || 0);
  }, [isKeyboardOpen]);

  const handleFormdata = (
    formType: "name" | "phone" | "email" | "majorField" | "detail"
  ) => {
    return (inputData: string) => {
      formData.current[formType] = inputData;
    };
  };

  const handleNext = () => {
    if (infoIdx < 4) {
      setControlIdx(infoIdx + 1);
    }
  };

  const handleBefore = () => {
    if (infoIdx > 0) {
      setControlIdx(infoIdx - 1);
    }
  };
  return (
    <div
      className="relative text-white font-pretendard font-medium"
      style={{
        height: 100 * vh,
        background: "black",
      }}
    >
      <AnimatePresence>
        {infoIdx > 0 && (
          <motion.button
            ref={buttonRef}
            className="absolute z-50 rounded-[10px] py-2 px-4 text-black "
            style={{
              background: "white",
              top: `calc(${buttonHeight}px - 3.3em)`,
              left: "1em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBefore}
          >
            <ArrowRightSvg isLeft={true} />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {infoIdx < 4 && (
          <motion.button
            ref={buttonRef}
            className="absolute z-50 rounded-[10px] py-2 px-4 text-black"
            style={{
              background: "white",
              top: `calc(${buttonHeight}px - 3.3em)`,
              right: "1em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleNext}
          >
            <ArrowRightSvg />
          </motion.button>
        )}
      </AnimatePresence>
      <Slider
        bulletVisible={false}
        SwiperClassName="w-full h-full"
        setInfoIdx={setInfoIdx}
        infoIdx={infoIdx}
        controlIdx={controlIdx}
        setControlIdx={setControlIdx}
      >
        <ContactAskForm
          askContent={`반가워요.\n제가 이름을 여쭤봐도 될까요?\nCan I ask your name?`}
          setInput={handleFormdata("name")}
          placeHolder="Please write your name."
          setNextSlide={handleNext}
        />
        <ContactAskForm
          askContent={`반가워요.\n제가 이름을 여쭤봐도 될까요?\nCan I ask your name?`}
          setInput={handleFormdata("phone")}
          placeHolder="Please write your name."
          setNextSlide={handleNext}
        />
        <ContactAskForm
          askContent={`반가워요.\n제가 이름을 여쭤봐도 될까요?\nCan I ask your name?`}
          setInput={handleFormdata("email")}
          placeHolder="Please write your name."
          setNextSlide={handleNext}
        />
        <ContactAskForm
          askContent={`반가워요.\n제가 이름을 여쭤봐도 될까요?\nCan I ask your name?`}
          setInput={handleFormdata("majorField")}
          placeHolder="Please write your name."
          setNextSlide={handleNext}
        />
        <ContactAskForm
          askContent={`반가워요.\n제가 이름을 여쭤봐도 될까요?\nCan I ask your name?`}
          setInput={handleFormdata("detail")}
          placeHolder="Please write your name."
          setNextSlide={handleNext}
        />
      </Slider>
    </div>
  );
};

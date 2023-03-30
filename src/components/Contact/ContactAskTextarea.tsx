import { useState } from "react";
import { isDesktop } from "react-device-detect";
import { isTablet } from "react-device-detect";

interface ContactAskTextareaProps {
  askContent: string;
  setInput: (inputData: string) => void;
  placeHolder: string;
  setNextSlide: () => void;
  focusOut?: () => void;
}

export const ContactAskTextarea: React.FunctionComponent<
  ContactAskTextareaProps
> = ({
  askContent,
  setInput,
  placeHolder,
  setNextSlide,
  focusOut = () => {},
}) => {
  const [text, setText] = useState("");

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      setNextSlide(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <div className="relative w-full h-full">
      <div
        className="relative flex flex-col items-center font-medium"
        style={{
          top: isDesktop ? (isTablet ? "8%" : "30%") : "8%",
        }}
      >
        <div className="flex flex-col items-center">
          <p className="whitespace-pre-line text-center leading-[2em]">
            {askContent}
          </p>
        </div>
        <textarea
          className="border text-[12px] w-[80%] lg:w-[50%] mt-[2em] p-2 text-center rounded-[10px] border border-white placeholder-white placeholder-opacity-30 outline-0 duration-300"
          style={{
            background: text
              ? "rgba(255,255,255,0.2)"
              : "rgba(255,255,255,0.5)",
          }}
          onBlur={() => {
            if (text === "숨겨진히든암호") {
              setText("");
            }
            focusOut();
          }}
          onFocus={() => {
            if (!text) {
              setText("숨겨진히든암호");
            }
          }}
          placeholder={placeHolder}
          onChange={(e) => {
            setInput(e.target.value);
            setText(e.target.value);
          }}
          onKeyDown={handleOnKeyPress}
        />
      </div>
    </div>
  );
};

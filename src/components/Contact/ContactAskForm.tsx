import { useState } from "react";

interface ContactAskFormProps {
  askContent: string;
  setInput: (inputData: string) => void;
  placeHolder: string;
  setNextSlide: () => void;
  type:
    | "search"
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | undefined;
}

export const ContactAskForm: React.FunctionComponent<ContactAskFormProps> = ({
  askContent,
  setInput,
  placeHolder,
  setNextSlide,
  type,
}) => {
  const [text, setText] = useState("");

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setNextSlide(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="relative top-[8%] lg:top-[30%] flex flex-col items-center font-medium">
        <div className="flex flex-col items-center">
          <p className="whitespace-pre-line text-center leading-[2em]">
            {askContent}
          </p>
        </div>
        <input
          inputMode={type}
          enterKeyHint="done"
          className="border w-[13.5em] mt-[3em] p-2 text-center rounded-[10px] border border-white placeholder-white placeholder-opacity-30 outline-0 duration-300"
          style={{
            background: text
              ? "rgba(255,255,255,0.2)"
              : "rgba(255,255,255,0.5)",
          }}
          onBlur={() => {
            if (text === "숨겨진히든암호") {
              setText("");
            }
            console.log(text);
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
          onKeyDown={(e) => {
            handleOnKeyPress(e);
          }}
        />
      </div>
    </div>
  );
};

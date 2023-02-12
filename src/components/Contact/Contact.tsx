import { ContactAskForm } from "./ContactAskForm";
import useVH from "react-viewport-height";
import Slider from "../Slider/Slider";
import { useRef, useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import { ArrowRightSvg } from "../../Icon/Svg/ArrorRightSvg";
import emailjs from "emailjs-com";
import { AlertModal } from "./AlertModal";
import { useNavigate } from "react-router-dom";
import { ContactAskTextarea } from "./ContactAskTextarea";

export const Contact: React.FunctionComponent = () => {
  const vh = useVH();
  const formData = useRef({
    name: "",
    phone: "",
    email: "",
    majorField: "",
    detail: "",
  });
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalItem, setModalItem] = useState<string>("");
  const [buttonHeight, setButtonHeight] = useState<number>(0);
  const isKeyboardOpen = useDetectKeyboardOpen();
  const [infoIdx, setInfoIdx] = useState(0);
  const [controlIdx, setControlIdx] = useState(0);
  const [isMailSended, setIsMailSended] = useState(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setButtonHeight(visualViewport?.height || 0);
  }, [isKeyboardOpen]);

  const emailRegExp =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const phoneRegExp =
    /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  const onSubmitForm = () => {
    if (!(formData.current.detail?.length || 0)) {
      setModalItem(
        `내용 적으시는걸 깜빡하셨어요. MKB 와의 원활한 소통을 위해서는 내용을 적어주셔야 해요.\n\nPlease Write Your Content.`
      );
      setIsModalOpened(true);
      return;
    }
    emailjs.init("8tUMJD-CWmY4AnxOY");
    console.log(formData.current);
    emailjs.send("service_r3whhel", "template_cwdxqzd", formData.current).then(
      (response) => {
        setModalItem(
          `메일 전송이 완료되었어요! 조금만 기다려주시면 금방 답장해드릴게요.\n\nEmail sent complete.`
        );
        setIsModalOpened(true);
        setIsMailSended(true);
      },
      (error) => {
        alert(error);
      }
    );
  };

  const handleFormdata = (
    formType: "name" | "phone" | "email" | "majorField" | "detail"
  ) => {
    return (inputData: string) => {
      formData.current[formType] = inputData;
    };
  };

  const handleNext = () => {
    switch (infoIdx) {
      case 0:
        if (!formData.current?.name) {
          setModalItem(
            `이름 적으시는걸 깜빡하셨어요. MKB 와의 원활한 소통을 위해서는 이름을 적어주셔야 해요.\n\nPlease Write Your Name.`
          );
          setIsModalOpened(true);
        } else {
          setControlIdx(infoIdx + 1);
        }
        return;
      case 1:
        if (
          !formData.current?.phone ||
          !phoneRegExp.test(formData.current.phone)
        ) {
          setModalItem(
            `전화번호 적으시는걸 깜빡하셨어요. MKB 와의 원활한 소통을 위해서는 전화번호를 적어주셔야 해요.\n\nPlease Write Your Phone Number.`
          );
          setIsModalOpened(true);
        } else {
          setControlIdx(infoIdx + 1);
        }
        return;
      case 2:
        if (
          !formData.current?.email ||
          !emailRegExp.test(formData.current.email)
        ) {
          setModalItem(
            `이메일 적으시는걸 깜빡하셨어요. MKB 와의 원활한 소통을 위해서는 이메일을 적어주셔야 해요.\n\nPlease Write Your Email.`
          );
          setIsModalOpened(true);
          return;
        } else {
          setControlIdx(infoIdx + 1);
        }
        return;
      case 3:
        if (!formData.current?.majorField) {
          setModalItem(
            `전공 적으시는걸 깜빡하셨어요. MKB 와의 원활한 소통을 위해서는 전공을 적어주셔야 해요.\n\nPlease Write Your Major Field.`
          );
          setIsModalOpened(true);
        } else {
          setControlIdx(infoIdx + 1);
        }
        return;
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
      <AlertModal
        content={modalItem}
        isOpened={isModalOpened}
        setIsOpened={setIsModalOpened}
        onClick={infoIdx === 4 && isMailSended ? () => navigate("/") : () => {}}
      />
      <AnimatePresence>
        {infoIdx > 0 && (
          <motion.button
            className="absolute z-40 rounded-[10px] py-2 px-4 text-black "
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
            className="absolute z-40 rounded-[10px] py-2 px-4 text-black"
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
      <AnimatePresence>
        {infoIdx === 4 && (
          <motion.button
            className="absolute z-40 rounded-[10px] py-2 px-4 text-black"
            style={{
              background: "white",
              top: `calc(${buttonHeight}px - 3.3em)`,
              right: "1em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onSubmitForm()}
          >
            Submit
          </motion.button>
        )}
      </AnimatePresence>
      <Slider
        allowTouchMove={false}
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
          askContent={`첫 만남의 기초에요.\n 전화번호가 어떻게 되시나요?\nWhat is your phone number?`}
          setInput={handleFormdata("phone")}
          placeHolder="Please write your phone number."
          setNextSlide={handleNext}
        />
        <ContactAskForm
          askContent={`이메일도 가끔씩 쓰이죠.\n 이메일 주소를 작성해주세요.\nwhat is your email address?`}
          setInput={handleFormdata("email")}
          placeHolder="Please write your email."
          setNextSlide={handleNext}
        />
        <ContactAskForm
          askContent={`전공마다 생각이 다른 법이죠.\n전공이 무엇인가요?\nwhat is your major field?`}
          setInput={handleFormdata("majorField")}
          placeHolder="Please write your major field."
          setNextSlide={handleNext}
        />
        <ContactAskTextarea
          askContent={`남은 말은 여기에.\n세부사항을 적어주세요.\nwrite anything you want to speak?`}
          setInput={handleFormdata("detail")}
          placeHolder="Please write anything you want."
          setNextSlide={handleNext}
        />
      </Slider>
    </div>
  );
};

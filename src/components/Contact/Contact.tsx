import { ContactAskForm } from "./ContactAskForm";
import useVH from "react-viewport-height";
import Slider from "../Slider/Slider";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import { ArrowRightSvg } from "../../Icon/Svg/ArrorRightSvg";
import emailjs from "emailjs-com";
import { AlertModal } from "./AlertModal";
import { useNavigate } from "react-router-dom";
import { ContactAskTextarea } from "./ContactAskTextarea";
import ArrorNoBarSvg from "../../Icon/Svg/ArrorNoBarSvg";

export const Contact: React.FunctionComponent = () => {
  const vh = useVH();
  const formData = useRef({
    name: "",
    phone: "",
    email: "",
    majorField: "",
    purpose: "",
    detail: "",
  });
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalItem, setModalItem] = useState<string>("");
  const [buttonHeight, setButtonHeight] = useState<number>(0);
  const [infoIdx, setInfoIdx] = useState(0);
  const [controlIdx, setControlIdx] = useState(0);
  const [isMailSended, setIsMailSended] = useState(false);
  const navigate = useNavigate();
  const iskeyboardOpened = useDetectKeyboardOpen();
  useLayoutEffect(() => {
    setButtonHeight(visualViewport?.height || 0);
  }, [iskeyboardOpened]);

  useEffect(() => {
    const handleResize = () => {
      if (visualViewport && window.innerHeight > visualViewport.height) {
        setTimeout(() => {
          setButtonHeight(visualViewport?.height || 0);
        }, 200);
      }
    };
    visualViewport?.addEventListener("resize", handleResize);
    return () => visualViewport?.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [vh]);

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
    console.log(
      process.env.REACT_APP_EMAILJS_SERVICE!,
      process.env.REACT_APP_EMAILJS_TEMPLATE!
    );
    emailjs.init(process.env.REACT_APP_EMAILJS_INIT!);
    console.log(formData.current);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE!,
        process.env.REACT_APP_EMAILJS_TEMPLATE!,
        formData.current
      )
      .then(
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
    formType: "name" | "phone" | "email" | "majorField" | "detail" | "purpose"
  ) => {
    return (inputData: string) => {
      formData.current[formType] = inputData;
    };
  };

  const handleNext = () => {
    switch (infoIdx) {
      case 0:
        if (!formData.current.name) {
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
          formData.current.phone &&
          !phoneRegExp.test(formData.current.phone)
        ) {
          setModalItem(
            `전화번호 양식이 틀렸어요. MKB 와의 원활한 소통을 위해서는 전화번호를 적어주셔야 해요.\n\nDont write phone number if you are not korean.`
          );
          setIsModalOpened(true);
        } else {
          setControlIdx(infoIdx + 1);
        }
        return;
      case 2:
        if (
          !formData.current.email ||
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
        if (!formData.current.majorField) {
          setModalItem(
            `전공 적으시는걸 깜빡하셨어요. MKB 와의 원활한 소통을 위해서는 전공을 적어주셔야 해요.\n\nPlease Write Your Major Field.`
          );
          setIsModalOpened(true);
        } else {
          setControlIdx(infoIdx + 1);
        }
        return;
      case 4:
        if (!formData.current.purpose) {
          setModalItem(
            `용도 적는것을 깜빡하셨어요. 용도가 무엇인지 알아야 더 원활한 작업이 돼요.\n\nPlease Write What's it for`
          );
          setIsModalOpened(true);
        } else {
          setControlIdx(infoIdx + 1);
        }
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
        onClick={
          infoIdx === 5 && isMailSended
            ? () => {
                setControlIdx(0);
                setInfoIdx(0);
                setIsMailSended(false);
                setIsModalOpened(false);
                navigate(-1);
              }
            : () => {}
        }
      />
      <ArrorNoBarSvg
        className="absolute z-50 right-4 top-4"
        size="2em"
        fill="white"
        onClick={() => navigate(-1)}
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
        {infoIdx < 5 && (
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
      <div
        className="absolute z-40 left-[50%] -translate-x-[50%]"
        style={{
          top: `calc(${buttonHeight}px - 3.3em)`,
        }}
      >
        {infoIdx + 1}
        {" / "}
        {6}
      </div>
      <AnimatePresence>
        {infoIdx === 5 && (
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
        mouseScroll={false}
        SwiperClassName="w-full h-full relative top-[5%]"
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
          focusOut={() => {
            setTimeout(() => {
              setButtonHeight(visualViewport?.height || 0);
            }, 200);
          }}
          type="text"
        />
        <ContactAskForm
          askContent={`첫 만남의 기초에요.\n 전화번호가 어떻게 되시나요?\nWhat is your phone number?`}
          setInput={handleFormdata("phone")}
          placeHolder="Don't write if you aren't korean"
          setNextSlide={handleNext}
          type="tel"
        />
        <ContactAskForm
          askContent={`이메일도 가끔씩 쓰이죠.\n 이메일 주소를 작성해주세요.\nwhat is your email address?`}
          setInput={handleFormdata("email")}
          placeHolder="Please write your email."
          setNextSlide={handleNext}
          type="email"
        />
        <ContactAskForm
          askContent={`전공마다 생각이 다른 법이죠.\n전공이 무엇인가요?\nwhat is your major field?`}
          setInput={handleFormdata("majorField")}
          placeHolder="Please write your major field."
          setNextSlide={handleNext}
          type="text"
        />
        <ContactAskForm
          askContent={`음악의 용도는 다양해요. 콩쿨, 공연 등. \n 음악의 용도가 무엇인가요?\nwhat is it for?`}
          setInput={handleFormdata("purpose")}
          placeHolder="Please write your major field."
          setNextSlide={handleNext}
          type="text"
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

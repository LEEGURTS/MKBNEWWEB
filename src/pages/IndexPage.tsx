import React, { useEffect, useState } from "react";
import Index from "../components/Index/Index";
import { AnimatePresence } from "framer-motion";
import First from "../components/Index/First";

const IndexPage: React.FunctionComponent = () => {
  const [indexVisible, setIndexVisible] = useState(
    sessionStorage.getItem("indexVisible") === "false" ? false : true
  );
  useEffect(() => {
    sessionStorage.setItem("indexVisible", "false");
    setTimeout(() => {
      setIndexVisible(false);
    }, 4000);
  }, []);
  return (
    <>
      <AnimatePresence>{indexVisible && <First />}</AnimatePresence>
      {!indexVisible && <Index />}
    </>
  );
};

export default IndexPage;

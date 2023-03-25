import React, { useEffect, useState } from "react";
import Index from "../components/Index/Index";
import { AnimatePresence } from "framer-motion";
import First2 from "../components/Index/First2";

const IndexPage: React.FunctionComponent = () => {
  const [indexVisible, setIndexVisible] = useState(
    sessionStorage.getItem("indexVisible") === "false" ? false : true
  );
  useEffect(() => {
    sessionStorage.setItem("indexVisible", "false");
    setTimeout(() => {
      setIndexVisible(false);
    }, 6000);
  }, []);
  return (
    <>
      <AnimatePresence>{indexVisible && <First2 />}</AnimatePresence>
      {!indexVisible && <Index />}
    </>
  );
};

export default IndexPage;

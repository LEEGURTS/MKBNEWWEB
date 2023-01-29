import { Route, Router, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <div className=" sc3:text-[18px] sc4:text-[20px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-lexend-exa scrollbar-hide">
      <Routes>
        <Route element={<IndexPage />} path="/" />
      </Routes>
    </div>
  );
}

export default App;

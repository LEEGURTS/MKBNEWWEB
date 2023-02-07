import { Route, Routes } from "react-router-dom";
import AboutMKBPage from "./pages/AboutMKBPage";
import { ContactPage } from "./pages/ContactPage";
import IndexPage from "./pages/IndexPage";
import { PersonalWorkPage } from "./pages/PersonalWorkPage";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <div className="sc3:text-[18px] sc4:text-[20px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-lexend-exa scrollbar-hide">
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<WorkPage />} path="/work/*" />
        <Route element={<AboutMKBPage />} path="/aboutmkb" />
        <Route element={<PersonalWorkPage />} path="/personalwork" />
        <Route element={<ContactPage />} path="/contact" />
      </Routes>
    </div>
  );
}

export default App;

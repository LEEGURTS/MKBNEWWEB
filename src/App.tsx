import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import { lazy, Suspense } from "react";
function App() {
  const WorkPage = lazy(() => import("./pages/WorkPage"));
  const AboutMKBPage = lazy(() => import("./pages/AboutMKBPage"));
  const PersonalWorkPage = lazy(() => import("./pages/PersonalWorkPage"));
  const ContactPage = lazy(() => import("./pages/ContactPage"));
  const WorkProcessPage = lazy(() => import("./pages/WorkProcessPage"));

  return (
    <div className="sc3:text-[18px] sc4:text-[20px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-lexend-exa scrollbar-hide">
      <Suspense>
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<WorkPage />} path="/work/*" />
          <Route element={<AboutMKBPage />} path="/aboutmkb" />
          <Route element={<PersonalWorkPage />} path="/personalwork" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<WorkProcessPage />} path="/workprocess" />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

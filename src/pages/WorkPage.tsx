import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const WorkPage: React.FunctionComponent = () => {
  const Work = React.lazy(() => import("../components/Work/Work"));
  return (
    <Suspense>
      <Routes>
        <Route
          path="/moderndance"
          element={<Work titlePath="MODERN DANCE" />}
        />
        <Route
          path="/koreadance"
          element={<Work titlePath="KOREA TRADITIONAL DANCE" />}
        />
        <Route path="/ballet" element={<Work titlePath="BALLET" />} />
        <Route path="/personal" element={<Work titlePath="PERSONAL WORK" />} />
      </Routes>
    </Suspense>
  );
};

export default WorkPage;

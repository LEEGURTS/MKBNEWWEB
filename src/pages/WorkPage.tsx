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
        <Route path="/koreadance" element={<Work titlePath="KOREA DANCE" />} />
        <Route path="/ballet" element={<Work titlePath="BALLET" />} />
      </Routes>
    </Suspense>
  );
};

export default WorkPage;

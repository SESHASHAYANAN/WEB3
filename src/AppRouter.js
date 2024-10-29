import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NearWalletLogin from "./App";
import AiModelsShowcase from "./Aimodel";
import ComputeMarketplace from "./Blockchain";
import CryptoBillingPage from "./Payment";
import ResearchToolsMarketplace from "./Tools";
import CryptoBilling from "./Pay2";
import AIToolInterface from "./AiTool";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NearWalletLogin />} />
        <Route path="/aimodels" element={<AiModelsShowcase />} />
        <Route path="/blockchain" element={<ComputeMarketplace />} />
        <Route path="/payment" element={<CryptoBillingPage />} />
        <Route path="/tools" element={<ResearchToolsMarketplace />} />
        <Route path="/CryptoBilling" element={<CryptoBilling />} />
        <Route path="/aitool" element={<AIToolInterface />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

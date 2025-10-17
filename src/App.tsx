import React, { useEffect } from "react";
import Wizard from "./components/Wizard";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <Wizard />
      </div>
    </div>
  );
};

export default App;

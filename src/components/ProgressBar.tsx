import React from "react";
import { useTranslation } from "react-i18next";

interface ProgressBarProps {
  step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  const { t } = useTranslation();

  const steps: string[] = [
    "Personal Information",
    "Family & Financial Information",
    "Situation Descriptions",
  ];

  return (
    <div className="flex justify-between mb-6">
      {steps.map((label, index) => (
        <div key={index} className="flex-1 text-center">
          <div
            className={`h-2 mb-1 rounded ${
              step > index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
          <p className="text-sm">{t(label)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;

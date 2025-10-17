import React, { useState } from "react";
import Step1_Personal from "./Step1_Personal";
import Step2_FamilyFinancial from "./Step2_FamilyFinancial";
import Step3_Situation from "./Step3_Situation";
import ProgressBar from "./ProgressBar";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { updateFormData } from "../../store/wizardSlice";

interface WizardFormData {
  [key: string]: any;
}

const Wizard: React.FC = () => {
  const { t } = useTranslation();

  const [step, setStep] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const formData = useSelector((state: RootState) => state.wizard.formData);

  const handleNext = (data: WizardFormData): void => {
    dispatch(updateFormData(data));
    setStep((prev) => prev + 1);
  };

  const handleBack = (): void => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (data: WizardFormData): void => {
    dispatch(updateFormData(data));
    console.log("Final Submitted Data:", { ...formData, ...data });
    alert(t("Form submitted successfully!"));
  };

  return (
    <div>
      <LanguageSwitcher />
      <ProgressBar step={step} />

      {step === 1 && (
        <Step1_Personal onNext={handleNext} defaultValues={formData} />
      )}
      {step === 2 && (
        <Step2_FamilyFinancial
          onNext={handleNext}
          onBack={handleBack}
          defaultValues={formData}
        />
      )}
      {step === 3 && (
        <Step3_Situation
          onSubmit={handleSubmit}
          onBack={handleBack}
          defaultValues={formData}
        />
      )}
    </div>
  );
};

export default Wizard;

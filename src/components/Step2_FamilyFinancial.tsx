import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

export interface FamilyFinancialFormData {
  maritalStatus: string;
  dependents: number;
  employmentStatus: string;
  monthlyIncome: number;
  housingStatus: string;
}

interface Step2FamilyFinancialProps {
  onNext: (data: FamilyFinancialFormData) => void;
  onBack: () => void;
  defaultValues?: Partial<FamilyFinancialFormData>;
}

const Step2_FamilyFinancial: React.FC<Step2FamilyFinancialProps> = ({
  onNext,
  onBack,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FamilyFinancialFormData>({
    mode: "onChange",
    defaultValues,
  });

  const { t } = useTranslation();

  const onSubmit: SubmitHandler<FamilyFinancialFormData> = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">
        {t("Family & Financial Information")}
      </h2>

      {([
        ["maritalStatus", "Marital Status", "select"],
        ["dependents", "Number of Dependents", "number"],
        ["employmentStatus", "Employment Status"],
        ["monthlyIncome", "Monthly Income", "number"],
        ["housingStatus", "Housing Status"],
      ] as [keyof FamilyFinancialFormData, string, "text" | "number" | "select"][]).map(
        ([key, label, type = "text"]) => (
          <div key={key}>
            <label className="block text-sm font-medium mb-1">{t(label)} *</label>
            {type === "select" ? (
              <select
                {...register(key, { required: `${t(label)} is required` })}
                className="border rounded p-2 w-full"
              >
                <option value="">{t("Select")}</option>
                <option value="Single">{t("Single")}</option>
                <option value="Married">{t("Married")}</option>
                <option value="Divorced">{t("Divorced")}</option>
              </select>
            ) : (
              <input
                type={type}
                {...register(key, { required: `${t(label)} is required` })}
                className="border rounded p-2 w-full"
              />
            )}
            {errors[key] && (
              <p className="text-red-600 text-sm">{errors[key]?.message}</p>
            )}
          </div>
        )
      )}

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
        >
          {t("Back")}
        </button>
        <button
          type="submit"
          disabled={!isValid}
          className={`px-4 py-2 rounded text-white ${
            isValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {t("Next")}
        </button>
      </div>
    </form>
  );
};

export default Step2_FamilyFinancial;

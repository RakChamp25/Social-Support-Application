import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

export interface PersonalFormData {
  name: string;
  nationalId: string;
  dob: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
}

interface Step1PersonalProps {
  onNext: (data: PersonalFormData) => void;
  defaultValues?: Partial<PersonalFormData>;
}

const Step1_Personal: React.FC<Step1PersonalProps> = ({ onNext, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PersonalFormData>({
    mode: "onChange",
    defaultValues,
  });

  const { t } = useTranslation();

  const onSubmit: SubmitHandler<PersonalFormData> = (data) => {
    onNext(data);
  };

  const fields: [keyof PersonalFormData, string, "text" | "email" | "date" | "select"][] = [
    ["name", "Name", "text"],
    ["nationalId", "National ID", "text"],
    ["dob", "Date of Birth", "date"],
    ["gender", "Gender", "select"],
    ["address", "Address","text"],
    ["city", "City", "text"],
    ["state", "State", "text"],
    ["country", "Country", "text"],
    ["phone", "Phone", "text"],
    ["email", "Email", "email"],
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">{t("Personal Information")}</h2>

      {fields.map(([key, label, type = "text"]) => (
        <div key={key}>
          <label className="block text-sm font-medium mb-1">{t(label)} *</label>
          {type === "select" ? (
            <select
              {...register(key, { required: `${t(label)} is required` })}
              className="border rounded p-2 w-full"
            >
              <option value="">{t("Select")}</option>
              <option value="Male">{t("Male")}</option>
              <option value="Female">{t("Female")}</option>
              <option value="Other">{t("Other")}</option>
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
      ))}

      <div className="flex justify-end pt-4">
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

export default Step1_Personal;

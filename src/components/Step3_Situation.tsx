import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { getAISuggestion } from "../api/openai";
import ModalSuggestion from "./ModalSuggestion";
import { useTranslation } from "react-i18next";

export interface SituationFormData {
  financialSituation: string;
  employmentCircumstances: string;
  reasonForApplying: string;
}

interface Step3SituationProps {
  onSubmit: (data: SituationFormData) => void;
  onBack: () => void;
  defaultValues?: Partial<SituationFormData>;
}

const Step3_Situation: React.FC<Step3SituationProps> = ({
  onSubmit,
  onBack,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<SituationFormData>({
    mode: "onChange",
    defaultValues,
  });

  const [showModal, setShowModal] = useState(false);
  const [suggestionField, setSuggestionField] = useState<
    keyof SituationFormData | ""
  >("");
  const [suggestionText, setSuggestionText] = useState("");
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const openAIHelper = async (field: keyof SituationFormData) => {
    setLoading(true);
    try {
      const prompt = `Help me write about my ${field}`;
      const suggestion = await getAISuggestion(prompt);
      setSuggestionField(field);
      setSuggestionText(suggestion);
      setShowModal(true);
    } catch {
      alert(t("Failed to get AI suggestion."));
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = (text: string) => {
    if (suggestionField) {
      setValue(suggestionField, text);
    }
    setShowModal(false);
  };

  const submitHandler: SubmitHandler<SituationFormData> = (data) => {
    onSubmit(data);
  };

  const fields: { label: string; key: keyof SituationFormData }[] = [
    { label: "Financial Situation", key: "financialSituation" },
    { label: "Employment Circumstances Situation", key: "employmentCircumstances" },
    { label: "Reason For Applying", key: "reasonForApplying" },
  ];

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">
        {t("Situation Descriptions")}
      </h2>

      {fields.map(({ label, key }, idx) => (
        <div key={key}>
          <label className="block text-sm font-medium mb-1">
            {idx + 1}. {t(label)} *
          </label>
          <textarea
            {...register(key, { required: t("This field is required") as string })}
            rows={4}
            className="border rounded p-2 w-full"
          />
          <button
            type="button"
            onClick={() => openAIHelper(key)}
            disabled={loading}
            className="mt-1 text-blue-600 underline text-sm"
          >
            {loading ? t("Loading") : t("Help Me Write")}
          </button>
          {errors[key] && (
            <p className="text-red-600 text-sm">{errors[key]?.message}</p>
          )}
        </div>
      ))}

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
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {t("Submit")}
        </button>
      </div>

      {showModal && (
        <ModalSuggestion
          text={suggestionText}
          onAccept={handleAccept}
          onClose={() => setShowModal(false)}
        />
      )}
    </form>
  );
};

export default Step3_Situation;

import React, { useState, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

interface ModalSuggestionProps {
  text: string;
  onAccept: (value: string) => void;
  onClose: () => void;
}

const ModalSuggestion: React.FC<ModalSuggestionProps> = ({
  text,
  onAccept,
  onClose,
}) => {
  const [editable, setEditable] = useState<string>(text);
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditable(e.target.value);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded w-96">
        <h3 className="text-lg font-semibold mb-2">{t("AI Suggestion")}</h3>
        <textarea
          value={editable}
          onChange={handleChange}
          rows={6}
          className="border rounded p-2 w-full mb-3"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
          >
            {t("Discard")}
          </button>
          <button
            onClick={() => onAccept(editable)}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {t("Accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuggestion;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PersonalFormData } from "../src/components/Step1_Personal";
import { FamilyFinancialFormData } from "../src/components/Step2_FamilyFinancial";
import { SituationFormData } from "../src/components/Step3_Situation";

type WizardFormData = Partial<
  PersonalFormData & FamilyFinancialFormData & SituationFormData
>;

interface WizardState {
  formData: WizardFormData;
}

const initialState: WizardState = {
  formData: {},
};

const wizardSlice = createSlice({
  name: "wizard",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<WizardFormData>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    clearFormData: (state) => {
      state.formData = {};
    },
  },
});

export const { updateFormData, clearFormData } = wizardSlice.actions;
export default wizardSlice.reducer;

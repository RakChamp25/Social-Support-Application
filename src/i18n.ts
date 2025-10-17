import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Step 1
      "Personal Information": "Personal Information",
      Name: "Name",
      "National ID": "National ID",
      "Date of Birth": "Date of Birth",
      Gender: "Gender",
      Address: "Address",
      City: "City",
      State: "State",
      Country: "Country",
      Phone: "Phone",
      Email: "Email",
      Male: "Male",
      Female: "Female",
      Other: "Other",

      // Step 2
      "Family & Financial Information": "Family & Financial Information",
      "Marital Status": "Marital Status",
      Single: "Single",
      Married: "Married",
      Divorced: "Divorced",
      "Number of Dependents": "Number of Dependents",
      "Employment Status": "Employment Status",
      Employed: "Employed",
      Unemployed: "Unemployed",
      Student: "Student",
      "Monthly Income": "Monthly Income",
      "Housing Status": "Housing Status",
      Owned: "Owned",
      Rented: "Rented",

      // Step 3
      "Situation Descriptions": "Situation Descriptions",
      "Financial Situation": "Financial Situation",
      "Employment Circumstances Situation":
        "Employment Circumstances Situation",
      "Reason For Applying": "Reason For Applying",
      "Help Me Write": "Help Me Write",
      "AI Suggestion": "AI Suggestion",

      // Buttons
      Next: "Next",
      Previous: "Previous",
      Back: "Back",
      Submit: "Submit",
      Accept: "Accept",
      Discard: "Discard",
      Select: "Select",
      Loading: "Loading...",

      // Validation
      "This field is required": "This field is required",

      // Progress
      Step: "Step",
      of: "of",

      // Success
      "Form submitted successfully!": "Form submitted successfully!",

      // Misc
      "Help me write": "Help me write",
      Language: "Language",
      "Change Language": "Change Language",
    },
  },
  ar: {
    translation: {
      // Step 1
      "Personal Information": "المعلومات الشخصية",
      Name: "الاسم",
      "National ID": "الهوية الوطنية",
      "Date of Birth": "تاريخ الميلاد",
      Gender: "الجنس",
      Address: "العنوان",
      City: "المدينة",
      State: "الولاية",
      Country: "الدولة",
      Phone: "الهاتف",
      Email: "البريد الإلكتروني",
      Male: "ذكر",
      Female: "أنثى",
      Other: "آخر",

      // Step 2
      "Family & Financial Information": "معلومات الأسرة والمالية",
      "Marital Status": "الحالة الاجتماعية",
      Single: "أعزب",
      Married: "متزوج",
      Divorced: "مطلق",
      "Number of Dependents": "عدد المعالين",
      "Employment Status": "الحالة الوظيفية",
      Employed: "موظف",
      Unemployed: "عاطل عن العمل",
      Student: "طالب",
      "Monthly Income": "الدخل الشهري",
      "Housing Status": "حالة السكن",
      Owned: "مملوك",
      Rented: "مستأجر",

      // Step 3
      "Situation Descriptions": "وصف الحالة",
      "Financial Situation": "الوضع المالي",
      "Employment Circumstances Situation": "ظروف العمل",
      "Reason For Applying": "سبب التقديم",
      "Help Me Write": "ساعدني بالكتابة",
      "AI Suggestion": "اقتراح الذكاء الاصطناعي",

      // Buttons
      Next: "التالي",
      Previous: "السابق",
      Back: "عودة",
      Submit: "إرسال",
      Accept: "قبول",
      Discard: "رفض",
      Select: "اختر",
      Loading: "جار التحميل...",

      // Validation
      "This field is required": "هذا الحقل مطلوب",

      // Progress
      Step: "الخطوة",
      of: "من",

      // Success
      "Form submitted successfully!": "تم إرسال النموذج بنجاح!",

      // Misc
      "Help me write": "ساعدني بالكتابة",
      Language: "اللغة",
      "Change Language": "تغيير اللغة",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

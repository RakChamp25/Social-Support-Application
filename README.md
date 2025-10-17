# Social Support Application (Frontend)

A React-based frontend for a government social support portal. This app allows citizens to apply for financial assistance using a multi-step form wizard and AI-powered text suggestions.

---

## Features

- **3-Step Application Form Wizard**
  1. Personal Information
  2. Family & Financial Information
  3. Situation Descriptions (with AI assistance)
- **AI Assistance**: GPT-powered "Help Me Write" suggestions for text areas
- **Responsive Design**: Mobile, tablet, and desktop friendly
- **Internationalization**: English + Arabic (RTL) support
- **Accessibility**: Basic ARIA roles and keyboard navigation
- **Local Save**: Progress saved in LocalStorage
- **Mock API Submission**

---

## Tech Stack

- React.js
- Tailwind CSS
- React Hook Form
- Axios
- i18n (React-i18next)
- Vite
- Redux Toolkit

---

## Getting Started

1. **Fork and clone the repository**

```bash
git clone https://github.com/RakChamp25/Social-Support-Application.git
cd Social-Support-Application
```

2. **Install dependencies**

```bash
npm install
```

3. **Create .env file in the project root**

```bash
touch .env
```

Add your OpenAI API key:


```bash
VITE_OPENAI_KEY='{your_openai_key_here}'
```

```
To generate an OpenAI API key, visit:
https://platform.openai.com/settings/profile/api-keys
Copy the key and paste it into the .env file.
```

4. **Run the development server**

```bash
npm run dev
```

5. **View in browser**

```
Open http://localhost:5173/ to see the application.
```
# PowerShell Active Directory Chatbot

This project is a web-based chatbot designed to help users generate PowerShell scripts for Active Directory management. Built using Next.js with Vercel AI SDK, it provides a user-friendly interface for entering commands and receiving PowerShell script recommendations.

## 📂 Project Structure
```
my-app/
├── src/
│   ├── app/
│   │   └── api/
│   │       └── chat.js         # Chat API Route
│   ├── components/
│   │   └── PowerShellScriptCard.js  # Script Input Component
│   └── pages/
│       └── index.js            # Main Chat Page
└── .env                        # Environment Variables
```

## 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/veleonlim/powershell-chatbot.git
   cd powershell-chatbot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your-api-key
   ```

## 🚀 Running the Project
```bash
npm run dev
```
Visit `http://localhost:3000` to access the chatbot.

## 🧠 Prompt Configuration
The chatbot uses the following system prompt:
```
You are a helpful PowerShell assistant. Provide code for PowerShell scripts that are to be used for Active Directory management.
```

## ⚙️ API Endpoint
**Path:** `/api/chat`
- Accepts: `POST`
- Body: `{ messages: [{ role: 'user', content: '...' }] }`
- Returns: AI-generated PowerShell script

## 💻 PowerShell Script Input Component
The `PowerShellScriptCard.js` component provides a text area for entering custom scripts and a submit button for interaction.

## 📝 Future Improvements
- [ ] Add error handling for API responses
- [ ] Implement chat history
- [ ] Add syntax highlighting for PowerShell scripts

## 🤝 Contributors
- Veleon Lim

## 📜 License
This project is licensed under the MIT License.

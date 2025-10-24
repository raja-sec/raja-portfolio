# 🧠 Raja Portfolio - Full Stack Portfolio Website

A **full-stack personal portfolio** built with **React (Vite + Tailwind)** and **FastAPI**.  
It showcases profile info, projects, articles (Markdown-powered), and a contact form API.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- React (Vite)
- TailwindCSS
- Axios
- React Router DOM
- React Markdown + remark-gfm
- React Icons

### ⚙️ Backend
- FastAPI
- Uvicorn
- Python Multipart (for form parsing)
- JSON + Markdown-based data layer


---

## 📂 Project Structure

```

raja-portfolio/
│
├── backend/
│   ├── main.py                 # FastAPI entrypoint
│   ├── api/                    # All route modules
│   ├── data/                   # JSON + Markdown content
│   ├── requirements.txt
│   └── Procfile
│
├── frontend/
│   ├── src/                    # React source code
│   ├── public/                 # Static assets
│   ├── .env.example
│   └── package.json
│
└── README.md

````

---

## ⚙️ Local Development

### 1️⃣ Backend (FastAPI)
```
cd backend
python -m venv venv
# Activate the virtual environment
venv\Scripts\activate    # On Windows
source venv/bin/activate # On Linux/Mac

# If error for Execution Policy:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

pip install -r requirements.txt
uvicorn main:app --reload
````

Runs on 👉 **[http://localhost:8000](http://localhost:8000)**

---

### 2️⃣ Frontend (React)

```
cd frontend
npm install
npm run dev

# If error for Execution Policy:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

Runs on 👉 **[http://localhost:5173] or (http://localhost:3000)**

> Make sure your `.env` file contains:

```
VITE_API_URL=http://localhost:8000
```

---

## 🌐 Deployment

### ▶ Backend (Render)

1. Go to [Render.com](https://render.com)
2. Create a **New Web Service**
3. Connect your **GitHub repo**
4. Set **Root Directory:** `/backend`
5. Set **Start Command:**

   ```bash
   uvicorn main:app --host 0.0.0.0 --port 10000
   ```
6. Environment: **Python 3.11**
7. (Optional) Build Command:

   ```bash
   pip install -r requirements.txt
   ```

Once deployed, note your backend URL (e.g. `https://raja-portfolio-backend.onrender.com`).

---

### ▶ Frontend (Vercel)

1. Go to [Vercel.com](https://vercel.com)
2. Import your **GitHub repo**
3. Set **Root Directory:** `/frontend`
4. Add an environment variable:

   ```
   VITE_API_URL=https://raja-portfolio-backend.onrender.com
   ```
5. Deploy 🚀

Your frontend will now automatically connect to your live backend.

---

## 🛠️ Future Enhancements

* Add database support (PostgreSQL / MongoDB)
* Resend for email connectivity
* Light/dark mode toggle
* Multi-colour theme option
* Admin panel for editing JSON/Markdown content
* Authentication (JWT)
* Blog pagination & search

---

> 💡 Built with ❤️ using React + FastAPI

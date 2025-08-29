from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from utils import summarize_text, generate_quiz

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/summarize/")
async def summarize(file: UploadFile = File(...)):
    content = await file.read()
    text = content.decode("utf-8")
    summary = summarize_text(text)
    return {"summary": summary}

@app.post("/generate_quiz/")
async def quiz(file: UploadFile = File(...)):
    content = await file.read()
    text = content.decode("utf-8")
    quiz = generate_quiz(text)
    return {"quiz": quiz}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

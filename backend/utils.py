from transformers import pipeline
summarizer = pipeline("summarization")

def summarize_text(text):
    summary = summarizer(text, max_length=150, min_length=30, do_sample=False)
    return summary[0]['summary_text']

def generate_quiz(text):
    lines = text.split(".")
    quiz = []
    for i, line in enumerate(lines[:5]):
        quiz.append({
            "question": f"What is the main idea of: {line[:50]}?",
            "answer": line.strip()
        })
    return quiz

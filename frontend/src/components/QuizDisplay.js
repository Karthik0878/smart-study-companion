import React, { useState } from "react";
import axios from "axios";

export default function QuizDisplay() {
  const [file, setFile] = useState(null);
  const [quiz, setQuiz] = useState([]);

  const handleQuiz = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:8000/generate_quiz/", formData);
    setQuiz(res.data.quiz);
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleQuiz}>Generate Quiz</button>
      <ul>
        {quiz.map((q, i) => (
          <li key={i}>{q.question} <b>Answer:</b> {q.answer}</li>
        ))}
      </ul>
    </div>
  );
}

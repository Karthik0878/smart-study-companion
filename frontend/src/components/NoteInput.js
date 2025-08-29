import React, { useState } from "react";
import axios from "axios";

export default function NoteInput() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:8000/summarize/", formData);
    setSummary(res.data.summary);
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Summarize</button>
      <p>{summary}</p>
    </div>
  );
}

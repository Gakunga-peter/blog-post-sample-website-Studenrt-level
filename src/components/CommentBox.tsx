import { useState } from "react";

function CommentBox() {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    alert("Comment submitted!");
    setComment("");
  };

  return (
    <div>
      <h2>Leave a Comment</h2>

      <textarea
        rows={4}
        cols={50}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CommentBox;
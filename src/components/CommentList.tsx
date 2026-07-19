<div className="comments">
  
</div>
function CommentList() {

  const comments = [
    "Great article!",
    "Very informative.",
    "I learned a lot.",
    "Keep posting!"
  ];

  return (

    <div>

      <h2>Comments</h2>

      <ul>

        {comments.map((comment, index) => (

          <li key={index}>
            {comment}
          </li>

        ))}

      </ul>

    </div>

  );

}

export default CommentList;
import { memo } from "react";

export const CommentList = memo(({ comments }) => {
  return (
    <div>
      <ul>
        <li>Yorum 1</li>
        <li>Yorum 2</li>
        <li>Yorum 3</li>
      </ul>
      <ul>
        {
          // koşula bağlı render (conditional rendering)
          comments.length === 0
            ? "Hiçbir yorum bulunmamaktadır"
            : comments.map((comment, index) => (
                <li
                  key={"comment#" + index}
                  /* benzersizliği sağlamak için key verdik */ style={{
                    color: "red",
                  }}
                >
                  {comment}
                </li>
              ))
        }
      </ul>
    </div>
  );
});

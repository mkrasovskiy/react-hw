import {useState} from 'react';
function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);
    const deleteButton = id => {
        setComments(comments.filter(comment => comment.id !== id));
    };
    const commentsList = comments.map(comment =>
        <div key={comment.id}>
            <p>{comment.text}</p>
            <button onClick={() => deleteButton(comment.id)}>delete</button>
        </div>
    );
    
    return <div>{commentsList}</div>
}

export default CommentsList;
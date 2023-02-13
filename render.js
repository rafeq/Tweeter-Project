const renderer = function (posts) {
    $("#posts").empty();
    const addComment = function (post) {
        let allComments = "";
        for(let comment of post.comments) {
            allComments += ((`<div id="${comment.id}" class="comments">${comment.text}
                                <button class="deleteCommentButton">x</button>
                                </div>`)) + " "
        }
        return(allComments)  
    }
    const addPost = function (posts) {
        for(let post of posts) {
            $("#posts").append(`<div id="${post.id}">
            <button class="delete">x</button>
            <div class="post">${post.text}</div>
            ${addComment(post)}
            <input class='commentInput' placeholder='Type your Comment'>
            <button class='commentButton'>Comment</button>
            </div>
            <hr>`)
        }
        }
        addPost(posts)
}


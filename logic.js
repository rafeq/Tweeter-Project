const tweeterModule = function () {
    const _postsArray = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];
    let PostIdCounter = 2;
    let commentIdCounter = 6;
    const getPosts = () => _postsArray;
    const addToPostArray = function(post) {
        PostIdCounter += 1;
        let postId = "p" + PostIdCounter;
        _postsArray.push({
            text: post,
            id: postId,
            comments:[]
        })
    }
    const removePost = function (postID) {
        PostIdCounter -= 1;
        for(let i in _postsArray){
            if(postID == _postsArray[i].id) {
                _postsArray.splice(i, 1);
            }
        }
    }
    const addComment = function (comment, postID) {
        commentIdCounter += 1;
        commentId = "c" + commentIdCounter ;
        for(let post in _postsArray) {
            if(_postsArray[post].id == postID) {
                _postsArray[post].comments.push({ id: commentId, text: comment})
            }
        }
    }
    const removeComment = function (commentID) {
        for(let post of _postsArray){
            for(let comment in post.comments) {   
                if(post.comments[comment].id == commentID) {
                    post.comments.splice(comment, 1);
                }
            }
        }
    }



    return{
        addPost: addToPostArray,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}




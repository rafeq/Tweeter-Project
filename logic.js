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
    const COUNTER_HOLDER = {
        PostIdCounter: 2,
        commentIdCounter: 6
    }
    const getPosts = () => _postsArray;
    const addPost = function(post) {
        COUNTER_HOLDER.PostIdCounter += 1;
        let postId = "p" + COUNTER_HOLDER.PostIdCounter;
        _postsArray.push({
            text: post,
            id: postId,
            comments:[]
        })
    }
    const removePost = function (postID) {
        COUNTER_HOLDER.PostIdCounter -= 1;
        for(let i in _postsArray){
            if(postID == _postsArray[i].id) {
                _postsArray.splice(i, 1);
            }
        }
    }
    const addComment = function (comment, postID) {
        COUNTER_HOLDER.commentIdCounter += 1;
        commentId = "c" + COUNTER_HOLDER.commentIdCounter ;
        for(let post in _postsArray) {
            if(_postsArray[post].id == postID) {
                _postsArray[post].comments.push({ id: commentId, text: comment})
            }
        }
    }
    const removeComment = function (commentID) {
        for(let post of _postsArray){
            const POSTCOMMENTS = post.comments
            for(let comment in POSTCOMMENTS) {   
                if(POSTCOMMENTS[comment].id == commentID) {
                    POSTCOMMENTS.splice(comment, 1);
                }
            }
        }
    }
    return{
        addPost: addPost,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}




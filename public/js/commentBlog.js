function sendComment(e){
    e.preventDefault();
    const commentText = document.querySelector('#comment-text').value
    const author = document.querySelector('#comment-author').value
    const blog = document.querySelector('#comment-blog').value
    console.log(author);
    console.log(blog);
    if(commentText.length > 0){
        axios.post('/api/comment', {text: commentText, authorId: author, blogId: blog})
        .then(data => {
            if(data.data){
                location.reload()
            }
        })
    }
}
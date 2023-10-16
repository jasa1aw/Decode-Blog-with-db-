function deleteFilms(id, authorID){
    console.log(id, authorID);
    axios.delete(`/api/blogs/${id}`)
    .then(data => {
        console.log(data);
        if(data.status == 200){
            location.replace(`/profile/${authorID}`)
        }else if(data.status = 404){
            window.location('/not-found')
        }
    })
}
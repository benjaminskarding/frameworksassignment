import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event) {
    event.preventDefault();
    const id = new URLSearchParams(window.location.search).get('id');

    const form = new FormData(event.target);

    const editedData = {
        title: form.get('title'),
        body: form.get('body'),
        tags: form.get('tags') ? form.get('tags').split(', ').map(tag => tag.trim()) : [],
    };

    console.log("Formed new Data:", editedData); 
    updatePost(id, editedData)
}



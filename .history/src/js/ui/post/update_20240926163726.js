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
    console.log(Response);
    console.log("Formed new Data:", editedData); 
    console.log("Updating post with ID:", id);
    console.log("Post Data being sent:", editedData);

    try {
        await updatePost(postId, postData);
        alert("Post updated successfully!");
        window.location.href = `/post/?id=${postId}`; 
    } catch (error) {
        console.error("Error updating post:", error);
        alert("Failed to update post.");
    }
    updatePost(id, editedData)
}



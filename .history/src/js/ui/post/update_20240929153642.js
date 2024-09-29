import { updatePost } from "../../api/post/update";


export async function onUpdatePost(event) {
    event.preventDefault();
    const id = new URLSearchParams(window.location.search).get('id');

    const form = new FormData(event.target);

    const editedData = {
        title: form.get('title'),
        body: form.get('body'),
        tags: form.get('tags') ? form.get('tags').split(',').map(tag => tag.trim()) : [], 
        media: {
          url: form.get('mediaUrl'),
          alt: form.get('mediaAlt')
        }
    };

    try {
        const result = updatePost(id, editedData);
        alert("Post updated successfully!");
        window.location.href = `/post/?id=${id}`;
      } catch (error) {
        console.error("Error updating post:", error);
        alert("Failed to update post.");
      }
    }



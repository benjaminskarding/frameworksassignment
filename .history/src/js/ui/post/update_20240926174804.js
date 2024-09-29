import { updatePost } from "../../api/post/update";


export async function onUpdatePost(event) {
    event.preventDefault();
    const formElement = event.target;
    const id = formElement.getAttribute('data-post-id');
  
    const formData = new FormData(formElement);
  
    const editedData = {
      title: formData.get('title'),
      body: formData.get('body'),
    };
  
    try {
      const result = await updatePost(id, editedData);
      alert("Post updated successfully!");
      window.location.href = `/`;
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update post.");
    }
  }



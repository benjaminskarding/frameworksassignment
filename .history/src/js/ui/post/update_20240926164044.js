import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event) {
    event.preventDefault();

    // Get the post ID from the URL
    const postId = new URLSearchParams(window.location.search).get('id');

    // Form data extraction
    const form = new FormData(event.target);
    const postData = {
        title: form.get('title'),
        body: form.get('body'),
        tags: form.get('tags') ? form.get('tags').split(',').map(tag => tag.trim()) : [],
        media: {
            url: form.get('mediaUrl'),
            alt: form.get('mediaAlt') || "Post media"
        }
    };

    // Debugging: log the postData and postId
    console.log("Formed new Data:", postData); 
    console.log("Updating post with ID:", postId);

    try {
        const result = await updatePost(postId, postData);

        if (result) {
            console.log("Post updated successfully:", result);
            alert("Post updated successfully!");

            // Delay redirection to see the console logs
            setTimeout(() => {
                window.location.href = `/post/?id=${postId}`; // Redirect after a delay
            }, 5000);  // 5-second delay
        }
    } catch (error) {
        console.error("Error updating post:", error);
        alert("Failed to update post.");
    }
}



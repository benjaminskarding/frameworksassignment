import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event) {
    event.preventDefault();

    const postId = event.target.getAttribute("data-post-id");
    const formData = new FormData(event.target);

    const updatedPost = {
        title: formData.get("title"),
        body: formData.get("body"),
        tags: formData.get("tags") ? formData.get("tags").split(",") : [],
        media: {
            url: formData.get("mediaUrl"),
            alt: formData.get("mediaAlt"),
        }
    };

    try {
        const updatedData = await updatePost(postId, updatedPost);
        alert("Post updated successfully");
        window.location.href = `/post/id${postId}`;
    } catch (error) {
        console.error("Error updating post:", error);
        alert("Failed to update post");
    }
}

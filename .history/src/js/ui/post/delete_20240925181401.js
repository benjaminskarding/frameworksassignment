import { deletePost } from "../../api/post/delete";
import { getPostId } from "../../router/views/post";

export async function onDeletePost(event) {
    const postId = getPostId();

    if(confirm("Are you sure you want to delete this post?")) {
        try {
            await deletePost(postId);
            alert("Post deleted");
            window.location.href = "/";
        } catch (error) {
            console.error("Error deleting post")
            alert("Failed to delete post");
        }
    }
}

import { createPost } from "../../api/post/create";


export async function onCreatePost(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const postData = {
        title: formData.get("title"),
        body: formData.get("body"),
        tags: formData.get("tags"),
        media: formData.get("media");
    };
    
    try {
        await createPost(postData);
        alert("Post created successfully!");
        window.location.href = "/";
    }
}



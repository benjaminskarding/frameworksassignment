import { API_SOCIAL_POSTS } from "../../api/constants";
import { headers } from "../../api/headers";


export async function onCreatePost(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const postData = {
        title: formData.get("title"),
        body: formData.get("body"),
        tags: formData.get("tags"),
        media: formData.get("media");
    }; 
}



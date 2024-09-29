import { API_SOCIAL_POSTS } from "../../api/constants";
import { headers } from "../../api/headers";


export async function onCreatePost(postData) {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        throw new Error ("No access token found. Please log in.");
    }

    const options = {
        method: "POST",
        headers: headers(accessToken),
        body: JSON.stringify(postData),
    };


}



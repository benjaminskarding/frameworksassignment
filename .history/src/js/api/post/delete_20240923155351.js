import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function deletePost(id) {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        console.error("No access token found");
        throw new Error("No access token found. Please log in");
    }
}

import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

export async function createPost({ title, body, tags, media }) {
    const accessToken = localStorage.getItem('accessToken');
}

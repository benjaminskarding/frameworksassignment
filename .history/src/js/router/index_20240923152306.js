export default async function router() {
  const pathname = window.location.pathname; // This gets the path (e.g., "/post/")
  const searchParams = window.location.search; // This gets the query string (e.g., "?id=123")

  // If the URL is "/post" with or without query parameters, load the post.js
  if (pathname === "/post/") {
    await import("./views/post.js"); // Load post.js to handle the post page
  } else if (pathname === "/") {
    await import("./views/home.js");
  } else if (pathname === "/auth/") {
    await import("./views/auth.js");
  } else if (pathname === "/auth/login/") {
    await import("./views/login.js");
  } else if (pathname === "/auth/register/") {
    await import("./views/register.js");
  } else if (pathname === "/post/edit/") {
    await import("./views/postEdit.js");
  } else if (pathname === "/post/create/") {
    await import("./views/postCreate.js");
  } else if (pathname === "/profile/") {
    await import("./views/profile.js");
  } else {
    await import("./views/notFound.js");
  }
}

export default async function router() {
  const pathname = window.location.pathname;  // Get the pathname (e.g., "/post/")
  
  // Always load post.js for "/post/" even if query parameters exist
  if (pathname === "/post/") {
    await import("./views/post.js"); // Load post.js to handle post-related logic
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

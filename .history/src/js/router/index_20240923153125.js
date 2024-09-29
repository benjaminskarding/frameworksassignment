export default async function router() {
  const pathname = window.location.pathname; // Get the base pathname (e.g., "/post/")
  const searchParams = window.location.search; // Get query parameters (e.g., "?id=123")

  console.log("Current Pathname:", pathname);
  console.log("Current Search Parameters:", searchParams);

  // Always load post.js for "/post/", regardless of query parameters
  if (pathname === "/post/") {
    await import("./views/post.js"); // This will load post.js to handle the post logic
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

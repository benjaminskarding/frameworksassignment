export default async function router() {
  const pathname = window.location.pathname;
  const searchParams = window.location.search;

  console.log("Current Pathname:", pathname);
  console.log("Current Search Parameters:", searchParams);

  // Always load post.js for /post/ path, regardless of query parameters
  if (pathname === "/post/") {
    console.log("Loading post.js...");
    await import("./views/post.js");
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

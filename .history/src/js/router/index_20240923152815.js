export default async function router() {
  const pathname = window.location.pathname;

  if (pathname === "/post/") {
    // Always load post.js when the path is /post/
    await import("./views/post.js"); // This loads post.js
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

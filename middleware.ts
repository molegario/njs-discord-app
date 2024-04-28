import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/", "/testroute_1_1"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

//---
// OLEGARIO - changed to use new Clerks API which uses new clerkMiddleware method
// note: you can no longer define "unprotected" routes and must list all protected routes
// TIMESTAMP:: 2021-09-29T14:00:00Z https://youtu.be/ZbX4Ok9YX94?t=2914
//---

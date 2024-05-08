import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publishableKey: "pk_test_bGliZXJhbC1tb29zZS00Mi5jbGVyay5hY2NvdW50cy5kZXYk",
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};

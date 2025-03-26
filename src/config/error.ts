export type ErrorType = "not-found" | "server-error" | "unauthorized" | "forbidden" | "maintenance";

export interface ErrorConfig {
  code: string;
  title: string;
  description: string;
  suggestions: string[];
  primaryAction?: {
    label: string;
    href: string;
  };
}

export const errorConfigs: Record<ErrorType, ErrorConfig> = {
  forbidden: {
    code: "403",
    description: "You don't have permission to access this page.",
    primaryAction: {
      href: "/",
      label: "Go Back",
    },
    suggestions: [
      "If you believe this is a mistake, please contact support.",
      "Try signing in with a different account.",
    ],
    title: "Access forbidden",
  },
  maintenance: {
    code: "503",
    description: "We're currently performing maintenance. We'll be back shortly.",
    primaryAction: {
      href: "/status",
      label: "Check Status",
    },
    suggestions: ["Please try again in a few minutes.", "Check our status page for updates."],
    title: "Under maintenance",
  },
  "not-found": {
    code: "404",
    description:
      "It seems like the page you were looking for has moved, changed, or perhaps it was never here to begin with.",
    primaryAction: {
      href: "/tours",
      label: "Go to Tours Page",
    },
    suggestions: [
      "Try checking the URL for any errors, then hit refresh.",
      "Use the search bar at the top of the page to find what you were looking for.",
    ],
    title: "Page not found",
  },
  "server-error": {
    code: "500",
    description: "Our server encountered an error. We've been notified and are working to fix the issue.",
    primaryAction: {
      href: "#",
      label: "Refresh Page",
    },
    suggestions: ["Try refreshing the page.", "If the problem persists, please try again later."],
    title: "Server error",
  },
  unauthorized: {
    code: "401",
    description: "You need to be logged in to access this page.",
    primaryAction: {
      href: "/login",
      label: "Sign In",
    },
    suggestions: ["Please sign in to continue.", "If you don't have an account, you can create one."],
    title: "Unauthorized access",
  },
};

import { ErrorPage } from "@/components/error";

export function UnauthorizedError() {
  return <ErrorPage type="unauthorized" />;
}

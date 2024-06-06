import { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
const SignUp = lazy(() => import("./components/Signup"));
export default function App() {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <SignUp />
      </Suspense>
    </>
  );
}

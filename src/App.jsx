import { Suspense, lazy } from "react";
// import Signup from "./components/Signup"
const SignUp = lazy(() => import("./components/Signup"));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    </>
  );
}

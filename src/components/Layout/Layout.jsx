import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    </div>
  );
};
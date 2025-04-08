import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <>
      <div className="relative mx-auto h-screen w-full max-w-[420px] bg-black text-white">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

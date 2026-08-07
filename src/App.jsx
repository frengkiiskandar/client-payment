import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
        }}
      />
      <Routes>
        <Route path="/:invoice" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

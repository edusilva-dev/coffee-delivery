import { Layout } from "@modules";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

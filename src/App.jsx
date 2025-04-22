import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import Content from "./components/shared/content/Content";
import BreadCrumbs from "./components/shared/breadсrumbs/BreadСrumbs";
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <hr />
        <BreadCrumbs />
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

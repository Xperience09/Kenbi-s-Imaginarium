import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Poem from "./pages/Poem";
import Contact from "./pages/Contact";
import BlogA from "./pages/blogs/BlogA";
import BlogB from "./pages/blogs/BlogB";
import BlogC from "./pages/blogs/BlogC";

function App() {
  const items = [
    { name: "Home", component: Home },
    { name: "Poem", component: Poem },
    { name: "About", component: About },
    { name: "Contact", component: Contact },
  ];
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {items.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.name.toLowerCase()}
                element={<item.component />}
              />
            );
          })}
          <Route path="/blogs/BlogA" element={<BlogA />} />
          <Route path="/blogs/BlogB" element={<BlogB />} />
          <Route path="/blogs/BlogC" element={<BlogC />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

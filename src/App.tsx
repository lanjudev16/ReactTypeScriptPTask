import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className=" min-h-[calc(100vh-120px)] max-w-7xl mx-auto mb-10 mt-5">
        <Posts></Posts>
      </div>
      <Footer />
    </div>
  );
}

export default App;

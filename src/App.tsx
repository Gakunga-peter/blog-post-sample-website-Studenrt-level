import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <BlogList />
        <CommentBox />
        <CommentList />
      </main>

      <Footer />
    </>
  );
}

export default App;
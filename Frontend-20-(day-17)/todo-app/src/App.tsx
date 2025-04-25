import Article from "./components/Article";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArticleProvider } from "./context/ArticleContext";

function App() {
  return (
    <ArticleProvider> // parent
      <div className="p-4 font-sans">
        <Header /> // children
        <Article /> // children
        <Footer/> // children
      </div>
    </ArticleProvider>
  );
}

export default App;

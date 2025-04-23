import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Article
          title="Mengapa React JS Populer?"
          author="Taufik"
          date="23 April 2025"
          content={`React.js adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna.
            Keunggulan utama React adalah pendekatannya yang berbasis komponen, penggunaan Virtual DOM,
            serta kemampuan rendering yang cepat dan efisien.`}
        />

        <Article
          title="Komponen di React: Konsep Dasar"
          author="Taufik"
          date="23 April 2025"
          content={`Komponen merupakan blok penyusun utama dalam React. Dengan komponen, kita dapat memisahkan
            UI menjadi bagian-bagian kecil yang dapat digunakan kembali.`}
        />
      </main>
      <Footer />
    </div>
  );
};

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;

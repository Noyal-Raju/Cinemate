import "./App.css";
import { Header, Footer } from './components' 
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="flex flex-col gap-5 bg-white dark:bg-gray-700">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

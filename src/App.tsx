import { Suspense } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import type { ITechnology } from "./types/technology";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const technologyFetch = async (): Promise<ITechnology []> => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

function App() {
  const technologies = technologyFetch();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <ToastContainer />
        <Technology technologies={technologies} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

import { Suspense } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import type { ITechnology } from "./types/technology";

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
        <Technology technologies={technologies} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

import Footer from "../components/Footer";
import Products from "../components/Products";

function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen relative">
      <Products />
      <Footer />
    </div>
  );
}

export default Home;

import Navbar from "./components/Navbar";
import EstateCard from "./components/EstateCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow grid grid-cols-2 gap-6 p-6">
        <EstateCard name="Val De Vie" />
        <EstateCard name="Ocean View" />
        <EstateCard name="Green Valley" />
      </main>
      <Footer />
    </div>
  );
}

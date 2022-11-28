import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import storeItems from '../data/items.json';

export function Products() {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <Navbar />
      <div>
        {storeItems.map((item) => (
          <h1>{JSON.stringify(item)}</h1>
        ))}
      </div>
      <Footer />
    </div>
  );
}

import { products } from "../constants";
import { ArrivalCard } from "../assets/component";

const NewArrivals = () => {
  return (
    <section className="max-container max-sm:mt-1" id="arrivals">
      {/* Title */}
      <div
        className="flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-5xl font-spaceGrotesk font-bold">New Arrivals</h2>
      </div>

      {/* Arrival Cards */}
      <div
        className="mt-6 flex flex-wrap justify-between gap-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {products.map((product) => (
          <ArrivalCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;

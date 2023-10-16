
import { Navigation } from "../assets/component";
import {
  Hero,
  NewArrivals,
  ShoeOffer,
  ClientReview,
  Footer,
} from "../sections";
import Provider from "./provider";

export default function Home() {
  return (
    <Provider attribute="class">
      <main className="relative mx-auto">
        <Navigation />

        <section className="sm:pl-16 pl-8 sm:pr-16 pr-8 sm:pb-24 pb-12">
          <Hero />
        </section>

        <section className="border-2 border-x-0 sm:px-16 px-8 sm:py-24 py-12">
          <NewArrivals />
        </section>

        <section className="sm:px-16 px-8 py-8 flex justify-center">
          <ShoeOffer />
        </section>

        <section className=" border-2 border-x-0 sm:px-16 px-8 sm:py-24 py-12">
          <ClientReview />
        </section>

        <section className="sm:px-16 px-8 sm:pt-24 pt-12 pb-8">
          <Footer />
        </section>
      </main>
    </Provider>
  );
}

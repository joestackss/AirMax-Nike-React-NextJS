import { testimonials } from "../constants";
import { TestimonialCard } from "../assets/component";

const ClientReview = () => {
  console.log(testimonials);
  return (
    <section id="reviews" className="max-container">
      <div data-aos="fade-up" data-aos-duration="1000">
        {/* Title */}
        <h3 className="font-spaceGrotesk text-center text-5xl font-extrabold">
          <span className="text-[#0077b6]">Client</span> Reviews
        </h3>

        {/* Sub title */}
        <p className="m-auto mt-4 max-w-lg text-2xl text-center font-spaceGrotesk">
          Listen to authentic tales from our delighted customers recounting
          their extraordinary encounters with us.
        </p>

        {/* Testimonials */}

        <div className="mt-12 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              imgURL={testimonial.imgURL}
              clientName={testimonial.customerName}
              rating={testimonial.rating}
              feedback={testimonial.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReview;

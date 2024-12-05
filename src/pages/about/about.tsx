import React from "react";
import PageHeader from "@components/ui/page-header";
const AboutUs: React.FC = () => {
  return (
<>
<PageHeader></PageHeader>
    <div className="bg-gray-50">
      {/* Our Story Banner */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Our story starts with the name <span className="font-extrabold">Fun2Sh</span>.
          Society may perceive Fun2Sh as playful or unconventional, but we believe that being
          different is what makes us impactful. We are committed to innovation,
          honesty, and thoughtfulness, seeking to make a positive impact on the world.
        </p>
      </section>

      {/* About the Spirit */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold mb-6">The Spirit of Fun2Sh</h2>
          <p className="text-lg">
            For us, Fun2Sh represents the spirit of thinking differently. It’s about trying new things
            even when success isn’t guaranteed and prioritizing the well-being of others as much as our
            own. We believe that making an impact goes beyond financial success; it’s about creating
            something meaningful.
          </p>
        </div>
      </section>

      {/* Fun2Sh's Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-semibold mb-6">Our Journey</h2>
          <p className="mb-4">Founded in 2012, Fun2Sh has grown to become a platform for innovative fashion and meaningful products.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">7 Years of Journey</h3>
              <p>We've been creating products that resonate for over seven years.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">250+ Team Members</h3>
              <p>A passionate team dedicated to bringing you the best.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">1 Crore+ Products Sold</h3>
              <p>Our products have touched millions of lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Fun2Sh */}
      <section className="py-16 px-4 md:px-8 bg-blue-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold mb-6">What Makes Us Fun2Sh</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Innovative Design</h3>
              <p>Our designs are more than just fashion—they are an extension of you, reflecting individuality and creativity.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Direct-to-Consumer Model</h3>
              <p>We bring you value and accessibility by cutting out the middleman, ensuring you get the best for less.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Homegrown</h3>
              <p>Imagined and crafted in India, we are proud to support local talent and contribute to the economy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutUs;

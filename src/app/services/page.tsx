import React from "react";

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Our Products & Services
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          At Tracos, we are committed to providing top-tier heavy equipment and
          services that meet the unique needs of businesses across construction,
          mining, agriculture, and industrial sectors. From machinery sales to
          rental services and comprehensive maintenance support, we offer a wide
          range of solutions designed to optimize your operations.
        </p>
      </header>

      {/* Our Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h2>
        <p className="mb-6">
          We provide a diverse selection of high-quality machinery from leading
          global brands. Whether you need a new machine for a large-scale
          construction project or a reliable used machine for your farm, Tracos
          has the right equipment for the job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Excavators */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Excavators</h3>
            <p className="text-gray-600 mt-2">
              Excavators are essential for digging, lifting, and trenching.
              Tracos offers a wide range of excavators, from compact
              mini-excavators to large tracked machines ideal for heavy-duty
              earth-moving tasks.
            </p>
            <div className="mt-4">
              <p>
                <strong>Model Example:</strong> Caterpillar 320D
              </p>
              <p>
                <strong>Price:</strong> Starting at $120,000 (new) / $75,000
                (used)
              </p>
            </div>
          </div>

          {/* Bulldozers */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Bulldozers</h3>
            <p className="text-gray-600 mt-2">
              Perfect for grading, pushing soil, and other earth-moving tasks,
              our bulldozers are built to handle the toughest conditions, from
              construction sites to mining operations.
            </p>
            <div className="mt-4">
              <p>
                <strong>Model Example:</strong> Komatsu D61PX-24
              </p>
              <p>
                <strong>Price:</strong> Starting at $150,000 (new) / $95,000
                (used)
              </p>
            </div>
          </div>

          {/* Cranes */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Cranes</h3>
            <p className="text-gray-600 mt-2">
              For lifting and moving heavy loads, our range of cranes is
              designed to offer precision and power. We stock both mobile and
              tower cranes to meet the needs of diverse industries.
            </p>
            <div className="mt-4">
              <p>
                <strong>Model Example:</strong> Liebherr LTM 1070-4.2
              </p>
              <p>
                <strong>Price:</strong> Starting at $600,000 (new) / $400,000
                (used)
              </p>
            </div>
          </div>

          {/* Loaders */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Loaders</h3>
            <p className="text-gray-600 mt-2">
              Ideal for material handling, digging, and transporting, Tracos
              offers a variety of wheel loaders and track loaders. These
              machines are designed for both light and heavy-duty tasks.
            </p>
            <div className="mt-4">
              <p>
                <strong>Model Example:</strong> CAT 950M
              </p>
              <p>
                <strong>Price:</strong> Starting at $130,000 (new) / $80,000
                (used)
              </p>
            </div>
          </div>

          {/* Dump Trucks */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">
              Dump Trucks
            </h3>
            <p className="text-gray-600 mt-2">
              Heavy-duty dump trucks from Tracos can carry massive loads of
              dirt, gravel, and other materials across rough terrain, making
              them perfect for large construction or mining operations.
            </p>
            <div className="mt-4">
              <p>
                <strong>Model Example:</strong> Volvo A40G
              </p>
              <p>
                <strong>Price:</strong> Starting at $230,000 (new) / $150,000
                (used)
              </p>
            </div>
          </div>

          {/* Tractors & Agricultural Equipment */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">
              Tractors & Agricultural Equipment
            </h3>
            <p className="text-gray-600 mt-2">
              From large agricultural tractors to tillers and harvesters, Tracos
              offers durable machines that make farming more efficient and
              productive.
            </p>
            <div className="mt-4">
              <p>
                <strong>Model Example:</strong> John Deere 8R Series Tractor
              </p>
              <p>
                <strong>Price:</strong> Starting at $250,000 (new) / $180,000
                (used)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
        <p className="mb-6">
          In addition to providing top-quality equipment, Tracos offers a range
          of services to ensure that your machinery stays in optimal condition
          and that your business operates smoothly.
        </p>

        {/* Services List */}
        <div className="space-y-8">
          {/* Equipment Rentals */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">
              Equipment Rentals
            </h3>
            <p className="text-gray-600 mt-2">
              If purchasing heavy machinery is not an option, Tracos offers
              flexible equipment rental plans. Whether you need machines for a
              day, month, or longer, our fleet of well-maintained equipment is
              available for short-term or long-term rental.
            </p>
            <div className="mt-4">
              <p>
                <strong>Rental Pricing:</strong> Rates start at $500 per day for
                mini-excavators and $2,500 per day for large cranes.
              </p>
              <p>
                <strong>Delivery & Pickup:</strong> Available at an additional
                cost, depending on your location.
              </p>
            </div>
          </div>

          {/* Maintenance & Repairs */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">
              Maintenance & Repairs
            </h3>
            <p className="text-gray-600 mt-2">
              Our expert technicians provide comprehensive maintenance and
              repair services to keep your machinery running smoothly. We offer
              both scheduled servicing and emergency repairs, ensuring that your
              equipment stays operational and efficient.
            </p>
            <div className="mt-4">
              <p>
                <strong>Maintenance Services:</strong> Starting at $150 per
                hour.
              </p>
              <p>
                <strong>Repair Services:</strong> Quotes provided after an
                initial assessment.
              </p>
            </div>
          </div>

          {/* Spare Parts & Accessories */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">
              Spare Parts & Accessories
            </h3>
            <p className="text-gray-600 mt-2">
              We supply a wide range of spare parts and accessories for all
              makes and models of heavy equipment. From filters and hydraulic
              hoses to tracks and buckets, we can help you find the parts you
              need quickly and efficiently.
            </p>
            <div className="mt-4">
              <p>
                <strong>Spare Parts Pricing:</strong> Contact us for a detailed
                quote based on the part or accessory needed.
              </p>
            </div>
          </div>

          {/* Consultation & Equipment Sourcing */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">
              Consultation & Equipment Sourcing
            </h3>
            <p className="text-gray-600 mt-2">
              Not sure what equipment is best for your project? Our experienced
              team is available to consult with you and recommend the most
              suitable machines based on your specific needs. We can also source
              hard-to-find equipment or parts to ensure you get exactly what you
              need.
            </p>
            <div className="mt-4">
              <p>
                <strong>Consultation Fees:</strong> Free for clients purchasing
                or renting equipment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

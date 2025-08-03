import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = ["Top Villa", "Self Checkin", "Beachfront", "Free Parking", "Mountain View"];

const Pill = ({ label }: { label: string }) => (
  <button className="bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm mr-2 mb-2">
    {label}
  </button>
);

const PropertyCard = ({ property }: { property: PropertyProps }) => (
  <div className="bg-white shadow rounded overflow-hidden">
    <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{property.name}</h3>
      <p className="text-sm text-gray-600">{property.address.city}, {property.address.country}</p>
      <p className="text-sm mt-2">Rating: ⭐ {property.rating}</p>
      <p className="text-blue-600 font-bold text-lg">${property.price}</p>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-72 bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url('/bg.jpg')` }}
      >
        <div>
          <h1 className="text-3xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="p-4">
        <h2 className="text-xl font-semibold mb-2">Filters</h2>
        <div className="flex flex-wrap">
          {filters.map((label) => (
            <Pill key={label} label={label} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </section>
    </div>
  );
}

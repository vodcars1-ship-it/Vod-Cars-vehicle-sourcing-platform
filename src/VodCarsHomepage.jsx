import { useMemo, useState } from "react";

export default function VodCarsHomepage() {
  const [page, setPage] = useState("home");
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [orderMessage, setOrderMessage] = useState("");
  const [checkoutMode, setCheckoutMode] = useState("buy");
  const [checkoutVehicle, setCheckoutVehicle] = useState(null);
  const [dealerForm, setDealerForm] = useState({
    title: "",
    subtitle: "",
    price: "",
    reg: "",
    miles: "",
    fuel: "Petrol",
    auto: "Manual",
    badge: "Just added",
    img: "",
    body: "SUV",
    lot: "",
    runCondition: "Runs and drives",
    odometer: "",
    colour: "",
    engine: "",
    drive: "2WD",
    vat: "Included in final price",
    keys: "Yes",
    damage: "",
    status: "live",
  });
  const [dealerCars, setDealerCars] = useState([
    {
      id: 1,
      title: "Nissan Qashqai",
      subtitle: "1.3 DiG-T N-Connecta",
      price: "£17,950",
      reg: "2019",
      miles: "29,700 miles",
      fuel: "Petrol",
      auto: "Manual",
      badge: "From £299/mo",
      img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200",
      body: "SUV",
      lot: "77458445",
      runCondition: "Runs and drives",
      odometer: "29,700",
      colour: "Grey",
      engine: "1332 cc",
      drive: "2WD",
      vat: "Included in final price",
      keys: "Yes",
      damage: "Minor cosmetic marks",
      status: "live",
      soldAt: null,
      orderLocked: false,
      images: [
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1200",
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1200",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200",
        "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200",
      ],
    },
    {
      id: 2,
      title: "Nissan Qashqai",
      subtitle: "1.5 dCi N-Connecta",
      price: "£20,497",
      reg: "2021",
      miles: "17,900 miles",
      fuel: "Diesel",
      auto: "Manual",
      badge: "From £329/mo",
      img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1200",
      body: "SUV",
      lot: "77458446",
      runCondition: "Runs and drives",
      odometer: "17,900",
      colour: "White",
      engine: "1461 cc",
      drive: "2WD",
      vat: "Included in final price",
      keys: "Yes",
      damage: "Light wear",
      status: "live",
      soldAt: null,
      orderLocked: false,
      images: [
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1200",
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200",
      ],
    },
    {
      id: 3,
      title: "Nissan Qashqai",
      subtitle: "1.3 DIG-T Acenta Premium",
      price: "£16,995",
      reg: "2018",
      miles: "39,000 miles",
      fuel: "Petrol",
      auto: "Manual",
      badge: "Great value",
      img: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1200",
      body: "SUV",
      lot: "77458447",
      runCondition: "Runs and drives",
      odometer: "39,000",
      colour: "Blue",
      engine: "1332 cc",
      drive: "2WD",
      vat: "Included in final price",
      keys: "Yes",
      damage: "Minor scratches",
      status: "live",
      soldAt: null,
      orderLocked: false,
      images: [
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1200",
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200",
        "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200",
      ],
    },
    {
      id: 4,
      title: "Nissan Qashqai",
      subtitle: "1.2 DIG-T Tekna",
      price: "£14,890",
      reg: "2017",
      miles: "53,000 miles",
      fuel: "Petrol",
      auto: "Manual",
      badge: "Low mileage",
      img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200",
      body: "SUV",
      lot: "77458448",
      runCondition: "Runs and drives",
      odometer: "53,000",
      colour: "Silver",
      engine: "1197 cc",
      drive: "2WD",
      vat: "Included in final price",
      keys: "Yes",
      damage: "Age-related marks",
      status: "live",
      soldAt: null,
      orderLocked: false,
      images: [
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200",
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1200",
      ],
    },
    {
      id: 5,
      title: "Nissan Qashqai",
      subtitle: "1.5 dCi Acenta",
      price: "£13,650",
      reg: "2017",
      miles: "60,000 miles",
      fuel: "Diesel",
      auto: "Manual",
      badge: "Popular",
      img: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200",
      body: "SUV",
      lot: "77458449",
      runCondition: "Runs and drives",
      odometer: "60,000",
      colour: "Purple",
      engine: "1461 cc",
      drive: "2WD",
      vat: "Included in final price",
      keys: "Yes",
      damage: "Small dent noted",
      status: "live",
      soldAt: null,
      orderLocked: false,
      images: [
        "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200",
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1200",
      ],
    },
    {
      id: 6,
      title: "Nissan Qashqai",
      subtitle: "1.3 DIG-T N-Motion",
      price: "£18,750",
      reg: "2020",
      miles: "31,200 miles",
      fuel: "Petrol",
      auto: "Manual",
      badge: "Featured",
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200",
      body: "SUV",
      lot: "77458450",
      runCondition: "Runs and drives",
      odometer: "31,200",
      colour: "Black",
      engine: "1332 cc",
      drive: "2WD",
      vat: "Included in final price",
      keys: "Yes",
      damage: "Clean overall condition",
      status: "live",
      soldAt: null,
      orderLocked: false,
      images: [
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200",
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200",
      ],
    },
  ]);

  const cars = [
    {
      id: 1,
      title: "2021 Mercedes‑Benz",
      price: "$89,500",
      img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200",
    },
    {
      id: 2,
      title: "2022 BMW",
      price: "$62,900",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200",
    },
    {
      id: 3,
      title: "2024 Lamborghini",
      price: "$289,000",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200",
    },
  ];

  const inventoryCars = useMemo(() => dealerCars.filter((car) => car.status === "live"), [dealerCars]);

  const filters = [
    "Distance from you",
    "Location",
    "Make / Model",
    "Body style",
    "Payment type",
    "Age",
    "Running cost",
    "Body colour",
    "Specification",
  ];

  function Header() {
    return (
      <header className="border-b bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => setPage("home")} className="flex items-center gap-3">
            <img
              src="/vod-cars-logo.png"
              alt="VOD Cars Logo"
              className="h-10 w-auto"
            />
          </button>

          <nav className="hidden md:flex gap-8 text-sm text-gray-600">
            <button onClick={() => setPage("home")}>Home</button>
            <button onClick={() => setPage("inventory")}>Inventory</button>
            <button onClick={() => setPage("dealer")}>Dealer Admin</button>
            <button>Contact</button>
          </nav>

          <button
            onClick={() => setPage("dealer")}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
          >
            Dealer Portal
          </button>
        </div>
      </header>
    );
  }

  function HomePage() {
    return (
      <>
        <section className="bg-blue-50 py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Find Your Dream Vehicle at
              <span className="text-blue-600"> VOD CARS</span>
            </h1>

            <p className="mt-4 text-gray-600">
              Premium selection of luxury and high‑performance vehicles. Quality guaranteed, prices you'll love.
            </p>

            <div className="bg-white shadow-md rounded-lg mt-8 p-4 flex gap-3">
              <input
                className="flex-1 border rounded px-3 py-2"
                placeholder="Search by make, model, or keyword..."
              />
              <select className="border rounded px-3 py-2">
                <option>All Makes</option>
              </select>
              <button
                onClick={() => setPage("inventory")}
                className="bg-blue-600 text-white px-5 py-2 rounded"
              >
                Search
              </button>
            </div>

            <button
              onClick={() => setPage("inventory")}
              className="mt-4 text-blue-600 text-sm border border-blue-600 px-4 py-1 rounded"
            >
              Browse All Vehicles
            </button>
          </div>
        </section>

        <section className="py-10 border-b">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <div>
              <div className="text-blue-600 text-xl font-bold">500+</div>
              <p className="text-sm text-gray-500">Vehicles Sold</p>
            </div>
            <div>
              <div className="text-blue-600 text-xl font-bold">15+</div>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div>
              <div className="text-blue-600 text-xl font-bold">98%</div>
              <p className="text-sm text-gray-500">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-blue-600 text-xl font-bold">$50M+</div>
              <p className="text-sm text-gray-500">Inventory Value</p>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center">Featured Vehicles</h2>
          <p className="text-center text-gray-500 mb-10">
            Handpicked premium vehicles from our exclusive collection
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div key={car.id} className="border rounded-lg overflow-hidden shadow-sm">
                <img src={car.img} className="h-48 w-full object-cover" />

                <div className="p-4">
                  <h3 className="font-semibold">{car.title}</h3>
                  <p className="text-blue-600 font-bold mt-2">{car.price}</p>

                  <button
                    onClick={() => setPage("inventory")}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setPage("inventory")}
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              View All Inventory
            </button>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold">Why Choose VOD CARS?</h2>
            <p className="text-gray-500 mb-10">
              Your trusted partner in finding the perfect vehicle
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Quality Assured",
                "Premium Selection",
                "Fast Process",
                "Expert Support",
              ].map((item) => (
                <div key={item} className="border rounded-lg p-6 bg-white">
                  <div className="h-10 w-10 bg-blue-100 rounded-full mx-auto mb-3" />
                  <h4 className="font-semibold">{item}</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Carefully selected vehicles with verified quality.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-700 text-white py-14 text-center">
          <h2 className="text-2xl font-bold">
            Ready to Find Your Perfect Vehicle?
          </h2>
          <p className="mt-2 opacity-90">
            Contact us today and let our experts help you find exactly what you're looking for.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setPage("inventory")}
              className="bg-white text-blue-700 px-5 py-2 rounded"
            >
              Browse Inventory
            </button>
            <button className="border border-white px-5 py-2 rounded">
              Contact Us
            </button>
          </div>
        </section>
      </>
    );
  }

  function InventoryPage() {
    return (
      <div className="bg-[#f5f5f7] min-h-screen">
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="grid lg:grid-cols-[1.2fr_320px] gap-4 items-center">
              <div>
                <div className="text-xs text-gray-500 mb-2">Home / Used cars / Nissan / Qashqai</div>
                <h1 className="text-2xl font-bold">Nissan Qashqai</h1>
                <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div className="border rounded p-3">
                    <div className="text-gray-500">Body style</div>
                    <div className="font-semibold">SUV</div>
                  </div>
                  <div className="border rounded p-3">
                    <div className="text-gray-500">Fuel type</div>
                    <div className="font-semibold">Petrol / Diesel</div>
                  </div>
                  <div className="border rounded p-3">
                    <div className="text-gray-500">Price</div>
                    <div className="font-semibold">From £13,650</div>
                  </div>
                  <div className="border rounded p-3">
                    <div className="text-gray-500">Available now</div>
                    <div className="font-semibold">76 cars</div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="border px-5 py-2 rounded font-medium">Compare offers</button>
                  <button className="border px-5 py-2 rounded font-medium">View details</button>
                  <button className="bg-[#00c2a8] text-black px-5 py-2 rounded font-semibold">Enquire now</button>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border h-[180px] lg:h-[190px]">
                <img
                  src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1200"
                  alt="Nissan Qashqai"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">76 similar cars</h2>
              <div className="text-xs text-gray-500 mt-1">Clear filters • Newest • Cheapest first</div>
            </div>
            <button className="border bg-white px-4 py-2 rounded text-sm">Recommended</button>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-5 items-start">
            <aside className="bg-white rounded-lg border p-4 sticky top-24">
              <button className="w-full border rounded py-2 text-sm font-medium mb-4">Save search</button>
              <div className="space-y-3">
                {filters.map((filter) => (
                  <details key={filter} className="border rounded-lg bg-white group" open={filter === "Payment type" || filter === "Age"}>
                    <summary className="list-none cursor-pointer px-4 py-3 text-sm font-semibold flex items-center justify-between">
                      {filter}
                      <span className="text-gray-400">▾</span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-gray-600">
                      {filter === "Payment type" ? (
                        <div className="flex gap-2">
                          <button className="bg-blue-600 text-white px-3 py-2 rounded text-xs">Cash</button>
                          <button className="border px-3 py-2 rounded text-xs">Monthly fee</button>
                        </div>
                      ) : filter === "Age" ? (
                        <div className="grid grid-cols-2 gap-2">
                          <button className="border rounded px-3 py-2 text-xs">0–3 yrs</button>
                          <button className="border rounded px-3 py-2 text-xs">4–6 yrs</button>
                          <button className="border rounded px-3 py-2 text-xs">7–10 yrs</button>
                          <button className="border rounded px-3 py-2 text-xs">10+ yrs</button>
                        </div>
                      ) : (
                        <div className="text-xs text-gray-500">Filter options go here</div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </aside>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {inventoryCars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg border overflow-hidden shadow-sm">
                  <div className="relative">
                    <img src={car.img} alt={car.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 left-2 bg-lime-200 text-gray-800 text-[10px] font-semibold px-2 py-1 rounded">
                      {car.badge}
                    </div>
                    <button className="absolute top-2 right-2 bg-white/90 border rounded-full h-8 w-8 text-sm">♡</button>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500">Used • {car.reg}</div>
                    <h3 className="font-bold mt-1">{car.title}</h3>
                    <p className="text-sm text-gray-600">{car.subtitle}</p>
                    <div className="text-xl font-bold mt-3">{car.price}</div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-500 mt-3">
                      <div>{car.reg}</div>
                      <div>{car.miles}</div>
                      <div>{car.fuel}</div>
                      <div>{car.auto}</div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedCar(car);
                        setSelectedImage(0);
                        setPage("details");
                      }}
                      className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded font-medium"
                    >
                      View details
                    </button>
                  </div>
                </div>
              ))}

              <div className="bg-[#05c1c8] rounded-lg border overflow-hidden shadow-sm flex flex-col justify-between min-h-[320px] p-5 text-black">
                <div>
                  <div className="text-3xl font-black leading-tight">GET £1,000 MORE THAN PART-EXCHANGE*</div>
                  <div className="mt-5 bg-[#ffd400] inline-block px-3 py-2 font-black text-lg">VALUE MY CAR</div>
                </div>
                <div>
                  <p className="text-sm font-semibold">Our sellers get on average of £1,000 more than part-exchange valuation.</p>
                  <button className="mt-4 w-full bg-black text-white py-3 rounded font-semibold">Get a free valuation</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  function DetailsPage() {
    const car = selectedCar || inventoryCars[0];
    const thumbs = car.images || [car.img];
    const unavailable = car.status !== "live" || car.orderLocked;

    const openCheckout = (mode) => {
      if (unavailable) return;
      setDealerCars((prev) => prev.map((item) => item.id === car.id ? { ...item, orderLocked: true } : item));
      const lockedCar = { ...car, orderLocked: true };
      setSelectedCar(lockedCar);
      setCheckoutVehicle(lockedCar);
      setCheckoutMode(mode);
      setOrderMessage("Vehicle locked for checkout. Additional orders are blocked until payment is completed or the car is relisted by Dealer Admin.");
      setPage("checkout");
    };

    return (
      <div className="bg-[#f5f5f7] min-h-screen">
        <div className="bg-[#111827] text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-wrap gap-6 items-center">
            <button onClick={() => setPage("home")} className="hover:text-[#f7c948]">How it works</button>
            <button onClick={() => setPage("inventory")} className="hover:text-[#f7c948]">Find Vehicles</button>
            <span className="opacity-70">Locations</span>
            <span className="opacity-70">Services & support</span>
            <button onClick={() => setPage("dealer")} className="bg-[#f4b63d] text-black px-4 py-2 rounded font-semibold">Dealer admin</button>
          </div>
        </div>

        <div className="bg-[#f3e2ad] text-[13px] text-[#6d5613] border-b border-[#dcc98c]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 text-right">
            Important payment update: secure online payment and bank transfer options available.
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="text-xs text-gray-500 mb-2">
            Home &gt; Search results &gt; Nissan &gt; {car.reg} {car.title.toUpperCase()} {car.subtitle.toUpperCase()}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h1 className="text-[20px] md:text-[22px] font-bold uppercase tracking-tight">
              {car.reg} {car.title} {car.subtitle}
            </h1>
            <div className="flex items-center gap-3">
              {car.orderLocked && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">Payment pending</span>}
              {car.status === "sold" && <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">Sold</span>}
              <button className="border bg-white px-4 py-2 rounded text-sm">Share</button>
            </div>
          </div>

          <div className="grid xl:grid-cols-[1.05fr_0.95fr] gap-4 items-start">
            <div>
              <div className="bg-white border rounded-xl p-3">
                <div className="relative rounded-lg overflow-hidden border">
                  <img src={thumbs[selectedImage]} alt={car.title} className="w-full h-[420px] object-cover" />
                  <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded">Click image to zoom</div>
                  <button className="absolute bottom-3 left-3 bg-black/60 text-white px-4 py-2 rounded font-semibold text-sm">VIEW ALL</button>
                  <button
                    onClick={() => setSelectedImage((selectedImage + 1) % thumbs.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/85 text-2xl border"
                  >
                    ›
                  </button>
                </div>

                <div className="mt-3 grid grid-cols-4 md:grid-cols-6 gap-2 max-h-[165px] overflow-y-auto pr-1">
                  {thumbs.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`border rounded-md overflow-hidden ${selectedImage === index ? "ring-2 ring-blue-600 border-blue-600" : ""}`}
                    >
                      <img src={img} alt={`thumb-${index}`} className="w-full h-16 object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 bg-white border rounded-xl p-4">
                <h2 className="text-xl font-semibold mb-4">Delivery Quote</h2>
                <div className="flex flex-wrap gap-3 items-center">
                  <input
                    placeholder="Postcode"
                    className="border rounded px-4 py-3 flex-1 min-w-[220px]"
                  />
                  <button className="bg-blue-600 text-white px-6 py-3 rounded font-medium">Calculate</button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl font-bold">Vehicle details</h2>
                  <div className="text-sm text-blue-600 font-semibold">{car.price}</div>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-y-3 text-sm border-t pt-4">
                  {[
                    ["Lot number", car.lot],
                    ["Category", "Used vehicle"],
                    ["Run condition", car.runCondition],
                    ["Odometer", car.odometer],
                    ["Body style", car.body],
                    ["Colour", car.colour],
                    ["Engine type", car.engine],
                    ["Transmission", car.auto],
                    ["Drive", car.drive],
                    ["Fuel", car.fuel],
                    ["Keys", car.keys],
                    ["VAT to be added to final price", car.vat],
                    ["Primary notes", car.damage],
                    ["Registration year", car.reg],
                    ["Listing status", car.status],
                  ].map(([label, value]) => (
                    <>
                      <div className="text-gray-500 border-b pb-3">{label}</div>
                      <div className="font-medium border-b pb-3 text-right">{value}</div>
                    </>
                  ))}
                </div>
              </div>

              <div className="bg-white border rounded-xl p-4">
                <h3 className="text-xl font-semibold mb-3">Reports and services</h3>
                <div className="rounded-lg border p-4 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold">Virtual vehicle viewing</div>
                    <div className="text-sm text-gray-500">Request extra walkaround support before you buy.</div>
                  </div>
                  <button className="text-blue-600 font-medium text-sm">Book now</button>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-4">
                <h3 className="text-xl font-semibold mb-3">Secure this vehicle</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                    <span>Vehicle price</span>
                    <span className="font-semibold text-gray-900">{car.price}</span>
                  </div>
                  <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                    <span>Admin fee</span>
                    <span className="font-semibold text-gray-900">£199</span>
                  </div>
                  <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                    <span>Documentation fee</span>
                    <span className="font-semibold text-gray-900">£79</span>
                  </div>
                  {orderMessage && <div className="rounded-lg bg-blue-50 px-4 py-3 text-blue-700">{orderMessage}</div>}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      disabled={unavailable}
                      onClick={() => openCheckout("secure")}
                      className={`w-full py-3 rounded-lg font-semibold text-base ${unavailable ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "border border-blue-600 text-blue-600 bg-white"}`}
                    >
                      {car.status === "sold" ? "Sold" : car.orderLocked ? "Payment pending" : "Secure now"}
                    </button>
                    <button
                      disabled={unavailable}
                      onClick={() => openCheckout("buy")}
                      className={`w-full py-3 rounded-lg font-semibold text-base ${unavailable ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-[#00c2a8] text-black"}`}
                    >
                      {car.status === "sold" ? "Sold" : car.orderLocked ? "Payment pending" : "Buy now"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  function CheckoutPage() {
    const car = checkoutVehicle || selectedCar || inventoryCars[0];
    if (!car) return null;

    return (
      <div className="min-h-screen bg-[#f5f7fb]">
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-[0.2em]">Dedicated checkout</div>
              <h1 className="text-3xl font-bold mt-2">{checkoutMode === "secure" ? "Secure this vehicle" : "Complete your purchase"}</h1>
              <p className="text-gray-500 mt-2">This checkout page is ready to be linked later to online payment or bank transfer confirmation.</p>
            </div>
            <button onClick={() => setPage("details")} className="border bg-white px-5 py-3 rounded-lg font-medium">Back to vehicle</button>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-5">Customer checkout details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input className="border rounded-lg px-4 py-3" placeholder="First name" />
                <input className="border rounded-lg px-4 py-3" placeholder="Last name" />
                <input className="border rounded-lg px-4 py-3" placeholder="Email address" />
                <input className="border rounded-lg px-4 py-3" placeholder="Phone number" />
                <input className="border rounded-lg px-4 py-3 md:col-span-2" placeholder="Address line 1" />
                <input className="border rounded-lg px-4 py-3 md:col-span-2" placeholder="Address line 2" />
                <input className="border rounded-lg px-4 py-3" placeholder="Town / City" />
                <input className="border rounded-lg px-4 py-3" placeholder="Postcode" />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Preferred payment method</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button className="border-2 border-blue-600 text-blue-600 rounded-xl px-4 py-4 text-left font-semibold bg-blue-50">
                    Card payment
                    <div className="text-sm font-normal text-gray-500 mt-1">Link this later to your payment gateway.</div>
                  </button>
                  <button className="border rounded-xl px-4 py-4 text-left font-semibold bg-white">
                    Bank transfer
                    <div className="text-sm font-normal text-gray-500 mt-1">Link this later to manual payment instructions.</div>
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Delivery and fulfilment</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button className="border rounded-xl px-4 py-4 text-left font-semibold bg-white">Collection
                    <div className="text-sm font-normal text-gray-500 mt-1">Customer collects from your chosen site.</div>
                  </button>
                  <button className="border rounded-xl px-4 py-4 text-left font-semibold bg-white">Delivery request
                    <div className="text-sm font-normal text-gray-500 mt-1">Delivery fee to be confirmed after checkout.</div>
                  </button>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-amber-50 border border-amber-200 px-4 py-4 text-amber-800 text-sm">
                This vehicle is currently locked to this checkout flow, which helps prevent multiple customers from ordering the same vehicle at the same time.
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <button className="border rounded-lg py-3 font-medium">Save and continue later</button>
                <button className="bg-blue-600 text-white rounded-lg py-3 font-semibold">
                  {checkoutMode === "secure" ? "Proceed to secure deposit" : "Proceed to payment"}
                </button>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-white border rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Order summary</h2>
                <div className="flex gap-4">
                  <img src={car.img} alt={car.title} className="h-24 w-32 rounded-xl object-cover border" />
                  <div>
                    <div className="font-bold text-lg">{car.reg} {car.title}</div>
                    <div className="text-gray-500">{car.subtitle}</div>
                    <div className="text-sm text-gray-500 mt-2">{car.miles} • {car.fuel} • {car.auto}</div>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                    <span>Vehicle price</span>
                    <span className="font-semibold">{car.price}</span>
                  </div>
                  <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                    <span>Admin fee</span>
                    <span className="font-semibold">£199</span>
                  </div>
                  <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                    <span>Documentation fee</span>
                    <span className="font-semibold">£79</span>
                  </div>
                  <div className="flex items-center justify-between border rounded-lg px-4 py-3 bg-gray-50 font-semibold">
                    <span>{checkoutMode === "secure" ? "Secure today" : "Estimated total"}</span>
                    <span>{checkoutMode === "secure" ? "£499 deposit" : car.price}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What happens next</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="rounded-lg border px-4 py-3">1. Customer submits checkout details</div>
                  <div className="rounded-lg border px-4 py-3">2. Payment or bank transfer is completed using your future linked method</div>
                  <div className="rounded-lg border px-4 py-3">3. Dealer admin marks the vehicle paid and removes it from sale</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  function DealerPage() {
    const liveCount = dealerCars.filter((car) => car.status === "live").length;
    const soldCount = dealerCars.filter((car) => car.status === "sold").length;
    const pendingCount = dealerCars.filter((car) => car.orderLocked && car.status === "live").length;

    const handleAddVehicle = () => {
      if (!dealerForm.title || !dealerForm.price || !dealerForm.reg) return;
      const newCar = {
        id: Date.now(),
        ...dealerForm,
        img: dealerForm.img || "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200",
        soldAt: null,
        orderLocked: false,
        images: [
          dealerForm.img || "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200",
        ],
      };
      setDealerCars((prev) => [newCar, ...prev]);
      setDealerForm({
        title: "",
        subtitle: "",
        price: "",
        reg: "",
        miles: "",
        fuel: "Petrol",
        auto: "Manual",
        badge: "Just added",
        img: "",
        body: "SUV",
        lot: "",
        runCondition: "Runs and drives",
        odometer: "",
        colour: "",
        engine: "",
        drive: "2WD",
        vat: "Included in final price",
        keys: "Yes",
        damage: "",
        status: "live",
      });
    };

    const markSold = (id) => {
      setDealerCars((prev) => prev.map((car) => car.id === id ? { ...car, status: "sold", orderLocked: true, soldAt: "Paid" } : car));
      if (selectedCar?.id === id) {
        const car = dealerCars.find((item) => item.id === id);
        if (car) setSelectedCar({ ...car, status: "sold", orderLocked: true, soldAt: "Paid" });
      }
    };

    const relistVehicle = (id) => {
      setDealerCars((prev) => prev.map((car) => car.id === id ? { ...car, status: "live", orderLocked: false, soldAt: null } : car));
      if (selectedCar?.id === id) {
        const car = dealerCars.find((item) => item.id === id);
        if (car) setSelectedCar({ ...car, status: "live", orderLocked: false, soldAt: null });
      }
    };

    const removeVehicle = (id) => {
      setDealerCars((prev) => prev.filter((car) => car.id !== id));
      if (selectedCar?.id === id) {
        setSelectedCar(null);
        setPage("inventory");
      }
    };

    return (
      <div className="min-h-screen bg-[#f5f7fb]">
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-[0.2em]">Dealer backend</div>
              <h1 className="text-3xl font-bold mt-2">Manage sourced vehicles</h1>
              <p className="text-gray-500 mt-2">Upload listings, lock paid vehicles, relist stock, and stop multiple orders on the same car.</p>
            </div>
            <button onClick={() => setPage("inventory")} className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium">View live inventory</button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border rounded-2xl p-5">
              <div className="text-sm text-gray-500">Live vehicles</div>
              <div className="text-3xl font-bold mt-2">{liveCount}</div>
            </div>
            <div className="bg-white border rounded-2xl p-5">
              <div className="text-sm text-gray-500">Payment pending</div>
              <div className="text-3xl font-bold mt-2">{pendingCount}</div>
            </div>
            <div className="bg-white border rounded-2xl p-5">
              <div className="text-sm text-gray-500">Sold / removed from sale</div>
              <div className="text-3xl font-bold mt-2">{soldCount}</div>
            </div>
          </div>

          <div className="grid xl:grid-cols-[420px_1fr] gap-6 items-start">
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-5">Upload sourced vehicle</h2>
              <div className="grid gap-4">
                {[
                  ["Vehicle title", "title"],
                  ["Variant / subtitle", "subtitle"],
                  ["Price", "price"],
                  ["Registration year", "reg"],
                  ["Mileage", "miles"],
                  ["Main image URL", "img"],
                  ["Lot number", "lot"],
                  ["Odometer", "odometer"],
                  ["Colour", "colour"],
                  ["Engine", "engine"],
                  ["Damage / condition notes", "damage"],
                ].map(([label, field]) => (
                  <div key={field}>
                    <div className="text-sm font-medium mb-1">{label}</div>
                    <input
                      value={dealerForm[field]}
                      onChange={(e) => setDealerForm((prev) => ({ ...prev, [field]: e.target.value }))}
                      className="w-full border rounded-lg px-4 py-3"
                    />
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["Fuel", "fuel", ["Petrol", "Diesel", "Hybrid", "Electric"]],
                    ["Transmission", "auto", ["Manual", "Automatic"]],
                    ["Body", "body", ["SUV", "Hatchback", "Saloon", "Coupe", "Van"]],
                    ["Drive", "drive", ["2WD", "4WD", "AWD"]],
                  ].map(([label, field, options]) => (
                    <div key={field}>
                      <div className="text-sm font-medium mb-1">{label}</div>
                      <select
                        value={dealerForm[field]}
                        onChange={(e) => setDealerForm((prev) => ({ ...prev, [field]: e.target.value }))}
                        className="w-full border rounded-lg px-4 py-3"
                      >
                        {options.map((option) => <option key={option}>{option}</option>)}
                      </select>
                    </div>
                  ))}
                </div>

                <button onClick={handleAddVehicle} className="bg-blue-600 text-white py-3 rounded-lg font-semibold">Upload to live inventory</button>
              </div>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-5">
                <h2 className="text-2xl font-bold">Stock control</h2>
                <div className="text-sm text-gray-500">Live vehicles instantly feed the inventory page.</div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-3 pr-4">Vehicle</th>
                      <th className="pb-3 pr-4">Price</th>
                      <th className="pb-3 pr-4">Status</th>
                      <th className="pb-3 pr-4">Order lock</th>
                      <th className="pb-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dealerCars.map((car) => (
                      <tr key={car.id} className="border-b align-top">
                        <td className="py-4 pr-4">
                          <div className="flex gap-3">
                            <img src={car.img} alt={car.title} className="h-14 w-20 rounded object-cover border" />
                            <div>
                              <div className="font-semibold">{car.reg} {car.title}</div>
                              <div className="text-gray-500">{car.subtitle}</div>
                              <div className="text-xs text-gray-400 mt-1">Lot {car.lot || "—"}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 pr-4 font-semibold">{car.price}</td>
                        <td className="py-4 pr-4">
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${car.status === "sold" ? "bg-rose-100 text-rose-700" : "bg-emerald-100 text-emerald-700"}`}>
                            {car.status}
                          </span>
                        </td>
                        <td className="py-4 pr-4">
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${car.orderLocked ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-700"}`}>
                            {car.orderLocked ? "Locked" : "Open"}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() => {
                                setSelectedCar(car);
                                setSelectedImage(0);
                                setPage("details");
                              }}
                              className="border px-3 py-2 rounded-lg"
                            >
                              Preview
                            </button>
                            <button
                              onClick={() => markSold(car.id)}
                              className="bg-black text-white px-3 py-2 rounded-lg"
                            >
                              Mark paid
                            </button>
                            <button
                              onClick={() => relistVehicle(car.id)}
                              className="border px-3 py-2 rounded-lg"
                            >
                              Relist
                            </button>
                            <button
                              onClick={() => removeVehicle(car.id)}
                              className="border border-rose-200 text-rose-600 px-3 py-2 rounded-lg"
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {page === "home" ? <HomePage /> : page === "inventory" ? <InventoryPage /> : page === "dealer" ? <DealerPage /> : page === "checkout" ? <CheckoutPage /> : <DetailsPage />}
    </div>
  );
}

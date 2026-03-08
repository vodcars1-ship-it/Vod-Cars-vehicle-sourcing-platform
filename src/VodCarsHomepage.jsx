import React from "react";

export default function VodCarsHomepage() {
  const vehicles = [
    { name: "BMW 3 Series", price: "£12,995" },
    { name: "Audi A4", price: "£13,450" },
    { name: "Mercedes C Class", price: "£14,200" },
    { name: "Volkswagen Golf", price: "£9,995" }
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "40px" }}>
      
      <h1>VOD Cars</h1>
      <p>We source the right vehicle for you.</p>

      <h2 style={{ marginTop: "40px" }}>Featured Vehicles</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {vehicles.map((car, i) => (
          <div key={i} style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "8px"
          }}>
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            <button>View Vehicle</button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "60px" }}>Source a Vehicle</h2>

      <form style={{ maxWidth: "400px", marginTop: "20px" }}>
        <input placeholder="Make" style={{ width: "100%", marginBottom: "10px", padding: "10px" }} />
        <input placeholder="Model" style={{ width: "100%", marginBottom: "10px", padding: "10px" }} />
        <input placeholder="Budget" style={{ width: "100%", marginBottom: "10px", padding: "10px" }} />
        <button style={{ padding: "10px 20px" }}>Submit Request</button>
      </form>

    </div>
  );
}

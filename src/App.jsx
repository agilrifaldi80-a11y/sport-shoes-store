import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Nike Air Zoom",
      price: "Rp 1.899.000",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: "Rp 2.199.000",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
    },
    {
      id: 3,
      name: "Puma Velocity",
      price: "Rp 1.499.000",
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500",
    },
    {
      id: 4,
      name: "New Balance 1080",
      price: "Rp 2.499.000",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
    },
  ];

  return (
    <>
      <nav className="navbar">
        <h2>🏃 Sport Shoes Store</h2>
      </nav>

      <section className="hero">
        <h1>Sport Shoes Collection 2026</h1>
        <p>
          Temukan sepatu olahraga terbaik dengan kualitas premium dan harga
          terbaik.
        </p>
      </section>

      <div className="container">
        <h2>Produk Terlaris</h2>

        <div className="products">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="card-body">
                <h3>{item.name}</h3>
                <p>{item.price}</p>

                <button>Beli Sekarang</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
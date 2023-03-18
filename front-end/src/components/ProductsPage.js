// import React, {useState,useEffect} from 'react'
// import axios from 'axios'
// function ProductsPage() {
//     const [products,setProducts]=useState([]);
//     useEffect(() => {
//       fetchProducts();
//   }, [])
//   const fetchProducts = async () => {
//       await axios.get('http://127.0.0.1:8000/api/products').then(({ data }) => {setProducts(data)}) 
//   }
//   return (
//         <div>
//           <div className="container">
//   <div className="row">
//     {products.map((row, key) => (
//       <div className="col-md-4 mb-3" key={key}>
//         <div className="card">
//           <img className="card-img-top" src={`http://127.0.0.1:8000/storage/product/image/${row.image}`} alt={row.title} />
//           <div className="card-body">
//             <h5 className="card-title">{row.title}</h5>
//             <p className="card-text">{row.description}</p>
//             <p className="card-text">{row.prix}</p>
//             <p className="card-text">{row.genre}</p>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//         </div>
//   )
// }

// export default ProductsPage










import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios.get('http://127.0.0.1:8000/api/products').then(({ data }) => {
      setProducts(data);
    });
  };

  const handleSearch = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.prix.toString().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleClearSearch = () => {
    fetchProducts();
    setSearchQuery('');
  };

  return (
    <div>
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
                Search
              </button>
              <button className="btn btn-outline-secondary" type="button" onClick={handleClearSearch}>
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((row, key) => (
            <div className="col-md-4 mb-3" key={key}>
              <div className="card">
                <img className="card-img-top" src={`http://127.0.0.1:8000/storage/product/image/${row.image}`} alt={row.title} />
                <div className="card-body">
                  <h5 className="card-title text-center">{row.title}</h5>
                  <p className="card-text text-center" >{row.description}</p>
                  <p className="card-text text-center">{row.prix}</p>
                  <p className="card-text text-center">{row.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,Navigate} from "react-router-dom";

export default function ProductList() {
  // const navigate = useNavigate();
    

    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        await axios.get('http://127.0.0.1:8000/api/products').then(({ data }) => {setProducts(data)}) 
    }

    const deleteProduct = async (id) => {
        await axios.delete('http://127.0.0.1:8000/api/products/' + id)
            .then(({ data }) => {
                console.log(data.message)
                fetchProducts();
            }).catch(({ response: { data } }) => {
                console.log(data.message)
            })
    }
    const SupStagiaire = (id) => {
        if (window.confirm(`are you sure that you want to delete this stagiaire?`)) {
            deleteProduct(id);
            Navigate('/')
        }
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

    

  // const handleLogout = () => {
  //   props.logout();
  //   navigate('/HomePage');
  // };

 

    return (


        <div>
 <div className="App bg-dark">
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
        
          <Link to={"/list.component"} className="navbar-brand btn" >Home</Link>
          <div align='left'>
          <Link to={"/ProductsPage"}   className="navbar-brand btn" >LogOut</Link>
          {/* <button onClick={handleLogout}>Logout</button> */}
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      </div>

            <div className="container">
  <div className="row">
    <div className="col-md-12">
      <h1>Products</h1>
      <hr />
      <Link className="btn btn-primary mb-2 float-end" to={"/product/create"}>
        Create
      </Link>

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

      <table className="table table-hover">
        <thead>
          <tr className="bs-dark-rgb">
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Genre</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.prix}</td>
                <td>{product.genre}</td>
                <td>
                  <img
                    src={`http://127.0.0.1:8000/storage/product/image/${product.image}`}
                    alt={product.title}
                    width="100px"
                  />
                </td>
                <td>
                  <Link
                    className="btn btn-sm btn-success"
                    to={`/product/edit/${product.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ml-2"
                    onClick={() => SupStagiaire(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No products found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>

        </div>















        // <div className="container ">
        //     <div className="row">
        //         <div className="conl-12">
               
                
     
   
        //             <div className="col-12">
                     

        //                 <table className="table table-success">
        //                     <thead>
        //                         <tr> 
        //                         <th scope="col">#id</th>
        //                             <th scope="col">Title</th>
        //                             <th scope="col">Description</th>
        //                             <th scope="col">Prix</th>
        //                             <th scope="col">Genre</th>
        //                             <th scope="col">Image</th>
        //                             <th scope="col">Action</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {
        //                             products.length > 0 && (
        //                                 products.map((row,key)=>(
        //                                     <tr key={key}> 
        //                                          <td>{row.id}</td>
        //                                         <td>{row.title}</td>
        //                                         <td>{row.description}</td>
        //                                         <td>{row.prix}</td>
        //                                         <td>{row.genre}</td>
        //                                         <td>
        //                                             <img width="100px" src={`http://127.0.0.1:8000/storage/product/image/${row.image }`} /> 
        //                                         </td>
        //                                         <td>
        //                                             <Link className="btn btn-primary mb-2 float-end" to={"/product/create"}>Create</Link>
        //                                             </td>
        //                                         <td>
        //                                             <Link className="btn btn-success mb-2 float-end" to={`/product/edit/${row.id}`}>Edit</Link>
        //                                         </td>
        //                                         <td>
        //                                             <button className="btn btn-danger" onClick={() => SupStagiaire(row.id)}>  Delete</button>
        //                                             </td>
                                                    
        //                                     </tr> 
        //                                 ))
        //                             )
        //                         }
                               
        //                     </tbody>
        //                 </table>



        //             </div>
        //         </div>

        //     </div>

        // </div>
    )




}
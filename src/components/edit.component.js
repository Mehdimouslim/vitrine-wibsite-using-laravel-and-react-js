import React, { useState ,useEffect} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import { Link,useNavigate} from "react-router-dom";
export default function EditProduct() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const [genre, setGenre] = useState('')
    const [image, setImage] = useState(null)

    useEffect(()=>{
        fetchProduct();
    },[])

    const fetchProduct = async() =>{
        await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
            .then(({ data }) => {
                const { title, description,prix,genre } = data.product
                setTitle(title)
                setDescription(description)
                setGenre(genre)
                setPrix(prix)
            }).catch(({ response: {data} }) => {
                console.log(data.message)
            })
    }

    const changeHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'PATCH')
        formData.append('title', title)
        formData.append('description', description)
        formData.append('prix', prix)
        formData.append('genre', genre)
        if (image !== null) {
            formData.append('image', image)
        }
        

        await axios.post('http://127.0.0.1:8000/api/products/' + id, formData)
            .then(({ data }) => {
                console.log(data.message)
                navigate('/list.component')
            }).catch(({ response }) => {
                if (response.status == 422) {
                    console.log(response.data.errors)
                } else {
                    console.log(response.data.message)
                }
            })
    }

    return (
        <div className="container">
             <div className="App bg-dark">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
        
          <Link to={"/list.component"} className="navbar-brand btn" >Update</Link>
          <div align='left'>
          
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      </div>
            <div className="row justify-content-center">
                <div className="conl-12 col-sm-12 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title"> Edit Product</h3>
                            <hr></hr>
                            <div className="from-wrapper">

                                <form onSubmit={updateProduct}>

                                    <div className="mb-3">
                                        <label className="form-label">Title  </label>
                                        <input type="text" className="form-control"
                                            value={title}
                                            onChange={(e) => { setTitle(e.target.value) }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Prix  </label>
                                        <input type="text" className="form-control" 
                                        value={prix}
                                        onChange={(e)=>{setPrix(e.target.value)}}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Genre  </label>
                                        <input type="text" className="form-control" 
                                        value={genre}
                                        onChange={(e)=>{setGenre(e.target.value)}}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Descreption</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                            value={description}
                                            onChange={(e) => { setDescription(e.target.value) }}
                                        ></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">image  </label>
                                        <input type="file" className="form-control"

                                            onChange={changeHandler}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary mb-3">  Update</button>
                                    </div>

                                </form>



                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    )




}
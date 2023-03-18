import React from 'react'
import '../App.css'
function Add() {
  return (
    <>
    <div>
        <div className="card">
    <div className="card-header">Edit Student</div>
    <div className="card-body"></div>
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">description</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </div>
    </>
  )
}

export default Add
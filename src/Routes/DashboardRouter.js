import app from '../firebase';
import React, { useEffect, useState } from 'react';
import '../App.css';
import { MDBBtn, MDBCol, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCardText } from 'mdbreact';
import { createBinder, getAllBinders } from './Helpers/Dashboard'
import { Redirect } from 'react-router-dom';

const DashboardRouter = () => {

  const [binders, setBinders] = useState([])
  const [modal, setModal] = useState(false)
  const [name, setName] = useState("")

  useEffect(() => {
    getAllBinders().then(binders => {
      setBinders(binders)
      console.log(binders);
    }).catch(err => {
      console.log(err);
    })
  }, [])


  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleCreateBinder = (name) => {
    createBinder(name).then((binder) => {
      console.log(binder);
      setModal(!modal)
      setBinders([...binders, binder])
    })
  }

  const toggle = () => {
    setModal(!modal)
  }

  const Modal = () => {
    return (
      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>Create a new Binder</MDBModalHeader>
        <MDBModalBody>
          <label
            htmlFor="defaultFormCardNameEx"
            className="grey-text font-weight-light"
          >
            Binder name
          </label>
          <input
            type="text"
            id="defaultFormCardNameEx"
            className="form-control"
            value={name}
            onChange={handleNameChange} />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="success" onClick={() => handleCreateBinder(name)}>Create</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    )
  }

  const goToBinder = (id) => {
    window.localStorage.setItem('binder', id)
    window.location.assign("/binder")
  }

  const deleteBinder = (id) => {
    console.log(id);
  }

  const handleLogout = () => {
    app.auth().signOut()
    window.localStorage.removeItem('user')
    window.location.replace("/")
  }

  const Binders = () => {
    return binders.map((binder, index) => {
      return (
        <div key={index}>
          <MDBCard style={{ width: "15rem", height: "15rem", margin: "15px" }}  onClick={() => goToBinder(binder._id)}>
            <MDBCardImage className="img-fluid" src="https://picsum.photos/640/460" waves />
            <MDBCardBody>
              <MDBCardTitle>{binder.name}</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      )
    })
  }


  return (
    <div className="dashboard-container">
      <div style={{ width: "100vw", height: "90vh", padding: "18px", background: "none" }}>
        <div className="row">
          <div className="col-md-10">
            <h3><b>Dashboard</b></h3>
          </div>
          <div className="col-md-2">
            <MDBBtn onClick={toggle} color="success">
              <MDBIcon icon="magic" className="mr-1" /> New
              </MDBBtn>
          </div>
        </div>
        <div className="row p-4">
          {Binders()}
        </div>
      </div>
      {Modal()}
    </div>
  )
}

export default DashboardRouter;
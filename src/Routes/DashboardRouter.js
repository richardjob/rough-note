import app from '../firebase';
import React, { useState } from 'react';
import '../App.css';
import { MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCard, MDBCardImage,MDBCardBody, MDBCardTitle } from 'mdbreact';

const DashboardRouter = ({setBinder}) => {

  const [modal, setModal] = useState(false)

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
            className="form-control" />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="success">Create</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    )
  }

  const goToBinder= (id) =>{
    console.log(id);
  }

  const handleLogout = () => {
    app.auth().signOut()
    window.localStorage.removeItem('user')
    window.location.replace("/")
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
            <MDBCard onClick={()=>goToBinder(123)} style={{ width: "15rem", height: "15rem", margin: "15px" }}>
              <MDBCardImage className="img-fluid" src="https://picsum.photos/640/360" waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "15rem", height: "15rem", margin: "15px" }}>
              <MDBCardImage className="img-fluid" src="https://picsum.photos/640/360" waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "15rem", height: "15rem", margin: "15px" }}>
              <MDBCardImage className="img-fluid" src="https://picsum.photos/640/360" waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "15rem", height: "15rem", margin: "15px" }}>
              <MDBCardImage className="img-fluid" src="https://picsum.photos/640/360" waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "15rem", height: "15rem", margin: "15px" }}>
              <MDBCardImage className="img-fluid" src="https://picsum.photos/640/360" waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ width: "15rem", height: "15rem", margin: "15px" }}>
              <MDBCardImage className="img-fluid" src="https://picsum.photos/640/360" waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
            
          </div>
        </div>
        {Modal()}
      </div>
  )
}

export default DashboardRouter;
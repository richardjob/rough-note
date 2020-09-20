import React, { useEffect, useState } from 'react';
import '../App.css';
import { MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCard, MDBCardImage,MDBCardBody, MDBCardTitle } from 'mdbreact';

const BinderRouter = ({binder}) => {

    console.log(binder);


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


  return (
      <div className="dashboard-container">
        <div style={{ width: "100vw", height: "90vh", padding: "18px", background: "none" }}>
          <div className="row">
            <div className="col-md-10">
              <h3><b>{binder.name}</b></h3>
            </div>
            <div className="col-md-2">
              <MDBBtn onClick={toggle} color="success">
                <MDBIcon icon="save" className="mr-1" /> Save
              </MDBBtn>
            </div>
          </div>
          <div className="row p-4">
            
            
          </div>
        </div>
        {Modal()}
      </div>
  )
}

export default BinderRouter;
import React, { useEffect, useState } from 'react';
import '../App.css';
import { MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCard, MDBCardImage,MDBCardBody, MDBCardTitle } from 'mdbreact';
import { getBinder } from './Helpers/Dashboard';

const BinderRouter = () => {

  const binderID = window.localStorage.getItem('binder')
  const [modal, setModal] = useState(false)
  const [binder, setBinder] = useState({})

  useEffect(()=>{
    getBinder(binderID).then(b=>{
      setBinder(b)
    })
  },[])

  const toggle = () => {
    setModal(!modal)
  }

  const Modal = () => {
    return (
      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>Save Binder</MDBModalHeader>
        <MDBModalFooter>
        <MDBBtn color="default">Cancel</MDBBtn>
          <MDBBtn color="success">Save</MDBBtn>
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
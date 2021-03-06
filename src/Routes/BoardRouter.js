import app  from '../firebase';
import React, { useState } from 'react';
import '../App.css';
import DrawingBoard from 'react-drawing-board';
import { MDBCard } from 'mdbreact';

const BoardRouter = ({user}) => {

    const handleLogout = () => {
        app.auth().signOut()
        window.localStorage.removeItem('user')
        window.location.replace("/")
    }

    const Board = () => {
        const [operations, setOperations] = useState();
       
        return (
          <DrawingBoard
            userId="user1" // identify for different players.
            operations={operations}
            onChange={(newOperation, afterOperation) => {
              console.log(`TODO: send ${newOperation}`);
              setOperations(afterOperation);
            }}
            onSave={()=>{console.log('Save');}}
            style={{width: "100%",height: "100%"}}
            toolbarPlacement="top"
          />
        )
      }

    return (
      <div className="background">
      <div className="auth-container">
          <MDBCard style={{ width: "85vw", height: "83vh", padding: "18px" }}>
            <Board />
          </MDBCard>
      </div>
  </div>
    )
}

export default BoardRouter;
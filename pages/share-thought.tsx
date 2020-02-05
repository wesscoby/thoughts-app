import { useState } from 'react';
import Router from "next/router";
import { MDBContainer, MDBIcon, MDBBtn, MDBInput } from 'mdbreact';

export default function ShareThought() {
  const [message, setMessage] = useState("");

  async function submit(event: any) {
    event.preventDefault();
    await fetch("/api/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    });
    Router.push("/");
  }

  return (
    <MDBContainer>
      <form>
        <MDBInput 
          label="What's on your mind?" 
          icon="comment" group 
          type="text" 
          name="message" 
          onChange={(e: any) => setMessage(e.target.value)}
          className="text-light"
        />
        <MDBBtn size="sm" color="primary" type="submit" onClick={submit}>
          <MDBIcon far icon="share-square" /> Share
        </MDBBtn>
      </form>
    </MDBContainer>
  );
}
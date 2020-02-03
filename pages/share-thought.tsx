import { useState } from 'react';
import Router from "next/router";
import { Container, Form, Button, FormGroup, Label, Input } from 'reactstrap';

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
    <Container>
      <Form onSubmit={submit}>
        <FormGroup>
          <Label for="message" className="text-light">What is on your mind?</Label>
          <Input
            type="text"
            name="message"
            id="message"
            placeholder="Say something"
            onChange={(e: any) => setMessage(e.target.value)}
            value={message}
          />
        </FormGroup>
        <Button color="dark" type="submit">
          Share
        </Button>
      </Form>
    </Container>
  );
}
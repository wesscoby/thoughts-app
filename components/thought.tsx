import {
  MDBCard, MDBCardBody, 
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
} from 'mdbreact';

export default function Thought({ thought }: any) {

  return (
    <MDBCard className="mb-4">
      <MDBCardBody>
        <MDBCardTitle>{thought.message}</MDBCardTitle>
        <MDBCardText><MDBIcon icon="comment" /> {thought.author}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
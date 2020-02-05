import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';

import { Thought } from "./";


export default function Thoughts(props: any) {
  return (
    <MDBRow>
      <MDBCol className="mb-3">
        <h2 className="text-light">
          <MDBIcon icon="retweet" /> Latest Thoughts
        </h2>
      </MDBCol>
      <MDBRow>
      {props.thoughts &&
        props.thoughts.map((thought: any) => (
          <MDBCol key={thought._id} size="3">
            <Thought thought={thought} />
          </MDBCol>
        ))}
      {!props.thoughts && <MDBCol>Loading...</MDBCol>}
      </MDBRow>
    </MDBRow>
  );
}
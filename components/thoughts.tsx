import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';

import { Thought } from "./";


export default function Thoughts(props: any) {
  return (
    <MDBRow>
      <MDBCol size="12" className="mb-3">
        <h2 className="text-light">
          <MDBIcon icon="retweet" /> Latest Thoughts
        </h2>
      </MDBCol>
      <MDBCol size="12">
        <MDBRow>
          {props.thoughts &&
            props.thoughts.map((thought: any) => (
              <MDBCol key={thought._id} xs="12" sm="6" md="4" lg="3">
                <Thought thought={thought} />
              </MDBCol>
            ))}
          {!props.thoughts && <MDBCol>Loading...</MDBCol>}
        </MDBRow>
      </MDBCol>
    </MDBRow>
  );
}
import { Row, Col } from 'reactstrap';

import { Thought } from "./";


export default function Thoughts(props: any) {
  return (
    <Row>
      <Col xs={12}>
        <h2>Latest Thoughts</h2>
      </Col>
      {props.thoughts &&
        props.thoughts.map((thought: any) => (
          <Col key={thought._id} xs={12} sm={6} md={4} lg={3}>
            <Thought thought={thought} />
          </Col>
        ))}
      {!props.thoughts && <Col xs={12}>Loading...</Col>}
    </Row>
  );
}
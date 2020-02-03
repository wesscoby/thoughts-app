import {
  Card, CardBody, CardTitle, 
  CardText
} from 'reactstrap';

export default function Thought({ thought }: any) {

  return (
    <Card>
      <CardBody>
        <CardTitle>{thought.message}</CardTitle>
        <CardText>by {thought.author}</CardText>
      </CardBody>
    </Card>
  );
}
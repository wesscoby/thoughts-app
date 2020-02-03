import fetch from 'isomorphic-unfetch';
import { Container } from 'reactstrap';

import { Thoughts } from '../components';

function Index(props: any) {
  return (
    <Container>
      <Thoughts thoughts={props.thoughts} />
    </Container>
  );
}

Index.getInitialProps = async ({ req }: any) => {
  const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
  const res = await fetch(`${baseURL}/api/thoughts`);
  return {
    thoughts: await res.json()
  };
};

export default Index;
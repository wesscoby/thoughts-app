import fetch from 'isomorphic-unfetch';
import { MDBContainer } from 'mdbreact';

import { Thoughts } from '../components';

function Index(props: any) {
  return (
    <MDBContainer>
      <Thoughts thoughts={props.thoughts} />
    </MDBContainer>
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
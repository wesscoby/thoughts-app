import React from "react";
import App from "next/app";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron } from 'reactstrap';

import { Navbar } from '../components';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps: any = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (ctx.req && ctx.req.session.passport) {
      pageProps.user = ctx.req.session.passport.user;
    }
    return { pageProps };
  }

  state = {
    user: this.props.pageProps.user
  };

  render() {
    const { Component, pageProps } = this.props;

    const props = {
      ...pageProps,
      user: this.state.user,
    };

    return (
      <>
        <Head>
          <title>Thoughts!</title>
        </Head>
        <Navbar user={this.state.user} />
        <Container>
          <Jumbotron className="bg-secondary">
            <Component {...props} />
          </Jumbotron>
        </Container>
      </>
    );
  }
}

export default MyApp;
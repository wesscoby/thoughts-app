import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from 'next/router';
import NProgress from 'nprogress';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron } from 'reactstrap';

import { Navbar } from '../components';


// NProgress setup
Router.events.on ('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
          <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
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
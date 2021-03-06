// Copyright The Linux Foundation and each contributor to CommunityBridge.
// SPDX-License-Identifier: MIT

import App, { Container } from 'next/app';
import React from 'react';
import '../styles/styles.scss';


class MyApp extends App {
  static async getInitialProps({ Component, req, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps}/>
      </Container>
    )
  }
}

export default MyApp;
import React from 'react'
import { Container } from 'react-bootstrap'

import Header from './Header'
import Main from './Main'

const App = () => {

  // this hides StrictMode Error from antd uploader
  // details: https://github.com/ant-design/ant-design/issues/26136
  console.error = (errObj, ...args) => {
    if (
      process.env.NODE_ENV === "development" &&
      typeof errObj.message === "string" &&
      args.includes("findDOMNode")
    ) {
      return;
    }
    consoleError(errObj, ...args);
  };

  return (
    <div>
      <Container>
        <Header />
        <Main />
      </Container>
    </div>
  )
}

export default App;

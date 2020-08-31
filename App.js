import Amplify from 'aws-amplify'
import config from './aws-exports'
import { Authenticator, VerifyContact } from 'aws-amplify-react-native'
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
})

import { SignIn, SignUp } from './screens/Authentication'
import App from './nested'
import React, { Component } from 'react'

export default class AppWithAuth extends Component {
  handleAuthStateChange(state) {
    // console.log(state)
  }
  render() {
    return (
      <Authenticator hideDefault={true} onStateChange={this.handleAuthStateChange}>
        <SignIn override={'SignIn'} />
        <SignUp override={'SignUp'} />
        <VerifyContact />
        <App />
      </Authenticator>
    )
  }
}

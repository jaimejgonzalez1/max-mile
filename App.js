import Amplify from 'aws-amplify'
import config from './aws-exports'
import { Authenticator } from 'aws-amplify-react-native'
Amplify.configure(config)

import { SignIn, SignUp } from './screens/Authentication'
import App from './nested'
import React, { Component } from 'react'

export default class AppWithAuth extends Component {
  handleAuthStateChange(state) {
    if (state === 'signedIn') {
      /* Do something when the user has signed-in */
    }
  }
  render() {
    return (
      <Authenticator hideDefault={true} onStateChange={this.handleAuthStateChange}>
        <SignIn override={'SignIn'} />
        <SignUp override={'SignUp'} />
        <App />
      </Authenticator>
    )
  }
}

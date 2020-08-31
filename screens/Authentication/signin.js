import React from 'react'
import { Dimensions, StyleSheet, Image, View } from 'react-native'
import { Block, Button, Input, Text } from 'galio-framework'
import { Images, argonTheme } from '../../constants'
import { SignIn } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify'

const { width, height } = Dimensions.get('screen')

export default class customSignIn extends SignIn {
  constructor(props) {
    super(props)
    this.gotoSignIn = this.gotoSignIn.bind(this)
  }
  state = {
    phoneNumber: '+1',
    password: null,
  }

  gotoSignIn() {
    this.props.onStateChange('signIn', {})
  }
  goToSignUp() {
    this.props.onStateChange('signUp', {})
  }

  async signIn() {
    try {
      // TODO: Add in country code
      const user = await Auth.signIn(this.state.phoneNumber, this.state.password)
      if (user) this.props.onStateChange('signedIn', {})
    } catch (error) {
      console.log('***************************************')
      console.log('error signing in', error)
    }
  }

  render() {
    return (
      <View>
        {this.props.authState === 'signIn' && (
          <Block flex middle center space='evenly' style={styles.profileContainer}>
            <Image source={Images.ProfilePicture} style={styles.avatar} />
            <Input
              bgColor='#000000'
              color={argonTheme.COLORS.PRIMARY}
              style={{ borderColor: argonTheme.COLORS.PRIMARY, marginBottom: -30 }}
              placeholderTextColor={argonTheme.COLORS.PRIMARY}
              placeholder='Phone Number'
              type='numeric'
              onChangeText={(text) => this.setState({ phoneNumber: text })}
              value={this.state.phoneNumber}
              rounded
            />
            <Input
              bgColor='#000000'
              color={argonTheme.COLORS.PRIMARY}
              style={{ borderColor: argonTheme.COLORS.PRIMARY }}
              placeholderTextColor={argonTheme.COLORS.PRIMARY}
              placeholder='Password'
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
              password
              viewPass
              rounded
            />
            <Button onPress={() => this.signIn()} round size='small' color={argonTheme.COLORS.PRIMARY}>
              Sign In
            </Button>
            <Text onPress={() => this.goToSignUp()} styles={{ marginTop: 30 }} color={argonTheme.COLORS.SECONDARY}>
              New Account? Sign Up
            </Text>
          </Block>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    width: width,
    height: height,
    marginTop: -(height * 0.1),
    marginBottom: -(height * 0.1),
    backgroundColor: '#000000',
    padding: height * 0.05,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 0,
    marginBottom: 20,
  },
})

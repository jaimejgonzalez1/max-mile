import React, { Component } from 'react'
import { Dimensions, StyleSheet, Image, View } from 'react-native'
import { Block, Button, Input, Text } from 'galio-framework'
import { Images, argonTheme } from '../../constants'

const { width, height } = Dimensions.get('screen')
export default class SignUp extends Component {
  constructor() {
    super()
    this.gotoSignIn = this.gotoSignIn.bind(this)
  }

  gotoSignIn() {
    this.props.onStateChange('signIn', {})
  }
  goToSignUp() {
    this.props.onStateChange('signUp', {})
  }
  signUp() {}

  render() {
    return (
      <View>
        {this.props.authState === 'signUp' && (
          <Block flex middle center space='evenly' style={styles.profileContainer}>
            <Image source={Images.ProfilePicture} style={styles.avatar} />
            <Input
              bgColor='#000000'
              color={argonTheme.COLORS.PRIMARY}
              style={{ borderColor: argonTheme.COLORS.PRIMARY, marginBottom: -30 }}
              placeholderTextColor={argonTheme.COLORS.PRIMARY}
              placeholder='Phone Number'
              type='numeric'
              rounded
            />
            <Input
              bgColor='#000000'
              color={argonTheme.COLORS.PRIMARY}
              style={{ borderColor: argonTheme.COLORS.PRIMARY }}
              placeholderTextColor={argonTheme.COLORS.PRIMARY}
              placeholder='Create a Password'
              password
              viewPass
              rounded
            />
            <Button onPress={() => this.signUp()} round size='small' color={argonTheme.COLORS.PRIMARY}>
              Sign Up
            </Button>
            <Text onPress={() => this.gotoSignIn()} styles={{ marginTop: 30 }} color={argonTheme.COLORS.SECONDARY}>
              Already have an account? Sign In
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
    backgroundColor: '#000000',
    padding: height * 0.05,
    marginTop: -(height * 0.1),
    marginBottom: -(height * 0.1),
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 0,
    marginBottom: 20,
  },
})

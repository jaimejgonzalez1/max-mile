import React from 'react'
import { StyleSheet, Dimensions, ScrollView, Image } from 'react-native'
import { Block, Button, Text, theme, Checkbox } from 'galio-framework'

import { Input } from '../components'
import { Images, argonTheme } from '../constants'

const { width, height } = Dimensions.get('screen')
const thumbMeasure = (width - 48 - 32) / 3

class Account extends React.Component {
  state = {
    notifications: false,
  }
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ScrollView>
            <Block flex space='evenly' style={styles.profileContainer}>
              <Image source={Images.ProfilePicture} style={styles.avatar} />
              <Input
                bgColor='#000000'
                color={argonTheme.COLORS.PRIMARY}
                style={{ borderColor: argonTheme.COLORS.PRIMARY, marginBottom: -30 }}
                placeholderTextColor={argonTheme.COLORS.PRIMARY}
                placeholder='Username'
                rounded
              />
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
                placeholder='Password'
                password
                viewPass
                rounded
              />
              <Checkbox color='primary' labelStyle={{ color: argonTheme.COLORS.PRIMARY }} label='Allow Notifications' />
              <Checkbox color='primary' labelStyle={{ color: argonTheme.COLORS.PRIMARY }} label='Go Private' />
              <Button round size='small' color={argonTheme.COLORS.PRIMARY}>
                Save
              </Button>
              <Button round size='small' color={argonTheme.COLORS.SECONDARY}>
                Cancel
              </Button>
            </Block>
          </ScrollView>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    backgroundColor: argonTheme.COLORS.BLACK,
    flex: 1,
    width: width,
    height: height,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
    padding: height * 0.05,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
  },
  nameInfo: {
    marginTop: 35,
  },
  divider: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
  },
})

export default Account

// const MySignInButton = Object.assign({}, AmplifyTheme.signInButton, { backgroundColor: '#000' })
// const MyTheme = Object.assign({}, AmplifyTheme, { signInButton: MySignInButton })
// const signUpConfig = {
//   header: 'My Customized Sign Up',
//   hideAllDefaults: true,
//   defaultCountryCode: '1',
//   signUpFields: [
//     {
//       label: 'Phone Number',
//       key: 'phone_number',
//       required: true,
//       displayOrder: 1,
//       type: 'string',
//     },
//     {
//       label: 'Email',
//       key: 'email',
//       required: true,
//       displayOrder: 2,
//       type: 'string',
//     },
//     {
//       label: 'Password',
//       key: 'password',
//       required: true,
//       displayOrder: 3,
//       type: 'password',
//     },
//   ],
// }

// const Options = {
//   theme: MyTheme,
//   signUpConfig,
//   usernameAttributes: 'phone_number',
// }

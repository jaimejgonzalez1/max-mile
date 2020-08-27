import React from 'react'
import { StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Block, Text, theme } from 'galio-framework'
import { Auth } from 'aws-amplify'

import Icon from './Icon'
import argonTheme from '../constants/Theme'

async function signOut() {
  try {
    await Auth.signOut({ global: true })
  } catch (error) {
    console.log('error signing out: ', error)
  }
}

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props

    switch (title) {
      case 'Home':
        return <Icon name='shop' family='ArgonExtra' size={14} color={focused ? 'white' : argonTheme.COLORS.PRIMARY} />
      case 'Run':
        return <Icon name='map-big' family='ArgonExtra' size={14} color={focused ? 'white' : argonTheme.COLORS.ERROR} />
      case 'Social':
        return <Icon name='spaceship' family='ArgonExtra' size={14} color={focused ? 'white' : argonTheme.COLORS.PRIMARY} />
      case 'Account':
        return <Icon name='calendar-date' family='ArgonExtra' size={14} color={focused ? 'white' : argonTheme.COLORS.INFO} />
      case 'Logout':
        return <Icon name='support' family='ArgonExtra' size={14} color={focused ? 'white' : argonTheme.COLORS.WARNING} />
      default:
        return null
    }
  }

  render() {
    const { focused, title, navigation } = this.props

    const containerStyles = [styles.defaultStyle, focused ? [styles.activeStyle, styles.shadow] : null]

    return (
      <TouchableOpacity style={{ height: 60 }} onPress={() => (title == 'Logout' ? signOut() : navigation.navigate(title))}>
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text size={15} bold={focused ? true : false} color={theme.COLORS.WHITE}>
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.PRIMARY,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
})

export default DrawerItem

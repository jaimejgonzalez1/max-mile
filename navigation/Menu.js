import React from 'react'
import { useSafeArea } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, Image } from 'react-native'
import { Block, Text, theme } from 'galio-framework'
import { Auth } from 'aws-amplify'

import { argonTheme } from '../constants'
import { DrawerItem as DrawerCustomItem } from '../components'

async function signOut() {
  try {
    await Auth.signOut()
  } catch (error) {
    console.log('error signing out: ', error)
  }
}

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state, ...rest }) {
  const insets = useSafeArea()
  const screens = ['Home', 'Run', 'Social', 'Account']
  return (
    <Block style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Block flex={0.06} style={styles.header}>
        {/* <Image styles={styles.logo} source={Images.Logo} /> */}
        <Text h4 color={argonTheme.COLORS.WHITE}>
          MAX MILE
        </Text>
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return <DrawerCustomItem title={item} key={index} navigation={navigation} focused={state.index === index ? true : false} />
          })}
          <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
            <Block style={{ borderColor: 'rgba(0,0,0,0.2)', width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
          </Block>
          <DrawerCustomItem
            title='Logout'
            navigation={navigation}
            onPress={() => {
              signOut()
            }}
          />
        </ScrollView>
      </Block>
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: argonTheme.COLORS.DEFAULT,
    color: theme.COLORS.PRIMARY,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center',
  },
})

export default CustomDrawerContent

import React from 'react'
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native'
import { Block, Text, theme } from 'galio-framework'

import { Button } from '../components'
import { Images, argonTheme } from '../constants'
import { HeaderHeight } from '../constants/utils'

const { width, height } = Dimensions.get('screen')

const thumbMeasure = (width - 48 - 32) / 3

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ScrollView showsVerticalScrollIndicator={false} style={{ width, paddingTop: '25%' }}>
            <Block middle row style={styles.avatarContainer}>
              <Image source={Images.ProfilePicture} style={styles.avatar} />
            </Block>
            <Block flex style={styles.profileCard}>
              <Block style={styles.info}>
                <Block middle row space='evenly' style={{ marginTop: 20, paddingBottom: 24 }}>
                  <Button small style={{ backgroundColor: argonTheme.COLORS.SECONDARY }}>
                    CONNECT
                  </Button>
                  <Button small style={{ backgroundColor: argonTheme.COLORS.SECONDARY }}>
                    MESSAGE
                  </Button>
                </Block>
                <Block row space='between'>
                  <Block middle>
                    <Text bold size={18} color={argonTheme.COLORS.PRIMARY} style={{ marginBottom: 4 }}>
                      2K
                    </Text>
                    <Text size={12} color={argonTheme.COLORS.PRIMARY}>
                      Orders
                    </Text>
                  </Block>
                  <Block middle>
                    <Text bold color={argonTheme.COLORS.PRIMARY} size={18} style={{ marginBottom: 4 }}>
                      10
                    </Text>
                    <Text size={12} color={argonTheme.COLORS.PRIMARY}>
                      Photos
                    </Text>
                  </Block>
                  <Block middle>
                    <Text bold color={argonTheme.COLORS.PRIMARY} size={18} style={{ marginBottom: 4 }}>
                      89
                    </Text>
                    <Text size={12} color={argonTheme.COLORS.PRIMARY}>
                      Comments
                    </Text>
                  </Block>
                </Block>
              </Block>
              <Block flex>
                <Block middle style={styles.nameInfo}>
                  <Text bold size={28} color={argonTheme.COLORS.PRIMARY}>
                    Jessica Jones, 27
                  </Text>
                  <Text size={16} color={argonTheme.COLORS.PRIMARY} style={{ marginTop: 10 }}>
                    San Francisco, USA
                  </Text>
                </Block>
                <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                  <Block style={styles.divider} />
                </Block>
                <Block middle>
                  <Text size={16} color={argonTheme.COLORS.PRIMARY} style={{ textAlign: 'center' }}>
                    An artist of considerable range, Jessica name taken by Melbourne …
                  </Text>
                </Block>
              </Block>
            </Block>
            <Block flex style={styles.profileCard}>
              <Block flex>
                <Block middle style={styles.nameInfo}>
                  <Text bold size={28} color={argonTheme.COLORS.PRIMARY}>
                    Jessica Jones, 27
                  </Text>
                  <Text size={16} color={argonTheme.COLORS.PRIMARY} style={{ marginTop: 10 }}>
                    San Francisco, USA
                  </Text>
                </Block>
                <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                  <Block style={styles.divider} />
                </Block>
                <Block middle>
                  <Text size={16} color={argonTheme.COLORS.PRIMARY} style={{ textAlign: 'center' }}>
                    An artist of considerable range, Jessica name taken by Melbourne …
                  </Text>
                </Block>
              </Block>
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
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
    backgroundColor: argonTheme.COLORS.DEFAULT,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
    backgroundColor: theme.COLORS.BLACK,
  },
  profileBackground: {
    width: width,
    height: height,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 35,
    borderRadius: 10,
    backgroundColor: theme.COLORS.BLACK,
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
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
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

export default Profile

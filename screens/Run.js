import React from 'react'
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native'
import { Block, Text, theme } from 'galio-framework'

import { Button } from '../components'
import { Images, argonTheme } from '../constants'
import { HeaderHeight } from '../constants/utils'

const { width, height } = Dimensions.get('screen')

const thumbMeasure = (width - 48 - 32) / 3

export default class Run extends React.Component {
  state = {
    timeElapsed: 0,
    startTime: null,
    finishTIme: null,
    score: 0,
    min: 0,
    sec: 0,
    msec: 0,
    multiplier: false,
    lapArr: [],
    interval: null,
  }
  handleToggle = () => {
    this.setState(
      {
        start: !this.state.start,
      },
      () => this.handleStart()
    )
  }

  handleLap = (min, sec, msec) => {
    let lapArr = [...this.state.lapArr, { min, sec, msec }]
    this.setState({ lapArr })
  }

  handleStart = () => {
    if (this.state.start) {
      this.state.interval = setInterval(() => {
        if (this.state.msec !== 99) {
          this.setState({
            msec: this.state.msec + 1,
          })
        } else if (this.state.sec !== 59) {
          this.setState({
            msec: 0,
            sec: ++this.state.sec,
          })
        } else {
          this.setState({
            msec: 0,
            sec: 0,
            min: ++this.state.min,
          })
        }
      }, 1)
    } else {
      clearInterval(this.state.interval)
    }
  }

  handleReset = () => {
    this.setState({
      min: 0,
      sec: 0,
      msec: 0,

      start: false,
    })

    clearInterval(this.interval)

    this.lapArr = []
    this.handleToggle()
  }
  calculateScore = () => {
    let baseScore = this.state.sec * 2
    let hrScore = 0
    let distanceScore = 0
    let totalScore = baseScore + hrScore + distanceScore
    return String(totalScore.toString()).padStart(6, '0')
  }

  padToTwo = (number) => (number <= 9 ? `0${number}` : number)
  render() {
    return (
      <Block flex center style={styles.profile}>
        <Block flex center middle style={styles.profileContainer}>
          <Block flex center middle style={styles.textContainer}>
            <Text h1 color={argonTheme.COLORS.PRIMARY}>
              {this.padToTwo(this.state.min)} : {this.padToTwo(this.state.sec)} : {this.padToTwo(this.state.msec)}
            </Text>
            <Text h1 color={argonTheme.COLORS.PRIMARY}>
              {this.calculateScore()}
            </Text>
          </Block>
          <Block flex center middle>
            <Image source={Images.ProfilePicture} style={styles.avatar} />
            {this.state.multiplier && (
              <Block flex center middle row space='evenly' style={styles.buttonContainer}>
                <Button small style={{ backgroundColor: argonTheme.COLORS.SECONDARY }}>
                  2X
                </Button>
                <Button small style={{ backgroundColor: argonTheme.COLORS.SECONDARY }}>
                  3X
                </Button>
                <Button small style={{ backgroundColor: argonTheme.COLORS.SECONDARY }}>
                  4X
                </Button>
              </Block>
            )}
          </Block>
          <Block flex row center middle space='evenly' style={styles.buttonContainer}>
            <Button
              onlyIcon
              icon='previous'
              iconFamily='foundation'
              iconSize={60}
              iconColor={argonTheme.COLORS.PRIMARY}
              radius={100}
              style={styles.button}
            ></Button>
            <Button
              onlyIcon
              icon={!this.state.start ? 'play' : 'pause'}
              onPress={this.handleToggle}
              iconFamily='antdesign'
              iconSize={80}
              iconColor={argonTheme.COLORS.PRIMARY}
              radius={100}
              style={styles.button}
            ></Button>
            <Button
              onlyIcon
              icon='clear'
              onPress={this.handleReset}
              iconFamily='materialIcons'
              iconSize={60}
              iconColor={argonTheme.COLORS.PRIMARY}
              radius={100}
              style={styles.button}
            ></Button>
          </Block>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  profile: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
    backgroundColor: argonTheme.COLORS.DEFAULT,
  },
  profileContainer: {
    width: width,
    padding: 0,
    zIndex: 1,
    backgroundColor: argonTheme.COLORS.DEFAULT,
  },
  textContainer: {
    width: width,
  },
  buttonContainer: {
    width: width,
  },
  button: {
    backgroundColor: argonTheme.COLORS.DEFAULT,
    width: 80,
    height: 80,
  },
  profileBackground: {
    width: width,
    height: height,
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
})

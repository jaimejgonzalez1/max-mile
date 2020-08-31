import React, { useState, useEffect } from 'react'
import { Image, Dimensions } from 'react-native'
import { AppLoading } from 'expo'
import { useFonts } from '@use-expo/font'
import { Asset } from 'expo-asset'
import { Block, GalioProvider, Text } from 'galio-framework'
import { NavigationContainer } from '@react-navigation/native'
const { width, height } = Dimensions.get('screen')
// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens'
enableScreens()

import Screens from './navigation/Screens'
import { Images, articles, argonTheme } from './constants'

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo,
]

// cache product images
articles.map((article) => assetImages.push(article.image))

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

export default (props) => {
  const [isLoadingComplete, setLoading] = useState(false)
  let [fontsLoaded] = useFonts({
    ArgonExtra: require('./assets/font/argon.ttf'),
  })

  useEffect(() => {})

  function _loadResourcesAsync() {
    return Promise.all([...cacheImages(assetImages)])
  }

  function _handleLoadingError(error) {
    console.warn(error)
  }

  function _handleFinishLoading() {
    setLoading(true)
  }
  if (!fontsLoaded && !isLoadingComplete && props.authState === 'loading') {
    return <AppLoading startAsync={_loadResourcesAsync} onError={_handleLoadingError} onFinish={_handleFinishLoading} />
  } else if (fontsLoaded && props.authState === 'signedIn') {
    return (
      <NavigationContainer>
        <GalioProvider theme={argonTheme}>
          <Block flex style={{ width, height, marginTop: -(height * 0.05), marginBottom: -(height * 0.05) }}>
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    )
  } else {
    //REMOVE
    return (
      <Block>
        <Text>{props.authState}</Text>
      </Block>
    )
  }
}

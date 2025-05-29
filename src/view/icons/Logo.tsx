import React from 'react'
import {StyleSheet, type TextProps} from 'react-native'
import Svg, {
  Defs,
  LinearGradient,
  Path,
  type PathProps,
  RadialGradient,
  Stop,
  type SvgProps,
} from 'react-native-svg'
import {Image} from 'expo-image'

import {colors} from '#/lib/styles'
import {useKawaiiMode} from '#/state/preferences/kawaii'

// const ratio = 57 / 64
const ratio = 512 / 512

type Props = {
  fill?: PathProps['fill']
  style?: TextProps['style']
} & Omit<SvgProps, 'style'>

export const Logo = React.forwardRef(function LogoImpl(props: Props, ref) {
  const {fill, ...rest} = props
  const gradient = fill === 'sky'
  const styles = StyleSheet.flatten(props.style)
  const _fill = gradient ? 'url(#sky)' : fill || styles?.color || colors.blue3
  // @ts-ignore it's fiiiiine
  const size = parseInt(rest.width || 32, 10)

  const isKawaii = useKawaiiMode()

  if (isKawaii) {
    return (
      <Image
        source={
          size > 100
            ? require('../../../assets/kawaii.png')
            : require('../../../assets/kawaii_smol.png')
        }
        accessibilityLabel="Bluesky"
        accessibilityHint=""
        accessibilityIgnoresInvertColors
        style={[{height: size, aspectRatio: 1.4}]}
      />
    )
  }

  return (
    // <Svg
    //   fill="none"
    //   // @ts-ignore it's fiiiiine
    //   ref={ref}
    //   // viewBox="0 0 64 57"
    //   viewBox="0 0 512 512"
    //   {...rest}
    //   style={[{width: size, height: size * ratio}, styles]}>
    //   {gradient && (
    //     <Defs>
    //       <LinearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    //         <Stop offset="0" stopColor="#0A7AFF" stopOpacity="1" />
    //         <Stop offset="1" stopColor="#59B9FF" stopOpacity="1" />
    //       </LinearGradient>
    //     </Defs>
    //   )}

    //   <Path
    //     fill={_fill}
    //     d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z"
    //   />
    // </Svg>

    <Svg
      fill="none"
      // @ts-ignore it's fiiiiine
      ref={ref}
      // viewBox="0 0 64 57"
      viewBox="0 0 32 32"
      {...rest}
      style={[{width: size, height: size * ratio}, styles]}>
      {/* {gradient && ( */}
      <Defs>
        <LinearGradient
          id="a"
          x1="16.375"
          y1="14.8484"
          x2="16.375"
          y2="16.848"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#72c8f9" />
          <Stop offset="1" stopColor="#73aef2" stopOpacity="0" />
        </LinearGradient>

        <LinearGradient
          id="b"
          x1="19.1912"
          y1="25.113"
          x2="15.9474"
          y2="24.4909"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#73d2ff" />
          <Stop offset="1" stopColor="#73aef2" stopOpacity="0" />
        </LinearGradient>

        <LinearGradient
          id="c"
          x1="11.1719"
          y1="15"
          x2="7.23437"
          y2="9.875"
          gradientUnits="userSpaceOnUse">
          <Stop offset=".329505" stopColor="#2e97d8" />
          <Stop offset="1" stopColor="#1c82ca" />
        </LinearGradient>

        <LinearGradient
          id="d"
          x1="2.48437"
          y1="16.0625"
          x2="6.29687"
          y2="13.125"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#2e8bdb" />
          <Stop offset="1" stopColor="#2e8bdb" stopOpacity="0" />
        </LinearGradient>

        <LinearGradient
          id="e"
          x1="13.5701"
          y1="12.4711"
          x2="12.7036"
          y2="11.9157"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#32b3ea" />
          <Stop offset="1" stopColor="#32b3ea" stopOpacity="0" />
        </LinearGradient>

        <RadialGradient
          id="f"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(8.25000108 -.82812505 1.11925014 11.15026631 17.9844 12.5)">
          <Stop offset="0" stopColor="#20d5fc" />
          <Stop offset="1" stopColor="#20bff7" />
        </RadialGradient>

        <LinearGradient
          id="g"
          x1="19.5781"
          y1="13.5937"
          x2="20.2031"
          y2="13.1875"
          gradientUnits="userSpaceOnUse">
          <Stop offset=".17" stopColor="#20d0f6" />
          <Stop offset="1" stopColor="#20d0f6" stopOpacity="0" />
        </LinearGradient>

        <LinearGradient
          id="h"
          x1="9.01855"
          y1="15.375"
          x2="15.9902"
          y2="29.7342"
          gradientUnits="userSpaceOnUse">
          <Stop offset=".379031" stopColor="#296bcc" />
          <Stop offset="1" stopColor="#3e7de1" />
        </LinearGradient>

        <LinearGradient
          id="i"
          x1="9.01855"
          y1="15.375"
          x2="9.01855"
          y2="15.7813"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#2d75d2" />
          <Stop offset="1" stopColor="#2d75d2" stopOpacity="0" />
        </LinearGradient>

        <RadialGradient
          id="j"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(5.72463564 -10.31252699 5.40694877 3.00147691 17.2344 29.5625)">
          <Stop offset="0" stopColor="#42a2ec" />
          <Stop offset="1" stopColor="#3294e4" />
        </RadialGradient>

        <LinearGradient
          id="k"
          x1="17.5625"
          y1="24.8984"
          x2="18.0625"
          y2="25.0937"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#368fe1" />
          <Stop offset="1" stopColor="#368fe1" stopOpacity="0" />
        </LinearGradient>

        <LinearGradient
          id="l"
          x1="22.959"
          y1="15.0625"
          x2="22.959"
          y2="16.0937"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#309ee9" />
          <Stop offset="1" stopColor="#309ee9" stopOpacity="0" />
        </LinearGradient>

        <LinearGradient
          id="m"
          x1="19.6719"
          y1="11.3124"
          x2="11.0781"
          y2="17.3124"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#6ce8fe" />
          <Stop offset=".642405" stopColor="#68caea" />
        </LinearGradient>
      </Defs>
      {/* )} */}

      <Path d="m9.23438 14.25 6.75002 15.9141 7.5312-15.9141z" fill="#72adf1" />
      <Path d="m9.23438 14.25 6.75002 15.9141 7.5312-15.9141z" fill="url(#a)" />
      <Path d="m9.23438 14.25 6.75002 15.9141 7.5312-15.9141z" fill="url(#b)" />
      <Path
        d="m7.54688 7.96875-5.5 7.40625h9.03122l4.9219-7.40625z"
        fill="url(#c)"
      />
      <Path
        d="m7.54688 7.96875-5.5 7.40625h9.03122l4.9219-7.40625z"
        fill="url(#d)"
      />
      <Path
        d="m7.54688 7.96875-5.5 7.40625h9.03122l4.9219-7.40625z"
        fill="url(#e)"
      />
      <Path
        d="m24.4297 7.96875 5.5 7.40625h-9.0313l-4.9218-7.40625z"
        fill="url(#f)"
      />
      <Path
        d="m24.4297 7.96875 5.5 7.40625h-9.0313l-4.9218-7.40625z"
        fill="url(#g)"
      />
      <Path d="m15.9902 30.1738-13.94332-14.7988h9.03122z" fill="url(#h)" />
      <Path d="m15.9902 30.1738-13.94332-14.7988h9.03122z" fill="url(#i)" />
      <Path d="m15.9844 30.1641 13.9492-14.7891h-9.0313z" fill="url(#j)" />
      <Path d="m15.9844 30.1641 13.9492-14.7891h-9.0313z" fill="url(#k)" />
      <Path d="m15.9844 30.1641 13.9492-14.7891h-9.0313z" fill="url(#l)" />
      <Path d="m11.0781 15.3749h9.8203l-4.9101-7.38857z" fill="url(#m)" />
    </Svg>
  )
})

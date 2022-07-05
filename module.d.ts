import 'styled-components'

declare module '*.png'
declare module '*.jpg'
declare module '*.svg'
declare module '*.gif'
declare module '*.mp4'
declare module '*.webm'
declare module '*.webp'

declare module 'styled-components' {
  export interface DefaultTheme {
    grayColor: string
    grayColor700: string
    grayColor800: string
  }
}

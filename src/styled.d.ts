// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    appColor: string
    appBackground: string
    appDefaultStroke: string
    appLogo: string
    appSkeletonFrom: string
    appSkeletonTo: string
    buttons: {
      alert: string
      alertColor: string
      alertHover: string
      disabled: string
      disabledColor: string
      primary: string
      primaryColor: string
      primaryHover: string
    }
    card: {
      alert: string
      background: string
      border: string
      success: string
      warning: string
    }
    textInput: {
      active: string
      activeColor: string
      borderColor: string
      disabled: string
      disabledBorderColor: string
      disabledColor: string
      placeholderColor: string
      background: string
      color: string
      border: string
    }
    typographies: {
      error: string
      subtitle: string
      success: string
    }
  }
}

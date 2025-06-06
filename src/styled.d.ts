// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    appColor: string
    appBackground: string
    appDefaultStroke: string
    appLogo: string
    buttons: {
      disabledColor: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          ButtonProps
        >
      >
      disabled: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          ButtonProps
        >
      >
      alert: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          ButtonProps
        >
      >
      alertColor: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          ButtonProps
        >
      >
      alertHover: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          ButtonProps
        >
      >
      primaryHover: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          ButtonProps
        >
      >
      primaryColor: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          ButtonProps
        >
      >
      primary: string
    }
    textInput: {
      placeholderColor: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          InputProps
        >
      >
      disabledColor: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          InputProps
        >
      >
      disabledBorderColor: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          InputProps
        >
      >
      disabled: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          InputProps
        >
      >
      borderColor: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          InputProps
        >
      >
      activeColor: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          InputProps
        >
      >
      active: Interpolation<
        Substitute<
          DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >,
          InputProps
        >
      >
      background: string
      color: string
      border: string
    }
    typographies: {
      error: string
      subtitle: string
      success: string
    }
    appBackground: string
    appColor: string
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
    }
    typographies: {
      error: string
      subtitle: string
      success: string
    }
    // você pode adicionar outras propriedades aqui também
  }
}

import type { DefaultTheme } from 'styled-components'
import { darkTheme, lightTheme } from '@/styles'

export const themesList: { name: string; theme: DefaultTheme }[] = [
  { name: 'Light Theme', theme: lightTheme },
  { name: 'Dark Theme', theme: darkTheme },
]

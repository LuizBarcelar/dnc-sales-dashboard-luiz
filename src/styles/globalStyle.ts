import { createGlobalStyle } from 'styled-components'
import type { DefaultTheme } from 'styled-components'
import { pxToRem } from '@/utils'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        background: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
    }
    h1, h2, p, ul, li, figure {
        margin: 0;
        padding: 0;
    }

    .mb-1 {
        margin-bottom: ${pxToRem(16)};
    }

    .mb-2 {
        margin-bottom: ${pxToRem(32)};
    }

    .skeleton-loading {
        animation: skeletonLoading 2s infinite alternate;
    } 
        
    @keyframes skeletonLoading {
        from {
            background-color: ${(props) => props.theme.appSkeletonFrom};
        to {
            background-color: ${(props) => props.theme.appSkeletonTo};
        }
            
    .skeleton-loading-mh-1 {
        min-height: ${pxToRem(175)};
    }
        
    .skeleton-loading-mh-2 {
        min-height: ${pxToRem(400)};
    }
`

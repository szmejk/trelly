import 'styled-components'
import { breakpoints } from './breakpoints'
import { spacing } from './spacing'
import { fontSize } from './typography'
import { colors } from './typography'

declare module 'styled-components' {
    interface DefaultTheme {
        fontSize: typeof fontSize
        spacing: typeof spacing
        breakpoints: typeof breakpoints
        colors: typeof colors
    }
}

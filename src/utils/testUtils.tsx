import React, { FC, ReactElement } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { render, RenderOptions } from '@testing-library/react'

import { reducer, ReduxStore, RootState } from '../store/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

type ReduxOptions = { preloadedState: RootState; store: ReduxStore }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (
    ui: ReactElement,
    {
        preloadedState,
        store = configureStore({ reducer, preloadedState }),
        ...renderOptions
    }: Partial<Omit<RenderOptions & ReduxOptions, 'queries'>> = {}
) => {
    const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </Provider>
        )
    }
    return render(ui, { wrapper: Providers, ...renderOptions })
}
export * from '@testing-library/react'

export { customRender as render }

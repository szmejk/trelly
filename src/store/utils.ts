import { WritableDraft } from 'immer/dist/internal'

export const setLoadingState = (state: WritableDraft<CommonReduxState>): void => {
    state.isLoading = true
    state.error = false
    state.errorMessage = ''
}

export const resetCommonState = (state: WritableDraft<CommonReduxState>): void => {
    state.isLoading = false
    state.error = false
    state.errorMessage = ''
}

export const setErrorState = (state: WritableDraft<CommonReduxState>, errorMessage = ''): void => {
    state.isLoading = false
    state.error = true
    state.errorMessage = errorMessage
}

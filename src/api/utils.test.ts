import { getApiUrl, apiUrlBase, apiUrlAuthParams } from './utils'

describe('getApiUrl', () => {
    const env = process.env

    beforeEach(() => {
        jest.resetModules()
        process.env = { ...env }
    })

    afterEach(() => {
        process.env = env
    })

    it('should create api url with given params', () => {
        process.env.REACT_APP_API_KEY = 'key'
        process.env.REACT_APP_TOKEN_TOKEN = 'token'
        const resource = 'test'

        expect(getApiUrl(resource)).toEqual(`${apiUrlBase}${resource}?${apiUrlAuthParams}`)
    })
})

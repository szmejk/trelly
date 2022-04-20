export const API_URL_BASE = `https://api.trello.com/1/boards/625c1ec9fb9bf3362814c90f/`

export const apiUrlAuthParams = `key=${process.env.REACT_APP_API_KEY || ''}&token=${
    process.env.REACT_APP_API_TOKEN || ''
}`

export const getBaseApiUrl = (resource: string) => `${API_URL_BASE}${resource}`

export const getApiUrl = (resource: string, params = '') => `${getBaseApiUrl(resource)}?${params}${apiUrlAuthParams}`

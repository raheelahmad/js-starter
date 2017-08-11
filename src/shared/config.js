// @flow

// Server
export const WEB_PORT = process.env.PORT || 8000 // web server's port
export const STATIC_PATH = '/static' // CSS is served from this endpoint
export const APP_NAME = 'Hellp App!' // just a variable

// Client

export const WDS_PORT = 7000 // to serve Webpack Dev Server's JS on dev
export const APP_CONTAINER_CLASS = 'js-app'
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}` // client HTML will be rendered in this selector

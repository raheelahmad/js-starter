// @flow

import compression from 'compression'
import express from 'express'

import { APP_NAME, STATIC_PATH, WEB_PORT, WDS_PORT, APP_CONTAINER_CLASS } from '../shared/config'
import { isProduction } from '../shared/util'

const app = express()

app.use(compression())
// serve dist for javascript on STATIC_PATH (/static)
app.use(STATIC_PATH, express.static('dist'))
// serve public for CSS on STATIC_PATH (/static)
app.use(STATIC_PATH, express.static('public'))

app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
<html>
  <head>
    <title>${APP_NAME}</title>
    <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
  </head>
  <body>
    <h1>${APP_NAME}</h1>
    <div class="${APP_CONTAINER_CLASS}"></div>
    <script src="${isProduction ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
  </body>
</html>`)
})

app.listen(WEB_PORT, () => {

  const prodStr = '(production)'
  const devStr = '(development). Keep "yarn dev:wds" running in another terminal.'
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${WEB_PORT} ${isProduction ? prodStr : devStr}`)
})

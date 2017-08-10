// @flow

import compression from 'compression'
import express from 'express'

import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config'
import { isProduction } from '../shared/util'

const app = express()

app.use(compression())
// serve dist for javascript on STATIC_PATH (/static)
app.use(STATIC_PATH, express.static('dist'))
// serve public for CSS on STATIC_PATH (/static)
app.use(STATIC_PATH, express.static('public'))

app.get('/', (req, res) => {
  res.send(APP_NAME)
})

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${WEB_PORT} ${isProduction ? '(production)' : '( development )'}`)
})

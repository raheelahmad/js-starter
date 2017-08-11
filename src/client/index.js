// @flow

import 'babel-polyfill'

import * as d3 from 'd3'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

d3.select(APP_CONTAINER_SELECTOR)
  .append('div')
  .html('THIS IS HTML')

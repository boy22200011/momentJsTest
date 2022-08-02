'use strict'
import moment from 'moment'

let startTime = moment().format('2022-07-31 00:00:00')
let endTime = moment().format('2022-08-01 00:00:00')

console.log(startTime)
console.log(endTime)
console.log(moment(startTime).format('YYYY-MM-DD'))
console.log(moment(startTime).isBefore(endTime))
console.log(moment(startTime).isAfter(endTime))
console.log(Math.abs(moment(startTime).diff(endTime, 'hours')))

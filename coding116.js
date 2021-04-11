const lodash = require('lodash');

const val = 0;

if (lodash.isEmpty(val)) {
    console.log('Empty')
}

let tags = [ 'one', 'two', 'three'];

const newTags = ['four', 'five'];
tags.push(...newTags);

console.log(tags);

const date = new Date(Date.now());

console.log(date);

const dateUTC = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();





const lastActiveAt= new Date('2002-12-09');

console.log(lastActiveAt instanceof Date);

const lastOl = new Date('09-12-2002');
console.log(lastOl instanceof Date);
console.log(dateUTC);

const moment = require('moment');
const now = moment();

console.log(now.get());

// console.log(moment().utc().toDate(),)
console.log(moment().utc().toDate())
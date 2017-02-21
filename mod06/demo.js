import {Cat } from './cat'
import {sleepAll} from './utils'

const cats = [
    new Cat('Zorro'),
    new Cat('Sarah')
];

sleepAll(cats);
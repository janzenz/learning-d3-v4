import tableFactory from './table-factory';

const header = ['one', 'two', 'three', 'four', 'five', 'six'];
const rows = [
  header,
  ['q', 'w', 'e', 'r', 't', 'y'],
];

const table = tableFactory(rows);

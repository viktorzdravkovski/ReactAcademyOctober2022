// 'head1,head2\na,b\nc,d\nd,e'

// head1    head2
// a        b
// c        d
// d        e


const convertCsvToArray = (csv, delimiter = '\n', omitFirstRow = true) => {
    return csv
    .slice(omitFirstRow ? csv.indexOf(delimiter) + 1 : 0)
    .split(delimiter);
}

// const convertCsvToArray = (csv, delimiter = '\n', omitFirstRow = true) => {
//     const firstValueIndex = omitFirstRow ? csv.indexOf(delimiter) + 1 : 0;
//     return csv
//     .slice(firstValueIndex)
//     .split(delimiter);
// }

const omitTrue = convertCsvToArray('head1,head2;a,b;c,d;d,e', false);
const omitFalse = convertCsvToArray('head1,head2\na,b\nc,d\nd,e', '\n', false);

console.log(omitTrue);
var elDocument = document.documentElement;

elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');

// Grouping items
console.group('Grouping items');
  console.log('Miguel Moya');
  console.log(jQuery.fn.jquery);
console.groupEnd();

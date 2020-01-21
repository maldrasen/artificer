
// =============
//     Coded
// =============

ImageResource.build('black',              { url:`${IMAGE_ROOT}/backgrounds/black.png` });
ImageResource.build('void',               { url:`${IMAGE_ROOT}/backgrounds/void.png` });

ImageResource.build('unknown-background', { url:`${IMAGE_ROOT}/backgrounds/todo.png` });
ImageResource.build('journal',            { url:`${IMAGE_ROOT}/backgrounds/todo.png` });
ImageResource.build('splash-screen',      { url:`${IMAGE_ROOT}/backgrounds/todo.png` });
ImageResource.build('field',              { url:`${IMAGE_ROOT}/backgrounds/todo.png` });
ImageResource.build('keep-in-distance',   { url:`${IMAGE_ROOT}/backgrounds/todo.png` });

// =================
//     Locations
// =================

// === Courtyard ===

ImageResource.build('courtyard', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'courtyard',
});

ImageResource.build('courtyard-m', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'courtyard',
  time: 'morning'
});

ImageResource.build('courtyard-n', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'courtyard',
  time: 'night'
});

// === Great Hall ===

ImageResource.build('great-hall', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'great-hall',
});

ImageResource.build('great-hall-m', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'great-hall',
  time: 'morning'
});

ImageResource.build('great-hall-c', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'great-hall',
  state: 'clean',
});

ImageResource.build('great-hall-d', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'great-hall',
  state: 'decorated',
});

// === Lower Keep Hall ===

ImageResource.build('lower-keep-hall', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'lower-keep-hall',
});

ImageResource.build('lower-keep-hall-c', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'lower-keep-hall',
  state: 'clean',
});

// === Study ===

ImageResource.build('study', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'study',
});

ImageResource.build('study-c', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'study',
  state: 'clean',
});

// === Workshop ===

ImageResource.build('workshop', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'workshop',
});


// =============
//     Coded
// =============

ImageResource.buildBackground('black',              { url:`${IMAGE_ROOT}/backgrounds/black.png` });
ImageResource.buildBackground('void',               { url:`${IMAGE_ROOT}/backgrounds/void.png` });

ImageResource.buildBackground('unknown-background', { url:`${IMAGE_ROOT}/backgrounds/todo.png` });
ImageResource.buildBackground('journal',            { url:`${IMAGE_ROOT}/backgrounds/todo.png` });
ImageResource.buildBackground('splash-screen',      { url:`${IMAGE_ROOT}/backgrounds/todo.png` });
ImageResource.buildBackground('field',              { url:`${IMAGE_ROOT}/backgrounds/todo.png` });
ImageResource.buildBackground('keep-in-distance',   { url:`${IMAGE_ROOT}/backgrounds/todo.png` });

// =================
//     Locations
// =================

// === Courtyard ===

ImageResource.buildBackground('courtyard', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'courtyard',
});

ImageResource.buildBackground('courtyard-m', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'courtyard',
  time: 'morning'
});

ImageResource.buildBackground('courtyard-n', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'courtyard',
  time: 'night'
});

// === Great Hall ===

ImageResource.buildBackground('great-hall', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'great-hall',
});

ImageResource.buildBackground('great-hall-m', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'great-hall',
  time: 'morning'
});

ImageResource.buildBackground('great-hall-c', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'great-hall',
  state: 'clean',
});

ImageResource.buildBackground('great-hall-d', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'great-hall',
  state: 'decorated',
});

// === Lower Keep Hall ===

ImageResource.buildBackground('lower-keep-hall', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'lower-keep-hall',
});

ImageResource.buildBackground('lower-keep-hall-c', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'lower-keep-hall',
  state: 'clean',
});

// === Study ===

ImageResource.buildBackground('study', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'study',
});

ImageResource.buildBackground('study-c', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'study',
  state: 'clean',
});

// === Workshop ===

ImageResource.buildBackground('workshop', {
  url: `${IMAGE_ROOT}/backgrounds/todo.png`,
  location: 'workshop',
});


// This actually can fuck with the specs if the spec finishes and destroys the
// database before the event can happen. Might be useful to have at some point
// though.
global.keepTrying = function(condition, count=0) {
  return new Promise((resolve, reject) => {
    condition().then(ok => {
      count += 1;
      if (ok) { resolve(count) } else {
        if (count > 100) { reject('nope, not going to happen') } else {
          setTimeout(() => {
            resolve(keepTrying(condition, count));
          },5);
        }
      }
    });
  });
}

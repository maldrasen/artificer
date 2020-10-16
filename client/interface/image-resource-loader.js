global.ImageResourceLoader = (function() {

  // The resolveAll() function will resolve all of the elements with the
  // .unresolved-image class.
  function resolveAll() {
    $.each($('.unresolved-image'), (i,element) => {
      resolve($(element));
    });
  }

  function resolve(element) {
    let resourceCode = element.data('image-resource');
    if (resourceCode) {
      element.css({ 'background-image': `url('${lookupResource(resourceCode)}')` });
    }
    element.removeClass('.unresolved-image');
  }

  function lookupResource(code) {
    let imagePath;

    if (fs.existsSync(`${ROOT}/modules/image-overwrite/images`)) {
      imagePath = lookupResourceIn(code, `${ROOT}/modules/image-overwrite/images`);
    }
    if (imagePath == null) {
      imagePath = lookupResourceIn(code, `${ROOT}/modules/image-resources/images`);
    }

    return imagePath || `../../assets/images/missing.png`
  }

  // Find a file in the images directory that starts with the code. I'm doing
  // it this way because I don't want to have to specify the image format.
  // Image resources really should have unique, unambigious names though, so it
  // should be fine.
  function lookupResourceIn(code, directory) {
    let files = fs.readdirSync(directory);
    for (let i=0; i<files.length; i++) {
      if (files[i].match(`^${code}\.`)) {
        return `${directory.replace(ROOT,'../../')}/${files[i]}`;
      }
    }
  }

  return { resolveAll, resolve }

})();

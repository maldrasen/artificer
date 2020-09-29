// Make sure that all the ImageResources are loaded before sending data to
// the client the image resource should be the last mod that gets added that
// this function cares about.

// This should be moved somewhere else. I kind of hate how it works anyway.

function sendDataToClient() {
  setTimeout(() => {
    if (Object.keys(ImageResource.instances||{}).length < MIN_EXPECTED_IMAGES) {
      return sendDataToClient();
    }

    console.log("> Sending Reference Data to Client");
    console.log(`    - ${Object.keys(ImageResource.instances).length} Images`)
    console.log(`    - ${Object.keys(Aspect.instances).length} Aspects`);
    console.log('');

    send('init.aspect-library',{
      aspects: Object.keys(Aspect.instances).map(code => Aspect.lookup(code).properties)
    });

    send('init.icon-library',{
      item: Item.forClient(),
      flavor: ItemFlavor.forClient(),
      equipment: Equipment.forClient(),
    });
  },10);
}

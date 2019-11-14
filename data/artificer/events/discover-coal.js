Event.build('discover-coal', {
  requires: ['flag.enqueued.there-is-coal-somewhere'],

  stages:[{
    pages:[
      { text:`TODO: Discovered Coal.` },
    ]
  }],

});

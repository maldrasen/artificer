Event.build('discover-coal', {
  requires: ['flag.enqueued.there-is-coal-somewhere'],

  background: { location:'location-of-report' },

  stages:[{
    pages:[
      { text:`TODO: Discovered Coal.` },
    ]
  }],

});

Event.build('rat-thief-kill', {

  stages:[{
    pages:[
      { text:`(*) How should I go about killing {{C::character.firstName}}?`},
    ]
  },{
    selectionPage: true,
    selectionKey: 'method',
    selections:[
      { text:'Skin them alive while raping them.', value:'skin-yes', effects:['(+ rat hide)']},
      { text:'Skin them alive like a normal person. (no sex)', value:'skin-no', effects:['(+ rat hide)']},
      { text:'Mount them on the horse statue in the courtyard.', value:'mount', effects:['player stretcher 1']},
    ]
  }],

  onFinish: async choices => {
    Flag.set('character.rat-thief',null);
    if (choices.method == 'skin-yes') { Game.chainEvent('rat-thief-kill-skin', { sex:'yes' }); }
    if (choices.method == 'skin-no')  { Game.chainEvent('rat-thief-kill-skin', { sex:'no'  }); }
    if (choices.method == 'mount')    { Game.chainEvent('rat-thief-kill-mount'); }
  },

});

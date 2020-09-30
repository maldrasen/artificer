global.Templates = (function() {



    // This will need to be broken up between core renderer components and
    // views added by scenarios.
    //
    // const VIEWS = {
    //   mainMenu:   { template:'#mainMenuTemplate',     build:buildMainMenu },
    //   createPlan: { template:'#planTemplate',         title:"Create Today's Plan" },
    //   inventory:  { template:'#inventoryTemplate',    title:"Inventory",     build:Components.InventoryView.build    },
    //   map:        { template:'#mapTemplate',          title:"Keep Map",      build:Components.LocationView.buildMap  },
    //   manage:     { template:'#manageTemplate',       title:"",              build:Components.ManageView.build       },
    //   minion:     { template:'#minionDetailTemplate', title:"Minion Detail", build:Components.MinionDetailView.build },
    //   player:     { template:'#playerTemplate',       title:"",              build:Components.PlayerView.build       },
    //   loadGame:   { template:'#loadGameTemplate',     title:'Load Game',     build:Components.SavedGames.buildLoad   },
    //   saveGame:   { template:'#saveGameTemplate',     title:'Save Game',     build:Components.SavedGames.buildSave   },
    // };
    //
    // const TEMPLATES = [
    // ];

  let templates = [
  ];

  //   'character-aspects',
  //   'chooser',
  //   'dialog',
  //   'event',
  //   'inventory',
  //   'load-game',
  //   'location',
  //   'main-menu',
  //   'manage',
  //   'map',
  //   'minion-detail',
  //   'minion-frame',
  //   'minion-list',
  //   'minion-select-dialog',
  //   'plan',
  //   'player',
  //   'recipes',
  //   'rename-minion-dialog',
  //   'report',
  //   'save-game',
  //   'settings-dialog',
  //   'training-plan',
  //   'training-report',

  function addTemplate(path) {
    templates.push(path);
  }

  function installTemplates() {

  }
  // Hmm, this works for the default templates, but I also need to add
  // templates from the modules, so need a function that can append them as
  // well.

  // each(TEMPLATES, template => {
  //   body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/templates/${template}.html`));
  // });
  // function initializeView() {
    // if ($('.partial').length > 0) { return renderPartial(); }
    // finishedLoading();
    // Elements.PagedContent.build();
  // }

  // function renderPartial() {
  //   let partial = $($('.partial')[0]);
  //   loadFile(partial.data('url'), data => {
  //     partial.replaceWith(data);
  //     initializeView();
  //   });
  // }

  return {
    addTemplate,
    installTemplates,
  };

})();

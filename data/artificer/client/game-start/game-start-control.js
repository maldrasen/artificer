
  function init() {
    Elements.PagedContent.setBackground("../../data/artificer/client/images/bg-void.png");
    Elements.PagedContent.darkenBackground(100);
    Elements.RadioButtons.wire();

    $(document).on('click','#gameTitleFrame',Elements.buttonAction(complete));
    $(document).on('click','.check-name',Elements.buttonAction(checkName));
    $(document).on('click','.check-custom-gender',Elements.buttonAction(checkCustomGender));
    $(document).on('click','.accept-species-choice',Elements.buttonAction(speciesChosen));
    $(document).on('click','.accept-gender-choice',Elements.buttonAction(genderChosen));
  }


  // === Name ===

  function checkName() {
  }

  // === Gender ===


  function genderChosen() {
    Elements.PagedContent.showPage(
      (genderChooser.selectedValue == 'custom') ? '.custom-gender-page' : '.after-gender-page'
    );

    // We can't use the standard loom to fill in the title here because the
    // player doesn't actually exist yet. This has to be done after the name
    // step, but before the page is shown.
    $('.title-fill').append($('#title').val().trim());
  }

  function checkCustomGender() {
    let valid = true;
    let fields = [
      '#genderName',
      '#genderPlural',
      '#genderDescriptive',
      '#genderSubject',
      '#genderObject',
      '#genderPossessive',
      '#genderAbsolute']

    each(fields, id => {
      if ($(id).val().trim().length == 0) { valid = false; }
    });

    if (valid) {
      Elements.PagedContent.showNextPage();
    }
  }

  // === Complete ===

  function complete() {
    let options = {
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      title: $('#title').val().trim(),
      gender: genderChooser.selectedValue,
      species: speciesChooser.selectedValue,
    }

    if (options.gender == 'custom') {
      extend(options,{
        genderDick: $('#genderDick').data('value'),
        genderTits: $('#genderTits').data('value'),
        genderPussy: $('#genderPussy').data('value'),
        genderName: $('#genderName').val(),
        genderPlural: $('#genderPlural').val(),
        genderDescriptive: $('#genderDescriptive').val(),
        genderSubject: $('#genderSubject').val(),
        genderObject: $('#genderObject').val(),
        genderPossessive: $('#genderPossessive').val(),
        genderAbsolute: $('#genderAbsolute').val(),
      });
    }

    logger.info("Creating Player",options);

    Renderer.sendCommand('game.create-player',options);
  }

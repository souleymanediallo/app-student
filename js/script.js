$(document).on('ready', function() {

    $('.js-toggle-switch').each(function() {
        var toggleSwitch = new HSToggleSwitch($(this)).init();
    });


});
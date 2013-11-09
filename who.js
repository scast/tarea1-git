jQuery(function($) {
    var template = _.template($('#template-who').html());
    $.getJSON("https://api.github.com/repos/devlabs-usb/tarea1-git/forks", function(data) {
        var filtered = _.filter(data, function(x) {
            return x.full_name != 'scast/tarea1-git' ;
        });
        $('.still-not-technically-an-answer').html(template({players: filtered}));
    });
});

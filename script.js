//global variables
var top10Music = [];

//function to compare author of vines to each other, if the same, then remove duplicates
function noDupVines(arr) {
    var output = {};
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (arr[i] !== null) {
            output[arr[i].author_url] = arr[i];
        }
    }
    return output;
}

//function for when songs get clicked to hide songs, and show vines
function song_click() {
    $('.first_part').hide();
    $('#images_side').show();
}

// /function to place song properly
function append_songs(song, i) {
    if (i % 2 == 0) {
        var songDiv = $('<div>', {
            class: 'row'
        });
        var songArt = $('<img>', {
            class: 'evenImg cover',
            src: song.albumArt,
        });
        var songInfo = $('<p>', {
            class: 'evenList boxText',
            text: song.name + ' - ' + song.song
        });
    }
    else {
        var songDiv = $('<div>', {
            class: 'row'
        });
        var songArt = $('<img>', {
            class: 'oddImg cover',
            src: song.albumArt,
        });
        var songInfo = $('<p>', {
            class: 'oddList boxText',
            text: song.name + ' - ' + song.song
        });
    }
    $('.first_part').append(songDiv);
    $(songDiv).append(songArt).append(songInfo);
    $(songDiv).on('click', function () {
        //console.log(song.name + song.song);
        $('div:not(body)').hide();
        getVines(song.name, song.song);
    })
}
$("#main_body").addClass('animate');




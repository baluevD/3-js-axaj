'use strict';

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            $('#demo').html(this.responseText);
        }
    };
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts/1' , true);
    xhttp.send();
}
function loadFetch() {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
        .then(function(response) {
            return response.text()
        }).then(function(data) {
            $('#demo2').html(data);
        });
}
function loadJSONP() {
    $.ajax('http://jsonplaceholder.typicode.com/albums/1', {
        dataType: 'jsonp'
    }).then(function(data) {
        $('#demo3').html(JSON.stringify(data));
    });
}
function get() {
    $.get('https://jsonplaceholder.typicode.com/comments/1').then(function(data) {
        $('#demo4').html(JSON.stringify(data));
    });
}
function post() {
    $.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    },function(data) {
        $('#demo5').html(JSON.stringify(data));
    });
}
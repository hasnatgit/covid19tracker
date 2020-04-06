function getJSON(url, callback) {
    var x = new XMLHttpRequest();
    x.open('GET', url);
    x.responseType = 'json';
    x.onload = function () {
        callback(x.response);
    };
    x.send();
}

getJSON('https://api.covid19india.org/data.json',
    function (result) {
        var html = '<div class="level-item is-cherry">' +
            '<h5>Confirmed</h5>' +
            '<h1>' + result.statewise[0].confirmed + ' </h1>' +
            '</div>' +
            '<div class="level-item is-blue">' +
            '<h5 class="heading">Active</h5>' +
            '<h1 class="title has-text-info">' + result.statewise[0].active + ' </h1>' +
            '</div>' +
            '<div class="level-item is-green">' +
            '<h5 class="heading">Recovered</h5>' +
            '<h1 class="title has-text-success">' + result.statewise[0].recovered + ' </h1>' +
            '</div>' +
            '<div class="level-item is-gray">' +
            '<h5 class="heading">Deceased</h5>' +
            '<h1 class="title has-text-grey">' + result.statewise[0].deaths + ' </h1>' +
            '</div>';

        showRes = document.getElementById('result');
        showRes.innerHTML = html;
    });
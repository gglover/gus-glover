(function () {
  // Last.fm loader
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var resp = JSON.parse(xhr.responseText);

      var track = resp.recenttracks.track[0];
      document.getElementById('audio-song').innerHTML = track.artist['#text'] + ' - ' + track.name;
      document.getElementById('audio-album-cover').src = track.image[1]['#text'];
      document.getElementById('audio-album').innerHTML = track.album['#text'];
      document.getElementById('audio').className =
      document.getElementById('audio').className.replace(/\bhidden\b/,'');
    }

  }

  xhr.open('GET', 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=asparagus22&api_key=4c03a43d3709a1bba02e2bb88c16f959&format=json&limit=5', true);
  xhr.send(null);


  // Header fun
  var numGlobes = 4;
  var globeNum = Math.floor(Math.random() * numGlobes);

  document.querySelectorAll('#tagline em')[0].onclick = function(e) {
    e.currentTarget.innerHTML = e.currentTarget.innerHTML + '<img src="' +
      '/images/globes/globe' + globeNum + '.gif"/>';
    globeNum = (globeNum + 1) % numGlobes;
  };


  // Lightbox images
  var expandImage = function(e) {
    var thumbnailEl = e.currentTarget;
    var fullSize = thumbnailEl.getAttribute('data-lightbox');
    document.getElementById(fullSize).className += ' expanded';
  };
  var collapseImage = function() {
    var expandedEl = document.querySelector('.lightbox.expanded');
    if (expandedEl) {
      expandedEl.className =  expandedEl.className.replace(/\bexpanded\b/,'');
    }
  };
  document.querySelectorAll('figure img').forEach(function(el) {
    el.onclick = expandImage;
  });
  document.querySelectorAll('.lightbox').forEach(function(el) {
    el.onclick = collapseImage;
  });
  document.onkeydown = function(e) {
    if (e.key == "Escape") {
      collapseImage();
    }
  }
})();


var data = {
  attributions: ["sanders", "clinton"],
  mediaOutlets: [
    {
      source: {
        name: "MSNBC",
        link: "https://www.msnbc.com",
        selector: "msnbc"
      },
      overallScore: 75,
      keywords: [
        {
          name: "insurgent",
          connotation: -85,
          attribution: [1]
        }, {
          name: "dorm room debater",
          connotation: -95,
          attribution: [1, 2]
        }, {
          name: "hawkish",
          connotation: -38,
          attribution: [2]
        }
      ]
    }
  ]
};

var templateOutletFn = _.template(document.getElementById('outlet-template').innerHTML);
_.each(data.mediaOutlets, function(outlet) {
  var markup = templateOutletFn(outlet);
  document.getElementById(outlet.source.selector).innerHTML = markup;
});
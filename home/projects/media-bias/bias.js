var data = {
  attributions: ["Bernie Sanders", "Hillary Clinton", "Quality of Debate"],
  mediaOutlets: [
    {
      source: {
        name: "MSNBC",
        link: "http://www.msnbc.com/msnbc/sparks-fly-between-hillary-clinton-and-bernie-sanders-heated-brooklyn-debate",
        selector: "msnbc"
      },
      overallScore: 75,

      // Roughly connotation from [-10, 10] but it's a bit arbitrary
      keywords: [
        {
          quote: "74-year-old",
          connotation: -7,
          attribution: [0]
        }, {
          quote: "socialist",
          connotation: -8,
          attribution: [0]
        }, {
          quote: "steamrolled",
          connotation: 9,
          attribution: [1]
        }, {
          quote: "facts and pragmatism",
          connotation: 7,
          attribution: [1]
        }, {
          quote: "steady stream",
          connotation: 5,
          attribution: [1]
        }, {
          quote: "outpaced",
          connotation: 4,
          attribution: [1]
        }, {
          quote: "evolved",
          connotation: 4,
          attribution: [1]
        }, {
          quote: "adroitly",
          connotation: 8,
          attribution: [1]
        }, {
          quote: "racist term",
          connotation: -8,
          attribution: [1]
        }, {
          quote: "haunted",
          connotation: -4,
          attribution: [1]
        }, {
          quote: "on the outskirts",
          connotation: -6,
          attribution: [0]
        }, {
          quote: "firey and illuminating",
          connotation: 5,
          attribution: [2]
        }, {
          quote: "most contentious",
          connotation: 3,
          attribution: [2]
        }, {
          quote: "feisty",
          connotation: -2,
          attribution: [2]
        }, {
          quote: "loud",
          connotation: -3,
          attribution: [2]
        }, {
          quote: "near yell",
          connotation: -6,
          attribution: [2]
        }, {
          quote: "sarcastic",
          connotation: -5,
          attribution: [2]
        }, {
          quote: "tough talk",
          connotation: 4,
          attribution: [1]

        // Handling dual attributions?
        /* }, {
          quote: "spoke over eachother",
          connotation:
          attribution: [0, 1]
        }, {
          quote: "like children",
          connotation:
          attribution: [0, 1]
        }, {
          quote: "glared",
          connotation:
          attribution: [0, 1]
        }, {
          quote: "rolled their eyes",
          connotation:
          attribution: [0, 1] */
        }, {

          quote: "fiercest pummeling",
          connotation: 9,
          attribution: [1]
        }, {
          quote: "swinging immediately",
          connotation: 7,
          attribution: [1]
        }, {
          quote: "out of his depth",
          connotation: -8,
          attribution: [0]
        }, {
          quote: "unable",
          connotation: -6,
          attribution: [0]
        }, {
          quote: "landed blows",
          connotation: 6,
          attribution: [1]
        }, {
          quote: "loudest applause",
          connotation: 9,
          attribution: [1]
        }, {
          quote: "speaking up for",
          connotation: 5,
          attribution: [0]
        }, {
          quote: "hawkish",
          connotation: -7,
          attribution: [1]
        }, {
          quote: "toxic well of lefty political debates",
          connotation: -10,
          attribution: [2]
        },
        // adopting positions that would be familiar to any college dorm room debater.
        // How to quote something long like this?

        // How to adapts some context to quotes?
        {
          quote: "knocked",
          connotation: 4,
          attribution: [0]
        }, {
          quote: "snubbed",
          connotation: -4,
          attribution: [0]
        }, {
          quote: "worked harder",
          connotation: 7,
          attribution: [1]
        }, {
          quote: "still doesn't have a good answer",
          connotation: -6,
          attribution: [1]
        }, {
          quote: "still doesn't have a great answer",
          connotation: -5,
          attribution: [0]
        }, {
          quote: "didn't satisfy",
          connotation: -5,
          attribution: [1]
        }
      ]
    }
  ]
};

var getConnotationClass = function(score) {
  if (score > 7) {
    return "positive extreme";
  } else if (score > 4) {
    return "positive";
  } else if (score > 0) {
    return "positive mild";
  } else if (score >= -4) {
    return "negative mild";
  } else if (score >= -7) {
    return "negative";
  } else {
    return "negative extreme";
  }
};

var aggregateBias = function(keywords, attribution) {
  return _.reduce(keywords, function(memo, word) {
    return _.contains(word.attribution, attribution) ? memo + word.connotation : memo;
  }, 0);
}

var templateOutletFn = _.template(document.getElementById('outlet-template').innerHTML);
_.each(data.mediaOutlets, function(outlet) {
  var markup = templateOutletFn(outlet);
  document.getElementById(outlet.source.selector).innerHTML = markup;
});
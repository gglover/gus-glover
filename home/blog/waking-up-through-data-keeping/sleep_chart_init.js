var data = {
    labels: ["7/28", "7/29", "7/30", "7/31", "8/1"],
    datasets: [
        {
            label: "Sleep Time",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [50, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "Alarm Time",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
            label: "Out of Bet Time",
            fillColor: "rgba(0,187,205,0.2)",
            strokeColor: "rgba(0,187,205,1)",
            pointColor: "rgba(0,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

Chart.defaults.global.animation = false;
Chart.defaults.global.responsive = true;

var ctx = document.getElementById("sleep-chart").getContext("2d");
var myLineChart = new Chart(ctx).Line(data);
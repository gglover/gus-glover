/* DATA: 
bed times  : 1230 130, 130, 1130, 130, 1200
alarm times:  730 800, 730, 730, 800, 745
rise times :  830 905, 900, 900, 925, 920
*/

var hoursSlept = [7.0, 6.5, 6.0, 8.0, 6.5, 7.75];
var hoursToWake = [1.0, 1.125, 1.5, 1.5, 1.375, 1.625];
var dates = ["7/30", "7/31", "8/1", "8/2", "8/3", "8/4"];

var hoursSleptData = {
    labels: dates,
    datasets: [
        {
            label: "Sleep Time",
            fillColor: "rgba(255,100,0,0.1)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(200,200,200,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: hoursSlept,
        }
    ]
};

var hoursToWakeData = {
    labels: dates,
    datasets: [
        {
            label: "Sleep Time",
            fillColor: "rgba(0,100,255,0.1)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(200,200,200,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: hoursToWake,
        }
    ]
};

var label = "Hours";
Chart.defaults.global.animation = false;
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleBeginAtZero = true;
Chart.defaults.global.showTooltips = false;

var ctx = document.getElementById("hours-slept-chart").getContext("2d");
var myLineChart = new Chart(ctx).Line(hoursSleptData);

var ctx = document.getElementById("hours-to-wake-chart").getContext("2d");
var myLineChart = new Chart(ctx).Line(hoursToWakeData);

var totalHours = hoursToWake.reduce( function(sum, el) { return sum + el } );
document.querySelectorAll('#total-hours em')[0].innerHTML = totalHours;




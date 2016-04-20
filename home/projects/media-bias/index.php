<!DOCTYPE html>

<html>
  <head>
    <title>Media Bias Demo</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="icon" type="image/png" href="/images/favicon.png">
    <link href="style.css" type="text/css" rel="stylesheet" />
  </head>

  <body>
    <section id="npr"></section>
    <section id="cnn"></section>
    <section id="nyt"></section>
    <section id="msnbc"></section>
  </body>

  <script type="text/template" id="outlet-template">
    <h1><%= source.name %></h1>
    <a href="<%= source.link %>"><%= source.link %></a>
    <% _.each(data.attributions, function(attribution, index) { %>
    <div class="attribution">
      <% var aggregated = aggregateBias(keywords, index) %>
      <h3><%= attribution %> <span class="bias-score"><%= aggregated %></span></h3>
      <div class="bias-bar <%= getConnotationClass(aggregated) %>">
        <div class="bar-container">
          <div class="negative" style="width: <%= Math.abs(aggregated) %>%;"></div>
        </div>
        <div class="divider"></div>
        <div class="bar-container">
          <div class="positive" style="width: <%= Math.abs(aggregated) %>%;"></div>
        </div>
      </div>
      <ul>
      <% _.each(keywords, function(keyword) { %>
        <% if (_.contains(keyword.attribution, index)) { %>
          <li class="<%= getConnotationClass(keyword.connotation) %>">
            <%= keyword.quote %>
            <strong><%= keyword.connotation %></strong>
          </li>
        <% } %>
      <% }); %>
      </ul>
    </div>
    <% }); %>
  </script>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
  <script type="text/javascript" src="bias.js"></script>
</html>
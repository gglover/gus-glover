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
    <section id="msnbc"></section>
  </body>

  <script type="text/template" id="outlet-template">
    <h1><%= source.name %></h1>
    <ul>
    <% _.each(keywords, function(keyword) { %>
      <li><%= keyword.name %>: <%= keyword.connotation %></li>
    <% }); %>
    </ul>
  </script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
  <script type="text/javascript" src="bias.js"></script>
</html>
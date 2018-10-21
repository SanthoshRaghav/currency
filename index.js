document.onreadystatechange = function() {
  var state = document.readyState;
  state == "interactive" ? america() : null;
};

function america() {
  fetch("https://api.cryptonator.com/api/full/btc-usd")
    .then(res => res.json())
    .then(data => {
      var vwp = parseFloat(data.ticker.price);
      document.getElementById("vwp").innerText = vwp.toFixed(3);
      var increase = parseFloat(data.ticker.change);
      document.getElementById("increase").innerText = increase.toFixed(3);
      document.getElementById("money").innerText = data.ticker.target;
      options.xaxis.categories = data.ticker.markets.map(
        market => market.market
      );
      options.series[0].data = data.ticker.markets.map(market => market.price);
      options.series[1].data = data.ticker.markets.map(market => market.volume);
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    });
}
document.getElementById("america").addEventListener("click", function(e) {
  document.querySelector(".tab.active").classList.remove("active");
  e.target.classList.add("active");
  america();
});
document.getElementById("europe").addEventListener("click", function(e) {
  document.querySelector(".tab.active").classList.remove("active");
  e.target.classList.add("active");

  fetch("https://api.cryptonator.com/api/full/btc-eur")
    .then(res => res.json())
    .then(data => {
      var vwp = parseFloat(data.ticker.price);
      document.getElementById("vwp").innerText = vwp.toFixed(3);
      var increase = parseFloat(data.ticker.change);
      document.getElementById("increase").innerText = increase.toFixed(3);
      document.getElementById("money").innerText = data.ticker.target;
      options.xaxis.categories = data.ticker.markets.map(
        market => market.market
      );
      options.series[0].data = data.ticker.markets.map(market => market.price);
      options.series[1].data = data.ticker.markets.map(market => market.volume);
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    });
});
document.getElementById("dubai").addEventListener("click", function(e) {
  document.querySelector(".tab.active").classList.remove("active");
  e.target.classList.add("active");
  fetch("https://api.cryptonator.com/api/full/btc-aud")
    .then(res => res.json())
    .then(data => {
      var vwp = parseFloat(data.ticker.price);
      document.getElementById("vwp").innerText = vwp.toFixed(3);
      var increase = parseFloat(data.ticker.change);
      document.getElementById("increase").innerText = increase.toFixed(3);
      document.getElementById("money").innerText = data.ticker.target;
      options.xaxis.categories = data.ticker.markets.map(
        market => market.market
      );
      options.series[0].data = data.ticker.markets.map(market => market.price);
      options.series[1].data = data.ticker.markets.map(market => market.volume);
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    });
});
//graph
var options = {
  chart: {
    height: 350,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth"
  },
  series: [
    {
      name: "Price",
      data: []
    },
    {
      name: "Volume",
      data: []
    }
  ],

  xaxis: {
    categories: []
  }
};

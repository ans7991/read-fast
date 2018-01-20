var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var text = "So, this implementation of dynamic programming won't be efficient enough if we want to find Fibonacci numbers with too high indexes, like 100 for example. Why is that? The main reason is that the same Fibonacci number will get computed over and over again. This is because each Fibonacci number, except the first one, is used to compute two other numbers. This is a very common situation in different problems requiring dynamic programming - the same sub-problem is a building block for computing more than one bigger sub-problem. Instead of re-computing the value each time we need it we could store it once and reuse it from memory when we need it. This is what memoization is about.";
  var i = 0;
  var speed = req.query.speed;
  var time = speed == "fast" ? 200 : speed == "normal" ? 500 : 1000

  setInterval(function () {
    res.write("id: " + i + "\n");
    res.write("data: " + text.split(" ")[i++] + "\n\n");
  }, time);

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
});

module.exports = router;
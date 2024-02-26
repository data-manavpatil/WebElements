<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Digital Clock</title>
  <style>
    body {
      background-color: #282c34;
      color: #61dafb;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      font-family: 'Arial', sans-serif;
    }

    .Clock {
      position: absolute;
      color: #f10e0e;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3em;
      text-align: center;
    }
  </style>
</head>
<body>

<div id="DigitalClock" class="Clock"></div>

<script>
  function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = (h >= 12) ? "PM" : "AM";

    h = (h === 0 || h === 12) ? 12 : h % 12;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var timeString = `${h}:${m}:${s} ${session}`;
    document.getElementById('DigitalClock').innerText = timeString;
  }

  function updateClock() {
    showTime();
    setInterval(showTime, 1000);
  }

  updateClock();
</script>

</body>
</html>


const replacements = [
    { from: "Javascript must be enabled in order for you to use Gmail. However, it seems Javascript is either disabled or not supported by your browser. Learn more at our", to: "<h1>To use gmail without Javascript I recommend thunderbird mail</h1> <p>(aka icedove)</p><h1> It is free sofwtare</h1> (besides the logo, and that is why icedove exist)<br><a href=https://www.thunderbird.net/en-US/download/> <h1>Thunderbird Download</h1> <br> <br> <br><br><br> <br> <br><br><hr> " },
    
  ];

  replacements.forEach(({ from, to }) => {
    document.body.innerHTML = document.body.innerHTML.replace(new RegExp(from, "g"), to);
  });


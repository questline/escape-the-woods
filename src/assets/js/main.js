// Removes the Sugarcube UIBar
UIBar.destroy();
Config.passages.nobr = true;

// Adds the header to the page
$('<div id="header"><h1>Escape The Woods</h1></div>').prependTo(document.body);
$('<div id="footer"><h5>Story brought to you by <a href="https://vuwnu.com">Vuwnu</a><br>Visit the <a href="https://github.com/questline/escape-the-woods">GitHub repo</a> for this site</h5></div>').appendTo(document.body);

//Adds custom head text
$('head').append(tale.get("HeadAppend").text);

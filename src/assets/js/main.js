// Removes the Sugarcube UIBar
UIBar.destroy();
Config.passages.nobr = true;

// Adds the header to the page
$('<div id="header"><h1>Questline</h1></div>').prependTo(document.body);
$('<div id="footer"><h5>a <a href="https://vaynwork.com">Vaynwork</a> project<br>Visit the <a href="https://github.com/vaynwork/questline">GitHub repo</a> for this site</h5></></div>').appendTo(document.body);

//Adds custom head text
$('head').append(tale.get("HeadAppend").text);

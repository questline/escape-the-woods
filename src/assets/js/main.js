// Removes the Sugarcube UIBar
UIBar.destroy();
Config.passages.nobr = true;

//Adds custom head text
$('head').append(tale.get("HeadAppend").text);

var shows;
var sortedShows;

const request = async () => {
  
  const response = await fetch('shows.json');
  shows = await response.json();
  //console.log(shows);

  sortedShows = shows.sort(function(a, b){return 0.5 - Math.random()});
  console.log(sortedShows);
  printSortedShows(sortedShows);
}

request();

function printSortedShows(sortedShows)
{
  var html = "<ol>";
  for(i=0; i<64; i++)
  {
    html += "<li><a href=\"" + sortedShows[i].url + "\" target=\"_blank\">" + sortedShows[i].name + "</></li>";
  }
  html += "</ol>";

  document.getElementById("demo").innerHTML = html;
}

/*
var btnFindAnother = document.querySelector("#btnFindAnother");

btnFindAnother.onclick = function(){
  getNewSupe(heroes);
};

function getNewSupe(superheroList)
{
  var rando = Math.floor(Math.random() * superheroList.length);
  var randoSupe = superheroList[rando];

  var supeName   = randoSupe.name;
  var photo      = randoSupe.images.md;
  var appearance = randoSupe.biography.firstAppearance;
  var occupation = randoSupe.work.occupation;


  document.querySelector("#name").innerHTML = supeName;
  document.querySelector("#photo").src = photo;
  document.querySelector("#appearance").innerHTML = appearance;
  document.querySelector("#occupation").innerHTML = occupation;
}
*/
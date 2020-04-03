var shows;
var sortedShows;

const request = async () => {
  
  const response = await fetch('shows.json');
  shows = await response.json();
  //console.log(shows);

  sortedShows = shows.sort(function(a, b){return 0.5 - Math.random()});
  //console.log(sortedShows);
  printSortedShows(sortedShows);
}

request();

function printSortedShows(sortedShows)
{
  var left = "";
  var right = "";
  let match = -1;
  let contenderCount = 0;

  for(i=0; i<32; i++)
  {
    if(contenderCount === 0)
    {
      match++;
    }
    if(i<16)
    {
    left += "<div class=\"match match-" + match + "\">";
    left += "<div class=\"status\">";
    left += "    <span>Winner: Option X</span>";
    left += "</div>";
    left += "<div class=\"contenders\">";
    left += "    <div class=\"contender\">";
    left +=      sortedShows[i].name;
    left += "     <div class=\"dropdown-content\">";
    left += "            <a href=\"" + sortedShows[i].url + "\" target=\"_blank\">Listen To Theme</a>";
    left += "            <a href=\"#\">Vote</a>";
    left += "        </div>";
    left += "    </div>";
    i++;
    left += "    <div class=\"contender\">";
    left +=      sortedShows[i].name;
    left += "        <div class=\"dropdown-content\">";
    left += "            <a href=\"" + sortedShows[i].url + "\" target=\"_blank\">Listen To Theme</a>";
    left += "            <a href=\"#\">Vote</a>";
    left += "        </div>";
    left += "    </div>";
    left += "</div>";
    left += "</div>";
    }
    if(i === 16) { match = 0; }
    if(i>=16)
    {
    right += "<div class=\"match match-" + match + "\">";
    right += "<div class=\"status\">";
    right += "    <span>Winner: Option X</span>";
    right += "</div>";
    right += "<div class=\"contenders\">";
    right += "    <div class=\"contender\">";
    right +=      sortedShows[i].name;
    right += "     <div class=\"dropdown-content\">";
    right += "            <a href=\"" + sortedShows[i].url + "\" target=\"_blank\">Listen To Theme</a>";
    right += "            <a href=\"#\">Vote</a>";
    right += "        </div>";
    right += "    </div>";
    i++;
    right += "    <div class=\"contender\">";
    right +=      sortedShows[i].name;
    right += "        <div class=\"dropdown-content\">";
    right += "            <a href=\"" + sortedShows[i].url + "\" target=\"_blank\">Listen To Theme</a>";
    right += "            <a href=\"#\">Vote</a>";
    right += "        </div>";
    right += "    </div>";
    right += "</div>";
    right += "</div>";
    }
  }

  /*
  for(i=0; i<64; i++)
  {
    html += "<li><a href=\"" + sortedShows[i].url + "\" target=\"_blank\">" + sortedShows[i].name + "</></li>";
  }
  html += "</ol>";
  */

  document.getElementById("left").innerHTML = left;
  document.getElementById("right").innerHTML = right;
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
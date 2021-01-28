const words = [
  "size",
  "reason",
  "applied",
  "snake",
  "particle",
  "those",
  "mean",
  "gray",
  "single",
  "spend",
  "notice",
  "forgot",
  "slope",
  "about",
  "cave",
  "chapter",
  "element",
  "equipment",
  "part",
  "path",
  "nation",
  "was",
  "metal",
  "product",
  "expire",
  "mission",
  "nest",
  "temple",
  "property",
  "hall",
  "death",
  "apply",
  "steady",
  "energy",
"doctrine",
"document",
"domestic",
"dominant",
"dominate",
"doubtful",
"dramatic",
"dressing",
"dropping",
"duration",
"dynamics",
"economic",
// earnings
// educated
// efficacy
// eighteen
// election
// electric
// eligible
// emerging
// emphasis
// employee
// endeavor
// engaging
// engineer
// enormous
// entirely
// entrance
// envelope
// equality
// equation
// estimate
// evaluate
// eventual
// everyday
// everyone
// evidence
// exchange
// exciting
// exercise
// explicit
// exposure
// extended
// external
"facility",
"familiar",
"featured",
"feedback",
"festival",
"finished",
"firewall",
"flagship",
"flexible",
"floating",
"football",
"foothill",
"forecast",
"foremost",
"formerly",
"fourteen",
"fraction",
"franklin",
"frequent",
"friendly",
"frontier",
"function",
"generate",
"generous",
"genomics",
"goodwill",
"governor",
"graduate",
"graphics",
"grateful",
"guardian",
"guidance",
"handling",
"hardware",
"heritage",
"homeless",
"homepage",
"hospital",
"humanity",
// identify
// identity
// ideology
// imperial
// incident
// included
// increase
// indicate
// indirect
// industry
// informal
// informed
// inherent
// initiate
// innocent
// inspired
// instance
// integral
// intended
// interact
// interest
// interior
// internal
// interval
// intimate
// intranet
// invasion
// involved
// isolated
// judgment
// judicial
// junction
// keyboard
// landlord
// language
// laughter
// learning
// leverage
// lifetime
// lighting
// likewise
// limiting
// literary
// location
// magazine
// magnetic
// maintain
// majority
// marginal
// marriage
// material
// maturity
// maximize
// meantime
// measured
// medicine
// medieval
// memorial
// merchant
// midnight
// military
// minimize
// minister
// ministry
// minority
// mobility
// modeling
// moderate
// momentum
// monetary
// moreover
// mortgage
// mountain
// mounting
// movement
// multiple
// national
// negative
// nineteen
// northern
// notebook
// numerous
// observer
// occasion
// offering
// official
// offshore
// operator
// opponent
// opposite
// optimism
// optional
// ordinary
// organize
// original
// overcome
// overhead
// overseas
// overview
// painting
// parallel
// parental
// patented
// patience
// peaceful
// periodic
// personal
// persuade
// petition
// physical
// pipeline
// platform
// pleasant
// pleasure
// politics
// portable
// portrait
// position
// positive
// possible
// powerful
// practice
// precious
// pregnant
// presence
// preserve
// pressing
// pressure
// previous
// princess
// printing
// priority
// probable
// probably
// producer
// profound
// progress
// property
// proposal
// prospect
// protocol
// provided
// provider
// province
// publicly
// purchase
// pursuant
// quantity
// question
// rational
// reaction
// received
// receiver
// recovery
// regional
// register
// relation
// relative
// relevant
// reliable
// reliance
// religion
// remember
// renowned
// repeated
// reporter
// republic
// required
// research
// reserved
// resident
// resigned
// resource
// response
// restrict
// revision
// rigorous
// romantic
// sampling
// scenario
// schedule
// scrutiny
// seasonal
// secondly
// security
// sensible
// sentence
// separate
// sequence
// sergeant
// shipping
// shortage
// shoulder
// simplify
// situated
// slightly
// software
// solution
// somebody
// somewhat
// southern
// speaking
// specific
// spectrum
// sporting
// standard
// standing
// standout
// sterling
// straight
// strategy
// strength
// striking
// struggle
// stunning
// suburban
// suitable
// superior
// supposed
// surgical
// surprise
// survival
// sweeping
// swimming
// symbolic
// sympathy
// syndrome
// tactical
// tailored
// takeover
// tangible
// taxation
// taxpayer
// teaching
// tendency
// terminal
// terrible
// thinking
// thirteen
// thorough
// thousand
// together
// tomorrow
// touching
// tracking
// training
// transfer
// traveled
// treasury
// triangle
// tropical
// turnover
// ultimate
// umbrella
// universe
// unlawful
// unlikely
// valuable
// variable
// vertical
// victoria
// violence

"warranty",
"weakness",
"weighted",
"whatever",
"whenever",
"wherever",
"wildlife",
"wireless",
"withdraw",
"workshop",

];

var count = 0;
var winCount = 0;
const word = words[Math.floor(Math.random() * words.length)];
const wordArray = word.split("");
var btnBox = document.querySelector(".btnBox");
var initialBorder = btnBox.style.border;
var initialBoxShadow = btnBox.style.boxShadow;

const wordFinder = () => {
  wordLength = word.length;
  document.getElementsByClassName("clickme")[0].style.display = "none";
  dashGenerator();
};

const dashGenerator = () => {
  let dashHtml = "";
  dashHtml += wordArray.reduce((spanHtml, presentLetter) => {
    spanHtml += `<input disabled class = 'inputans'>`;
    return spanHtml;
  }, "");

  var dash = document.querySelector(".namespan");
  dash.innerHTML = dashHtml;
};

wordFinder();
const checker = (el) => {
  var checkName = el.innerHTML.toLowerCase();
  var wordString = wordArray.toString();
 
  console.log("fatal you......NKS HACKER008");
  console.log("who the hell are you to check our console");

  if (wordString.includes(checkName)) {
   

    winCount = 1;
    for (let j = 0; j < word.length; j++) {
      if (document.getElementsByTagName("input")[j].value.length != 0) {
        winCount += 1;
      }
    }
    if (winCount == word.length) {
    
      var shutDownCorrect = setTimeout(() =>{
        var overlayWin = document.querySelector(".overlay-win");
        overlayWin.style.bottom = 0;
        overlayWin.style.height = `${100}%`;
      }, 100);
    }

    for (let i = 0; i < word.length; i++) {
      if (word[i].toString() == checkName) {
        document.getElementsByTagName("input")[i].value = el.innerHTML;
      }
    }
    el.disabled = true;
    correctBorder(btnBox);

  } else {
    count += 1;
    console.log(count);
    var head = document.querySelector(".head");
    var body = document.querySelector(".body");
    var hand1 = document.querySelector(".hand1");
    var hand2 = document.querySelector(".hand2");
    var leg1 = document.querySelector(".leg1");
    var leg2 = document.querySelector(".leg2");

    if (count == 1) {
      head.style.transform = `scale(${1})`;
    } else if (count == 2) {
      body.style.transform = `scale(${1})`;
    } else if (count == 3) {
      hand1.style.transform = `scale(${1})`;
    } else if (count == 4) {
      hand2.style.transform = `scale(${1})`;
    } else if (count == 5) {
      
      leg1.style.transform = `scale(${1})`;
    } else if (count == 6) {
      leg2.style.transform = `scale(${1})`;
  

      var shutDownWrong = setTimeout(() => {
        var overlay = document.querySelector(".overlay");
        overlay.style.bottom = 0;
        overlay.style.height = `${100}%`;
      }, '2000');
    }

    el.disabled = true;
   
    wrongBorder(btnBox);
   

  }
};

const correctBorder = (Boxdef) =>{


    Boxdef.style.border = `${3}px solid #0AAB41`;
    Boxdef.style.boxShadow = ` ${2}px ${2}px ${2}px #0AAB41, inset ${2}px ${2}px ${6}px #0AAB41;`;
    var setBackCorrect = setTimeout(() => {
      Boxdef.style.border = initialBorder;
      Boxdef.style.boxShadow = initialBoxShadow;
    }, 1000);


}

const wrongBorder = (Boxdef) =>{

  
    Boxdef.style.border = `${3}px solid #DC0C18`;
    Boxdef.style.boxShadow = ` ${2}px ${2}px ${2}px #DC0C18, inset ${2}px ${2}px ${6}px #DC0C18;`
   
    var setBackWrong = setTimeout(() => {
      Boxdef.style.border = initialBorder;
      Boxdef.style.boxShadow = initialBoxShadow;
    }, 1000);

}
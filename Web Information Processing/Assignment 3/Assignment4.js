var chars = [];
var qs = [];
var select = [];
$(document).ready(function () {
    $(".gif").hover(function () {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.png$/i, ".gif"));
    }, function () {
        var src = $(this).attr("src");
        $(this).attr("src", src.replace(/\.gif$/i, ".png"));
    });
    var count = 0;
    $('td').each(function () {
        var src = $(this).text();
        //$(this).prepend('<img class="img-responsive" src="media/' + src + '.png "</img> <br>'); //adds images according to letters in table
        chars[count] = src;
        count++;
    });
});

function checkBox() {
    document.getElementById("tabbys").style.display = "hidden";
    var checkNum = $('input:checkbox:checked').length;
    if (checkNum < 10) {
        alert("You must pick at least 10 quiz options :)");
    }
    else if (checkNum > 10) {
        alert("You can only pick 10 quiz options :)");
    }
    else {
        document.getElementById("StartQ").style.display = "hidden";
        for (var i = 0; i < 10; i++) {
            var ticked = $('input:checkbox:checked');
            select[i] = ticked[i].value;
            var lindextem = chars.indexOf(select[i]);
            GenQuestion(i, lindextem);
        }
    }
}

function GenQuestion(i, lindextem) {
    var q1 = chars[i];
    var temp = random(0, 45);
    var chartemp = 0;
    if (temp != lindextem[i]) {
        var a2 = chartemp;
    }
    else if ((chartemp != lindextem[i]) && (chartemp != q1) && (chartemp != a2)) {
        var a3 = chartemp;
    }
    else if ((chartemp != lindextem[i]) && (chartemp != q1) && (chartemp != a2) && (chartemp)) {
        var a4 = chartemp;
    }
  var HTMLQ = 'Q '+ i + '. <div class = "row"> <div id = "Q" '+ i + '">';
    HTMLQ += '<ol type="a"><div> <li><img><input type="radio"</li> <li><img><input type="radio"</li> <li><img><input type="radio"</li> <li><img><input type="radio"</li></div></ul>';
    $("#q" + i + "").append(HTMLQ);
   // $("#q"+i+"").append('<img class="img-responsive" src="media/' + src + '.png "</img> <br>');
 
}
function random(min, max) {
    return Math.floor(Math.random(max - min) + min);
}
function getPercent() {
    var q1 = $("#q1").value;
    if (select[0] == value) {
        score++;
    }
}
'Which is the character a?<ul style="margin-top: 1pt"><li><input type="radio" value="あ">あ</li><li><input type="radio" value="お">お</li><li><input type="radio" value="え">え</li></ul>'
/*<!-- Begin
// Insert number of questions
var numQues = 4;

// Insert number of choices in each question
var numChoi = 3;

// Insert number of questions displayed in answer area
var answers = new Array(3);

// Insert answers to questions
answers[0] = "あ";
answers[1] = "i";
answers[2] = "e";
answers[3] = "う";

// Do not change anything below here ...
function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}
//  End -->*/
/*$(function() {
    $('a').hover(function() {
      $(this).attr('src','Gifs/a.gif');
    },function() {
      $(this).attr('src','Images/a.png');
    }
)});*/
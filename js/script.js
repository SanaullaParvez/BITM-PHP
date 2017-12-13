   //
   // var paragraphs = document.getElementsByTagName('p');
   // for(var eachParagraph in paragraphs){
   //     document.write(paragraphs[eachParagraph].innerHTML);
   //     document.write('<br/>');
   // }
   //
   // for(x=0;x<=paragraphs.length;x++){
   //     document.write(paragraphs[x].innerHTML+'<br/>')
   // }
/**
 * Created by Web App Develop-PHP on 12/13/2017.
 */


var myFirstName = document.getElementById('first_name');
var myLastName = document.getElementById('last_name');

function nameSummation(firstName,lastName){
   var outputFullName = document.getElementById('output_full_name');
   outputFullName.innerHTML = firstName +' '+ lastName;
}

myFirstName.onkeyup = function () {
    var outputFirstName = document.getElementById('output_first_name');
    outputFirstName.innerHTML = this.value;
}

myLastName.onkeyup = function () {
   var outputFirstName = document.getElementById('output_last_name');
   outputFirstName.innerHTML = this.value;
}

myLastName.onblur = function () {
   var outputFullName = document.getElementById('output_full_name');
   outputFullName.innerHTML = myFirstName.value +' '+ myLastName.value;
}




var myButton = document.getElementById('button');

myButton.onclick = function () {
   var firstName = document.getElementById('first-name').value;
   var lastName = document.getElementById('last-name').value;
   var lastName = document.getElementById('last-name').value;

}


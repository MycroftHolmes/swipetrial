var scoreboardA = 0;
var scoreboardB = 0;
var P1="";
var P2="";
var tap=0;
var lex=100;
var title1="";
var correctCounter=0;
var noDouble = [100];
var tturn = 2;
var headcolor = 0;
var POne3 = 0;
var POne2 = 0;
var POne1 = 0;
var PTwo3 = 0;
var PTwo2 = 0;
var PTwo1 = 0;
var P1steal = 0;
var P2steal = 0;
var T1 = 0;
var randomNum = 0;
var uw = [];

var newWord = new Array ();
	newWord [0] = "Rescue";
	newWord [1] = "Response";
	newWord [2] = "Respond";
	newWord [3] = "Blow out";
	newWord [4] = "Control Room";
	newWord [5] = "Cause";
	newWord [6] = "Investigate";
	newWord [7] = "Inform";
	newWord [8] = "Manage";
	newWord [9] = "React";
	newWord [10] = "Injured";
	newWord [11] = "Attend to";
	newWord [12] = "Crew";
	newWord [13] = "Scramble";
	newWord [14] = "Pipeline";
	newWord [15] = "To Handle";
	newWord [16] = "Increase";
	newWord [17] = "Patrol";
	newWord [18] = "Premises";
	newWord [19] = "Arrest";
	newWord [20] = "Fence";

var Hint = new Array ();
	Hint [0] = "The fireman ________ the man from the fire."; //Rescue1
	Hint [1] = "syn. 'save'";		//Rescue2
	Hint [2] = "عل";//Rescue 3
	Hint [3] = "There was a quick _______ to the oil spill."; //Response1
	Hint [4] = "syn. 'reply'"; //Response2
	Hint [5] = "Response Arabic Translation"; //Response3
	Hint [6] = "Abulla will _______ to the question."; //Respond1
	Hint [7] = "syn. 'answer'"; //Respond2
	Hint [8] = "Respond Arabic trans"; //Respond3
	Hint [9] = "The ____ ___ destroyed the refinery."; //Blow out1
	Hint [10] = "syn. 'explosion'"; //Blow out2
	Hint [11] = "Blow out Arabic Translation"; //Blow out3
	Hint [12] = "There are many gauges and computers in the _____ _____."; //Control Room1
	Hint [13] = "syn. 'headquarters'"; //Control Room2
	Hint [14] = "Control Room Arabic Translation"; //Control Room3
	Hint [15] = "A wet floor was the _____ of the accident."; //Cause1
	Hint [16] = "syn. 'reason for'"; //Cause2
	Hint [17] = "Cause Arabic trans."; //Cause3
	Hint [18] = "The security guards will ________ the incident."; //Investigate1
	Hint [19] = "syn. 'examine'"; //Investigate2
	Hint [20] = "Investigate Arabic trans."; //Investigate3
	Hint [21] = "The teachers will _______ the students of the final exam time."; //Inform 1
	Hint [22] = "syn. 'notify'"; //Inform 2
	Hint [23] = "Inform Arabic trans."; //Inform 3 
	Hint [24] = "Massoud is the boss, so he must ______ the company."; //Manage 1
	Hint [25] = "syn. 'control'"; //Manage 2
	Hint [26] = "Manage Arabic trans."; //Manage 3 
	Hint [27] = "A policeman must _____ quickly to a problem."; //React 1
	Hint [28] = "<br/>syn. 'respond'"; //React 2
	Hint [29] = "فعل"; //React 3 
	Hint [30] = "He was hurt on the job. He ______ his arm."; //Injured 1
	Hint [31] = "syn. 'hurt'"; //Injured 2
	Hint [32] = "Injured Arabic trans."; //Injured 3 
	Hint [33] = "The housekeeper's job is to ______ __ cooking and cleaning."; //Attend to 1
	Hint [34] = "syn. 'do'"; //Attend to 2
	Hint [35] = "Attend to Arabic trans."; //Attend to 3 
	Hint [36] = "The sailboat has a six-person _____."; //Crew 1
	Hint [37] = "syn. 'team'"; //Crew 2
	Hint [38] = "Crew Arabic trans."; //Crew 3 
	Hint [39] = "The letters of my name are _______: DBALU. My name is Abdul."; //Scramble 1
	Hint [40] = "syn. 'mixed'"; //Scramble 2
	Hint [41] = "Scramble Arabic trans."; //Scramble 3 
	Hint [42] = "Dolphin Energy is building a _______ from Qatar to the UAE."; //Pipeline 1
	Hint [43] = "syn. 'tube'"; //Pipeline 2
	Hint [44] = "Pipline Arabic Translation"; //Pipeline 3 
	Hint [45] = "We have a new receptionist. His job is to _____ telephone calls."; //To Handle 1
	Hint [46] = "syn. 'take care of'"; //To Handle 2
	Hint [47] = "To Handle Arabic Trans."; //To Handle 3 
	Hint [48] = "I cannot hear the music. Could you _____ the volume?"; //Increase 1
	Hint [49] = "syn. 'make bigger'"; //Increase 2
	Hint [50] = "Increase Arabic Trans."; //Increase 3 
	Hint [51] = "The security guard's job is to ______ the hallways."; //Patrol 1
	Hint [52] = "syn. 'watch'"; //Patrol 2
	Hint [53] = "Patrol Arabic trans."; //Patrol 3 
	Hint [54] = "The fireman ordered everyone to leave the ______."; //Premises 1
	Hint [55] = "syn. 'place'"; //Premises 2
	Hint [56] = "Premises Arabic trans."; //Premises 3
	Hint [57] = "Policemen must ______ thieves."; //Arrest 1
	Hint [58] = "syn. 'apprehend', 'catch'"; //Arrest 2
	Hint [59] = "Arrest Arabic Trans."; //Arrest 3
	Hint [60] = "There is a _____ to keep people out of the refinery."; //Fence 1
	Hint [61] = "syn. 'wall'"; //Fence 2
	Hint [62] = "Fence Arabic Trans."; //Fence 3
	
function hint()	{
	
	if (tap==0 && lex==100) {
	
	document.getElementById("hintbox").innerHTML = "You must press the 'New Word' button first";
	tap++;
	
	}
	
	else if (lex==100) {
	
	document.getElementById("hintbox").innerHTML = "You must press the 'New Word' button first";
	
	}
	
	else if (tap==0) {
	
	document.getElementById("hintbox").innerHTML = Hint[lex*3];
	document.getElementById("hintbox").style.fontSize = "32px";
	tap++;
	}
	
	else if (tap==1) {
	
	document.getElementById("hintbox").innerHTML = Hint[lex*3+1];
	document.getElementById("hintbox").style.fontSize = "32px";
	tap++;
	}
	
	else if (tap==2) {
	
	document.getElementById("hintbox").innerHTML = Hint[(lex*3+2)];
	document.getElementById("hintbox").style.fontSize = "62px";
	tap++;
	}	
	
	}

	
	
	
function wordy() {
		randomNum = Math.floor((Math.random() * newWord.length));
		document.getElementById("word").innerHTML = newWord[randomNum];

		document.getElementById("hintbox").innerHTML = "";
			
	
		lex = randomNum;
	
		tap = 0;
	
		correctCounter = 0;
		}
		

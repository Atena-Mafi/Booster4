/*
 John and Mike both play basketball on different teams. In the latest three games:
 
 1- John's team scored 89, 120, and 103 points.
 2- Mike's team scored 116, 94, and 123 points.

 Calculate the average score for each team.
 Determine which team wins on average (highest average score), and print the winner to the console. Also, include the average score in the output.
 Then, change the scores to show different winners. 
*/


let johnTeamScores=[89,120,103];
let mikeTeamScores=[116,94,123];

 let averageJohn=(johnTeamScores.reduce((num1,num2)=>num1+num2,0))/johnTeamScores.length;
 let averageMike=(mikeTeamScores.reduce((num1,num2)=>num1+num2,0))/mikeTeamScores.length;

 if (averageJohn>averageMike) {
    console.log(`John's team is winner. Average score : ${averageJohn}`);
    
 }else if(averageJohn<averageMike){
    
    
    console.log(`Mike's team is winner. Average score : ${averageMike}`);

 }else{
    console.log(`Both teams are winner. Average score : ${averageMike}`);

 }
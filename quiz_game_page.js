player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0 ;
player2_score = 0 ;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn -" + player2_name;

function send() {
    get_question = document.getElementById("word").value;
    question = get_question.toLowerCase();
    console.log("The question is " + question);

    charAt1 = question.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = question.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = question.length-1; 
    charAt3 = question.charAt(length_minus_1);
    console.log(charAt3);

    question_word = "<h4 id = 'word_display'> Question." + get_question + "</h4>";
    input_box = "<br> answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br> <br> <button class = ' btn btn-info' onclick = 'check()'>Check</button> <br> <br>";

    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}


console.log('My Script is loaded')

let flag = true;

let gameOver = false;


function reload(){
    location.reload();
}

function updateBtn(btnNumber){

    if(!gameOver){
        console.log('Inside updateBtn function')
        console.log('Button number: '+btnNumber)
        
        const btn = document.getElementById('game_btn_'+btnNumber);
    
        if(btn.innerText === ""){
            if(flag){
                btn.innerText = 'X';
                btn.style.color = 'green'
                flag = false;
            }else{
                btn.innerText = 'O';
                btn.style.color = 'red'
                flag = true;
            }
        }
    
        gameCheck();
    }
}


const winner_tag_container = document.getElementById('winner_tag_container');
const straight_line_btn1_3 = document.getElementById('straight_line_btn1_3');
const straight_line_btn4_6 = document.getElementById('straight_line_btn4_6');
const straight_line_btn7_9 = document.getElementById('straight_line_btn7_9');
const straight_line_btn_vr_1_7 = document.getElementById('straight_line_btn_vr_1_7');
const straight_line_btn_vr_2_8 = document.getElementById('straight_line_btn_vr_2_8');
const straight_line_btn_vr_3_9 = document.getElementById('straight_line_btn_vr_3_9');
const straight_line_btn_di_1_9 = document.getElementById('straight_line_btn_di_1_9');
const straight_line_btn_di_3_7 = document.getElementById('straight_line_btn_di_3_7');
const playAgainBtn = document.getElementById('playAgainBtn')

function gameCheck(){

    
    const game_btn_1 = document.getElementById('game_btn_1').innerText;
    const game_btn_2 = document.getElementById('game_btn_2').innerText;
    const game_btn_3 = document.getElementById('game_btn_3').innerText;
    const game_btn_4 = document.getElementById('game_btn_4').innerText;
    const game_btn_5 = document.getElementById('game_btn_5').innerText;
    const game_btn_6 = document.getElementById('game_btn_6').innerText;
    const game_btn_7 = document.getElementById('game_btn_7').innerText;
    const game_btn_8 = document.getElementById('game_btn_8').innerText;
    const game_btn_9 = document.getElementById('game_btn_9').innerText;

    console.log('Inside gameCheckFunction')
    console.log(game_btn_1 +", "+game_btn_2+", "+game_btn_3)
    if(game_btn_1 === game_btn_2 && game_btn_2=== game_btn_3 && game_btn_3 === game_btn_1 && game_btn_1 != "" && game_btn_2 != "" && game_btn_3 != ""){
        console.log(game_btn_1 + ' Player is the winner!!!');
        winner_tag_container.innerText = game_btn_1 + ' Player is the winner!!!'
        if(game_btn_1 === 'X'){
            winner_tag_container.style.color = 'green';
        }else{
            winner_tag_container.style.color = 'red';
        }
        straight_line_btn1_3.classList.add('show');
        gameOver = true;
        playAgainBtn.classList.add('show')
    }
    if(game_btn_4 === game_btn_5 && game_btn_5== game_btn_6 && game_btn_6 == game_btn_4 && game_btn_4 != "" && game_btn_5 != "" && game_btn_6 != ""){
        console.log(game_btn_1 + ' Player is the winner!!!');
        winner_tag_container.innerText = game_btn_4 + ' Player is the winner!!!'
        if(game_btn_4 === 'X'){
            winner_tag_container.style.color = 'green';
        }else{
            winner_tag_container.style.color = 'red';
        }
        straight_line_btn4_6.classList.add('show');
        gameOver = true;
        playAgainBtn.classList.add('show')
    }
    if(game_btn_7 === game_btn_8 && game_btn_8== game_btn_9 && game_btn_9 == game_btn_7 && game_btn_7 != "" && game_btn_8 != "" && game_btn_9 != ""){
        console.log(game_btn_1 + ' Player is the winner!!!');
        winner_tag_container.innerText = game_btn_7 + ' Player is the winner!!!'
        if(game_btn_7 === 'X'){
            winner_tag_container.style.color = 'green';
        }else{
            winner_tag_container.style.color = 'red';
        }
        straight_line_btn7_9.classList.add('show');
        gameOver = true;
        playAgainBtn.classList.add('show')
    }
    if(game_btn_1 === game_btn_4 && game_btn_4== game_btn_7 && game_btn_7 == game_btn_1 && game_btn_7 != "" && game_btn_4 != "" && game_btn_1 != ""){
        console.log(game_btn_1 + ' Player is the winner!!!');
        winner_tag_container.innerText = game_btn_1 + ' Player is the winner!!!'
        if(game_btn_1 === 'X'){
            winner_tag_container.style.color = 'green';
        }else{
            winner_tag_container.style.color = 'red';
        }
        straight_line_btn_vr_1_7.classList.add('show');
        gameOver = true;
        playAgainBtn.classList.add('show')
    }
    if(game_btn_2 === game_btn_5 && game_btn_5== game_btn_8 && game_btn_8 == game_btn_2 && game_btn_2 != "" && game_btn_5 != "" && game_btn_8 != ""){
        console.log(game_btn_2 + ' Player is the winner!!!');
        winner_tag_container.innerText = game_btn_2 + ' Player is the winner!!!'
        if(game_btn_2 === 'X'){
            winner_tag_container.style.color = 'green';
        }else{
            winner_tag_container.style.color = 'red';
        }
        straight_line_btn_vr_2_8.classList.add('show');
        gameOver = true;
        playAgainBtn.classList.add('show')
    }
    if(game_btn_3 === game_btn_6 && game_btn_6== game_btn_9 && game_btn_9 == game_btn_3 && game_btn_3 != "" && game_btn_6 != "" && game_btn_9 != ""){
        console.log(game_btn_3 + ' Player is the winner!!!');
        winner_tag_container.innerText = game_btn_3 + ' Player is the winner!!!'
        if(game_btn_3 === 'X'){
            winner_tag_container.style.color = 'green';
        }else{
            winner_tag_container.style.color = 'red';
        }
        straight_line_btn_vr_3_9.classList.add('show');
        gameOver = true;
        playAgainBtn.classList.add('show')
    }
    if(game_btn_1 === game_btn_5 && game_btn_5== game_btn_9 && game_btn_9 == game_btn_1 && game_btn_1 != "" && game_btn_5 != "" && game_btn_9 != ""){
        console.log(game_btn_1 + ' Player is the winner!!!');
        winner_tag_container.innerText = game_btn_1 + ' Player is the winner!!!'
        if(game_btn_1 === 'X'){
            winner_tag_container.style.color = 'green';
        }else{
            winner_tag_container.style.color = 'red';
        }
        straight_line_btn_di_1_9.classList.add('show');
        gameOver = true;
        playAgainBtn.classList.add('show')
    }
    if(game_btn_3 === game_btn_5 && game_btn_5== game_btn_7 && game_btn_7 == game_btn_3 && game_btn_3 != "" && game_btn_5 != "" && game_btn_7 != ""){
        console.log(game_btn_3 + ' Player is the winner!!!');
        winner_tag_container.innerText = game_btn_3 + ' Player is the winner!!!'
        if(game_btn_3 === 'X'){
            winner_tag_container.style.color = 'green';
        }else{
            winner_tag_container.style.color = 'red';
        }
        straight_line_btn_di_3_7.classList.add('show');
        gameOver = true;
        playAgainBtn.classList.add('show')
    }
}
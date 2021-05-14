let score = 0;
let questionNum = 0;
let realQue = questionNum + 1;
$('#start').click(function()
{
    $('#welcome').toggleClass('d-none')
    $('.box').toggleClass('d-none')
    sendApirequest();
})
async function sendApirequest() {
    // fetching api
    spinner.removeAttribute('hidden');
    // let response = await fetch('https://opentdb.com/api.php?amount=10');
    // let response = await fetch('partials/_questions.json');
    let response = await fetch('https://api.npoint.io/8e1e172fb315d2e60dc0');
    let data = await response.json();
    spinner.setAttribute('hidden', '');
    // Display fetched api questions
    Display(data);
}

function Display(data)
{
    let realQue = questionNum + 1;
    let questionNumber = document.getElementById('Questions');
    let question = document.getElementById('question');
    let options = document.getElementById('options');

    // display score
    document.getElementById('score').innerHTML=` Score: ${score}`

    // display question number
    console.log(data.results.length);
    
    if(questionNum<=data.results.length-1){      
    questionNumber.innerHTML=`Question ${realQue} of ${data.results.length}`
    }

    // display question
    question.innerHTML=`<h4>${data.results[questionNum].question}</h4>`

    // display Options
    options.innerHTML=` <div class="optbox1">
    <h5 class="" id="option1">${data.results[questionNum].answers[0]}</h5>
</div>
<div class="optbox2">
    <h5 class="" id="option2">${data.results[questionNum].answers[1]}</h5>
</div>
<div class="optbox3">
    <h5 class=" "id="option3">${data.results[questionNum].answers[2]}</h5>
</div>
<div class="optbox4">
    <h5 class="" id="option4">${data.results[questionNum].answers[3]}</h5>
</div>`


    //check for correct answer
    let option1 = document.getElementById('option1');
    console.log(option1.innerText);
    
    let option2 = document.getElementById('option2');
    let option3 = document.getElementById('option3');
    let option4 = document.getElementById('option4');

    // checking right answer
    
    option1.addEventListener('click', function () {
        // console.log(option1.innerText);
        let userAns = option1.innerText;
        // console.log(data.results[q]);

        if (userAns == data.results[questionNum].correct_answer) {
            // console.log('this is correct answer');
            // $('#option1').toggleClass('right-answer')
            $('#option1').toggleClass('right-answer')
            // $('#option1').toggleClass('mt-2')
            setTimeout(function () { 
                
                score++;
                questionNum++;
                if(questionNum<=data.results.length-1){
                    Display(data);}
                    else
                    {
                        document.getElementById('alert').innerHTML=`<div class="alert alert-info">
                        <strong>Check Results!</strong> This is last question of test
                      </div>`
                    }
            }, 1000);
        }
        else {
            // console.log('try different');
            
            $('#option1').toggleClass('wrong-answer')
            // $('#option1').toggleClass('mt-2')
            setTimeout(function()
            { 
                questionNum++;
                if(questionNum<=data.results.length-1){
                    Display(data);}
                    else
                    {
                        document.getElementById('alert').innerHTML=`<div class="alert alert-info">
                        <strong>Check Results!</strong> This is last question of test
                      </div>`
                    }
            },1000)
           
        }
    })
    option2.addEventListener('click', function () {
        // console.log(option2.innerText);
        let userAns = option2.innerText;
        // console.log(data.results[q]);

        if (userAns == data.results[questionNum].correct_answer) {
            // console.log('this is correct answer');
            // $('#option1').toggleClass('right-answer')
            $('#option2').toggleClass('right-answer')
            // $('#option2').toggleClass('mt-2')
            setTimeout(function () { 
                
                questionNum++;
                score++;
    document.getElementById('score').innerHTML=` Score: ${score}`
                if(questionNum<=data.results.length-1){
                    Display(data);}
                    else
                    {
                        document.getElementById('alert').innerHTML=`<div class="alert alert-info">
                        <strong>Check Results!</strong> This is last question of test
                      </div>`
                    }
            }, 500);
        }
        else {
            // console.log('try different');
            
            $('#option2').toggleClass('wrong-answer')
            // $('#option2').toggleClass('mt-2')
            setTimeout(function()
            { questionNum++;
                if(questionNum<=data.results.length-1){
                    Display(data);}
                    else
                    {
                        document.getElementById('alert').innerHTML=`<div class="alert alert-info">
                        <strong>Check Results!</strong> This is last question of test
                      </div>`
                    }
            },1000)
           
        }
    })
    option3.addEventListener('click', function () {
        // console.log(option3.innerText);
        let userAns = option3.innerText;
        // console.log(data.results[q]);

        if (userAns == data.results[questionNum].correct_answer) {
            // console.log('this is correct answer');
            // $('#option1').toggleClass('right-answer')
            $('#option3').toggleClass('right-answer')
            // $('#option3').toggleClass('mt-2')
            setTimeout(function () { 
                
                score++;
                questionNum++;
                if(questionNum<=data.results.length-1){
                    Display(data);}
                    else
                    {
                        document.getElementById('alert').innerHTML=`<div class="alert alert-info">
                        <strong>Check Results!</strong> This is last question of test
                      </div>`
                    }
            }, 1000);
        }
        else {
            // console.log('try different');
            
            $('#option3').toggleClass('wrong-answer')
            // $('#option3').toggleClass('mt-2')
            setTimeout(function()
            { questionNum++;
                if(questionNum<=data.results.length-1){
                    Display(data);}
                    else
                    {
                        document.getElementById('alert').innerHTML=`<div class="alert alert-info">
                        <strong>Check Results!</strong> This is last question of test
                      </div>`
                    }
            },1000)
           
        }
    })
    option4.addEventListener('click', function () {
        // console.log(option4.innerText);
        let userAns = option4.innerText;
        // console.log(data.results[q]);

        if (userAns == data.results[questionNum].correct_answer) {
            // console.log('this is correct answer');
            // $('#option1').toggleClass('right-answer')
            // $('#option4').toggleClass('right-answer')
            // $('#option4').toggleClass('mt-2')
            setTimeout(function () { 
                
                score++;
                questionNum++;
                if(questionNum<=data.results.length-1){
                    Display(data);}
                    else
                    {
                        document.getElementById('alert').innerHTML=`<div class="alert alert-info">
                        <strong>Check Results!</strong> This is last question of test
                      </div>`
                    }
            }, 1000);
        }
        else {
            // console.log('try different');
            
            $('#option4').toggleClass('wrong-answer')
            // $('#option4').toggleClass('mt-2')
            setTimeout(function()
            { questionNum++;
                if(questionNum<=data.results.length-1){
                    Display(data);}
                    else
                    {
                        document.getElementById('alert').innerHTML=`<div class="alert alert-info">
                        <strong>Check Results!</strong> This is last question of test
                      </div>`
                    }
            },1000)
           
        }
    })

//  result section
    if(realQue==data.results.length)
    {
        $('#result').toggleClass('d-none')
    }
    $('#result').click(function()
    {
        // viewResult(score,data);
        // console.log('button clicked');
        
        $('.box-result').removeClass('d-none')
        $('.box').addClass('d-none')
        $('#result').addClass('d-none')
        $('#alert').addClass('d-none')

        // display Result
        let result=document.getElementById('results');
        // console.log(result);
        result.innerHTML=` <div class="content m-5 mt-5">
        <ul class="list-group  mt-5">
            <li class="list-group-item list-group-item-success">Correct Answers: ${score} </li>
            <li class="list-group-item list-group-item-danger">Incorrect Answers: ${data.results.length-score}</li>
            <li class="list-group-item">Your Score: ${score}</li>
            <li class="list-group-item">Percentage: ${score*100/data.results.length}%</li>
          </ul>
          <div id="retest" class="mt-3 text-center">
              <button class="btn btn-secondary text-white"><a href="index.html" class="text-white text-decoration-none">Play Again!</a></button>
          </div>
    </div>`
        
        
    })
    
}


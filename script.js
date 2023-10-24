

let FAQs = [
    {
        question:'How many team members can I invite?',
        answer:'lorem ipsum dolor sit amet dolos ipsum sit amet sit amet dolor ipsum'
    },
    {
        question:'What is the maximum file upload size?',
        answer:'No more than 2GB. All files in your account must fit yourallotted storage space.'
    },
    {
        question:'How many team members can I invite?',
        answer:'No more than 2GB. All files in your account must fit yourallotted storage space.'
    },
    {
        question:'How many team members can I invite?',
        answer:'No more than 2GB. All files in your account must fit yourallotted storage space.'
    },
    {
        question:'How many team members can I invite?',
        answer:'No more than 2GB. All files in your account must fit yourallotted storage space.'
    },
    {
        question:'How many team members can I invite?',
        answer:'No more than 2GB. All files in your account must fit yourallotted storage space.'
    },
]


let questions =  document.querySelector  ('.questions')


FAQs.forEach((el)=>{
    questions.innerHTML+=`<div class="question open-close">
            <h4 >${el.question}   <img  class="arrow" src="./images/icon-arrow-down.svg" alt=""> </h4>
            <p '>${el.answer}</p>
    </div>`
})



let questionAll = document.querySelectorAll('.question');

questionAll.forEach((el)=>{
    el.addEventListener('click',(event)=>{
        questionAll.forEach((el)=>{
            el.classList.add('open-close')
        })
        el.classList.toggle('open-close');
       
    })
})
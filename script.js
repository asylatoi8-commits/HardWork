// ============================
// ДАННЫЕ ТЕСТА
// ============================


let scores = {

    tech:0,

    law:0,

    business:0,

    medicine:0,

    leader:0,

    analysis:0,

    help:0

};



// ============================
// НАЧАТЬ ТЕСТ
// ============================


function startTest(){


    document.querySelector("header")
    .style.display="none";


    document.getElementById("test")
    .classList.remove("hidden");



}



// ============================
// СОХРАНЕНИЕ ОТВЕТА
// ============================



function answer(type){


    scores[type]++;


}




// ============================
// ПОКАЗАТЬ РЕЗУЛЬТАТ
// ============================



function showResult(){


    let profession = "";

    let description = "";



    // IT

    if(
        scores.tech >= scores.law &&
        scores.tech >= scores.business &&
        scores.tech >= scores.medicine
    ){


        profession =
        "💻 IT специалист";


        description =

        `
        Тебе подходят технологии,
        программирование и создание
        цифровых продуктов.

        <br><br>

        Что изучать:

        <br>

        • Python / JavaScript

        <br>

        • Искусственный интеллект

        <br>

        • Кибербезопасность

        <br>

        • Создание стартапов

        `;


    }



    // LAW


    else if(
        scores.law >= scores.business &&
        scores.law >= scores.medicine
    ){


        profession =
        "⚖️ Юрист";


        description =

        `

        Тебе подходят право,
        переговоры и работа с людьми.

        <br><br>


        Что развивать:

        <br>

        • Английский язык

        <br>

        • Критическое мышление

        <br>

        • Дебаты

        <br>

        • Международное право


        `;


    }




    // BUSINESS


    else if(
        scores.business >= scores.medicine
    ){



        profession =

        "💼 Предприниматель";


        description =

        `

        Тебе подходит бизнес,
        управление и создание проектов.


        <br><br>


        Развивай:

        <br>

        • Лидерство

        <br>

        • Финансы

        <br>

        • Маркетинг

        <br>

        • Project Management


        `;


    }





    // MEDICINE


    else {


        profession =

        "🩺 Медицинский специалист";


        description =


        `

        Тебе подходит медицина
        и помощь людям.


        <br><br>


        Развивай:

        <br>

        • Биологию

        <br>

        • Химию

        <br>

        • Научное мышление


        `;


    }




    // скрываем тест


    document.getElementById("test")
    .classList.add("hidden");



    // показываем результат


    document.getElementById("result")
    .classList.remove("hidden");



    document.getElementById("profession")
    .innerHTML = profession;



    document.getElementById("description")
    .innerHTML = description;



}

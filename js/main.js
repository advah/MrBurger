
// BURGERS----------

// СЛАЙДЕР
const burgersList = document.querySelector('.burgers__list');
const comutedItemStyle = getComputedStyle(burgersList);

const btnRight = document.querySelector('.burgers__arrow-right');
const btnLeft = document.querySelector('.burgers__arrow-left');

// шаг на который происходит прокрутка
// ширина всего списка из всех итемов деленное на количество итемов в списке
let scrolStep = parseInt(comutedItemStyle.width)/(burgersList.children.length);
let getItemRight = parseInt(comutedItemStyle.right);
if(!getItemRight) {getItemRight = 0};

// что бы анимация сразу начиналась активируется первоначальное значение
burgersList.style.right = 0 + "px";

btnRight.addEventListener('click', function(event) {
    event.preventDefault();

    // если положение right меньше чем положение right последнего итема
    if(getItemRight < parseInt(comutedItemStyle.width) - scrolStep) {
        getItemRight += scrolStep;
    }
    // если это последний итем, листается но начальное положение 
    else {
        getItemRight = 0
    } 

    burgersList.style.right = getItemRight + 'px';

});

btnLeft.addEventListener('click', function(event) {
    event.preventDefault();

    if(getItemRight > 0) {
        getItemRight -= scrolStep;
    } else {
        getItemRight = parseInt(comutedItemStyle.width) - scrolStep;
    } 

    burgersList.style.right = getItemRight + 'px';

});
// конец слайдера-----------------

// POPup----------------------------
 
    // const blockIngredients = document.createElement('div');
    // blockIngredients.classList.add('blockIngredients');
    // blockIngredients.innerHTML = document.querySelector('.js-burgerComposition').innerHTML;

    const burgersComposition = document.querySelectorAll('.burgers__composition');
    
    // c mouseenter делегирование не работает, поэтому перебираем все итемы
    // и проверяем какой из них мышка
    for(const i of burgersComposition) {

        const blockIngredients = document.createElement('div');
        
        i.addEventListener('mouseenter', function(event) {

            blockIngredients.classList.add('blockIngredients');
            blockIngredients.innerHTML = document.querySelector('.js-burgerComposition').innerHTML;

            event.target.appendChild(blockIngredients);

            return blockIngredients;
        });

        i.addEventListener('mouseleave', function(event) {
            event.target.removeChild(blockIngredients);
        });      
    }
   
// конец POPup------------------------
// endBurgers-----------

// TEAM----------


// list ul-accordeon, таргет string , класс актив string 
var accordeon = function(list, eventTarget, activClass) { 
   
    // обработчик событий на ul аккордеоне
    list.addEventListener('click', function(event) {

        // проверяет попал ли клик куда ожидалось
        if (event.target.className === eventTarget) {
            event.preventDefault();
            
            // если вдруг активный элемент ссылка, то вызывается event.preventDefault();
            if(document.querySelector('.'+eventTarget).tagName == 'a') {
                event.preventDefault();    
            };
            console.log(typeof document.querySelector('.'+eventTarget).tagName);

            // ли предок ссылки, нахожу что бы удалять и добавлять класс activ
            const dad = event.target.parentNode;
            
            if(dad.classList.contains (activClass)) {
                dad.classList.remove(activClass);
        
            }
            // if обрабатывает li на который был клик, есть ли у него класс актив
            // а else проверяет, нет ли класса activ не остальных li и удаляет их
            else {
                let j = list.children
                for (let i of j) {
                    if(i.classList.contains (activClass)) {
                        i.classList.remove(activClass);   
                    }                                        
                }
                // теперь класс activ отсутствует во всех li обработаных else
                // добавляется activ на li по которому клик
                dad.classList.add(activClass);
            }
        }

    });
};

const teamList = document.querySelector('.team__list');
const teamRef = "team__member";
const teamClassActiv = "team__item-activ";

accordeon(teamList, teamRef, teamClassActiv);

// endTeam----------

// MENU--------------------

var accordeon = function(list, eventTarget, activClass) { 
   
    // обработчик событий на ul аккордеоне
    list.addEventListener('click', function(event) {

        // проверяет попал ли клик куда ожидалось
        if (event.target.className === eventTarget) {
            
            
            // ли предок ссылки, нахожу что бы удалять и добавлять класс activ
            const dad = event.target.parentNode.parentNode.parentNode;
            console.log(dad);
            
            if(dad.classList.contains (activClass)) {
                dad.classList.remove(activClass);
        
            }
            // if обрабатывает li на который был клик, есть ли у него класс актив
            // а else проверяет, нет ли класса activ у остальных li и удаляет их
            else {
                let j = list.children
                for (let i of j) {
                    if(i.classList.contains (activClass)) {
                        i.classList.remove(activClass);   
                    }                                        
                }
                // теперь класс activ отсутствует во всех li обработаных else
                // добавляется activ на li по которому клик
                dad.classList.add(activClass);
            }
        }

    });
};

const menuAcco = document.querySelector('.menu__accordeon');
const menuTarget = "menu__acco-title";
const menuClassActiv = "menu__item-activ";

accordeon(menuAcco, menuTarget, menuClassActiv);
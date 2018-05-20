// секция Команда

const teamList = document.querySelector('.team__list');

//   оброботчик события на ul, через таргет получаем ссылку team__member 
teamList.addEventListener('click', function(event) {
    var target = event.target;

    if (event.target.className === 'team__member') {
        event.preventDefault();
    }

    let dad = event.target.parentNode
    dad.className = "team__item";

    if(dad.className = "team__item team__item-activ") {
        dad.className = "team__item";
        console.log(dad);
        
    } else if(dad.className = "team__item") {
        dad.className = "team__item team__item-activ";
        console.log(dad); 
    } 
    
   
});
 


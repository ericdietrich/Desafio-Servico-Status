import { countryPercents } from './objects.js';

export default function graphicCountryCreator() {

    const sectionPizza = document.querySelector('.pizza');

    const containerPizzaDiv = document.createElement('div');
    containerPizzaDiv.className = 'container-pizza';

    const slideDotsUl = document.createElement('ul');
    slideDotsUl.className = 'slide-dots';

    //Percorre todos os países encontrados gerando os gráficos
    countryPercents.forEach((item) => {

        const containerPizzaInnerDiv = document.createElement('div');
        containerPizzaInnerDiv.classList = 'container-pizza-inner';

        const countryNameH3 = document.createElement('h3');
        countryNameH3.className = 'country-name';
        countryNameH3.innerText = item.country;

        const graphicCanvas = document.createElement('canvas');
        graphicCanvas.className = 'graphic-country';

        //Criando gráfico com Chart.js
        const chartGraph = new Chart(graphicCanvas, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [item.percent1, item.percent2, item.percent3, item.percent4],
                    backgroundColor: ['#55D8FE', '#A3A0FB', '#FFDA83', '#FF8373'],
                }],
            },
            options: {

            }
        })

        const slideDotLi = document.createElement('li');
        slideDotLi.className = 'slide-dot';

        slideDotsUl.appendChild(slideDotLi);
        containerPizzaInnerDiv.appendChild(countryNameH3);
        containerPizzaInnerDiv.appendChild(graphicCanvas)
        containerPizzaDiv.appendChild(containerPizzaInnerDiv);
    });

    containerPizzaDiv.appendChild(slideDotsUl);
    sectionPizza.appendChild(containerPizzaDiv);

    //Navegação por cada gráfico
    const navElements = document.querySelectorAll('.slide-dot');
    const graphicElements = document.querySelectorAll('.container-pizza-inner');

    navElements[0].classList.add('active');
    graphicElements[0].classList.add('active');


    //Percorre todos os elementos de navegação adicionando um eventListener de click
    navElements.forEach((item, index) => {
        item.addEventListener('click', () => {
            navElements.forEach((element, i) => {
                if (i == index) {
                    element.classList.add('active');
                    graphicElements[i].classList.add('active');
                } else {
                    element.classList.remove('active');
                    graphicElements[i].classList.remove('active');
                }
            })


        })
    })



}
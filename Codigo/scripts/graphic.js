import { WhatsappNotifications } from './objects.js'

export default function graphicCreator() {
    //Essa função criará um grid nos eixos X e Y, e partir disso tem-se coordenadas dos pontos, que serão criados como elementos HTML


    //Objeto com dados de notificações em cada hora e por país. Para fins de desenvolvimento é assumido que os dados já foram obtidos e tratados (de API ou Banco de Dados) e alimentaram o objeto criado abaixo.

    const graphicElement = document.querySelector('.graphic');
    const graphicDimensions = graphicElement.getBoundingClientRect();

    function defineGrid() {
        let brazilNotifications = new Array;
        let mexicoNotifications = new Array;
        const grid = {
            axisY: 0,
            axisX: 0
        }

        WhatsappNotifications.forEach((item) => {
            if (item.country == 'Brasil') {
                brazilNotifications.push(+item.notifications);
            }
            if (item.country == 'México') {
                mexicoNotifications.push(+item.notifications);
            }
        });

        let notificationsMax = Math.max(...brazilNotifications, ...mexicoNotifications);

        grid.axisY = +(graphicDimensions.height / notificationsMax);
        grid.axisX = +(graphicDimensions.width / 24);
        return grid;
    }

    function createElement() {

        const grid = defineGrid();
        WhatsappNotifications.forEach((item) => {
            let dot = document.createElement('div');
            dot.classList.add('dot');
            graphicElement.appendChild(dot);
            if (item.country == 'Brasil') {
                dot.classList.add('brazil');
            }
            if (item.country == 'México') {
                dot.classList.add('mexico');
            }
            dot.style.top = (graphicDimensions.height - item.notifications * grid.axisY).toFixed(1) + 'px';
            dot.style.left = (item.hour * grid.axisX).toFixed(1) + 'px';

        });
    }
    createElement();

    /* function createLinesBetweenDots() {
        const dots = document.querySelectorAll('.dot');

        let x = parseFloat(dots[0].style.left);
        let y = parseFloat(dots[0].style.top);

        for (let i = 0; i < dots.length - 1; i++) {
            let xNext = parseFloat(dots[i + 1].style.left);
            let yNext = parseFloat(dots[i + 1].style.top);
            let line = document.createElement('canvas');
            dots[i].append(line);
            let context = line.getContext('2d');
            context.moveTo(x, y);
            context.lineTo(xNext, yNext);
            context.stroke();
            x = xNext;
            y = yNext;
        }
    }
    createLinesBetweenDots() */



}
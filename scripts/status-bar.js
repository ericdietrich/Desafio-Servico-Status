import { serviceStatus } from './objects.js';
import { serviceIncidents } from './objects.js';
import timePast from './date-past.js';

//Código para montar a primeira barra da página, o status geral dos serviços
//Se pelo menos um serviço estiver em manutenção, a barra mostrará: Sistema em Manutenção
//Quando nenhum está em manutenção, mas há pelo menos um serviço instável: Sistema Oscilando
//Quando tudo está funcionando normalmente: Todo o serviço operacional
export default function handleStatus() {

    let waveringCounter = 0;
    let notWorkingCounter = 0;

    //Percorre cada serviço checando o status e contando caso encontre o status definido.

    serviceStatus.forEach((item) => {
        if (item.status.toLocaleLowerCase().indexOf('oscilando') != -1) {
            waveringCounter++;
        }
        if (item.status.toLocaleLowerCase().indexOf('manutenção') != -1) {
            notWorkingCounter++;
        }
    });

    //Busca a data mais recente, inserindo num array
    const dates = new Array();
    serviceIncidents.forEach((item) => {
        dates.push(item.incident.date.getTime());
    })
    const maxDate = new Date(Math.max.apply(Math, dates));


    //Criação da árvore do DOM

    const lastIncidentContainer = document.createElement('div');
    lastIncidentContainer.className = 'status-text';
    const lastIncidentH2 = document.createElement('h2');
    const lastIncidentH3 = document.createElement('h3');


    const statusContent = document.querySelector('.status-content');
    const statusImageContainer = document.createElement('div');
    statusImageContainer.className = 'status-image';
    const statusImage = document.createElement('img');




    if (notWorkingCounter) {
        lastIncidentH2.innerText = 'Sistema em manutenção';
        statusImage.id = 'red-settings';
        statusImage.src = '../Desafio-Servico-Status/src/img/settings-white.svg';
        statusImage.alt = 'Ícone Engrenagem Vermelha';
    } else {
        if (waveringCounter) {
            lastIncidentH2.innerText = 'Sistema oscilando';
            statusImage.id = 'yellow-info';
            statusImage.src = '../Desafio-Servico-Status/src/img/info-black.svg';
            statusImage.alt = 'Ícone Informação Amarelo';
        } else {
            lastIncidentH2.innerText = 'Todo o sistema operacional';
            statusImage.id = 'green-check';
            statusImage.src = '../Desafio-Servico-Status/src/img/check-white.svg';
            statusImage.alt = 'Ícone Check Verde';
        }
    }



    lastIncidentH3.innerHTML = `<span>Último incidente</span> ${timePast(maxDate)}`;
    lastIncidentContainer.appendChild(lastIncidentH2);
    lastIncidentContainer.appendChild(lastIncidentH3);
    statusImageContainer.appendChild(statusImage);
    statusContent.appendChild(statusImageContainer);
    statusContent.appendChild(lastIncidentContainer);

}

import { serviceIncidents } from './objects.js';
import dateToString from './date-to-string.js';
import calculePastTime from './date-past.js';

export default function handleIncidents() {
    const incidentsContainer = document.querySelector('.incidents');

    //dias que serão varridos atrás de incidentes
    const daysAgo = 30;

    const todayDate = new Date();

    //data passada até onde se buscará incidentes
    const pastDate = new Date(todayDate - (daysAgo * 24 * 60 * 60 * 1000));

    //índice que percorre datas dia a dia até a data final
    let indexDate = todayDate;

    do {

        let counterIncident = 0;
        let counterWhatsAppIncident = 0;
        const incidentDiv = document.createElement('div');
        incidentDiv.className = 'incident';

        const dataTitleH2 = document.createElement('h2');
        dataTitleH2.className = 'data';
        dataTitleH2.innerText = dateToString(indexDate);
        incidentDiv.appendChild(dataTitleH2);

        serviceIncidents.forEach((item) => {

            if (item.incident.date.getDate() == indexDate.getDate() && item.incident.date.getMonth() == indexDate.getMonth() && item.incident.date.getFullYear() == indexDate.getFullYear()) {
                if (item.service.toLowerCase().indexOf('whatsapp') != -1) {
                    counterWhatsAppIncident++;
                }
                counterIncident++;
                //Os condicionais abaixo testam a existencia dos três status (problema, monitoramento, solução). Caso não encontre, não são criados os elementos. O 'problema' não precisa de condicional, pois sempre existe quando um incidente é encontrado
                if (item.solution.date) {
                    const incidentStatusDiv = document.createElement('div');
                    incidentStatusDiv.className = 'incident-status';

                    const spanIcon = document.createElement('span');
                    spanIcon.className = 'material-icons check';
                    spanIcon.innerText = 'check';

                    const incidentDescripionDiv = document.createElement('div');
                    incidentDescripionDiv.className = 'incident-description';

                    const incidentSolutionTitle = document.createElement('h3');
                    incidentSolutionTitle.innerText = 'Solução';

                    const incidentSolutionDescription = document.createElement('p');
                    incidentSolutionDescription.innerText = item.solution.description;

                    const incidentTimePast = document.createElement('span');
                    incidentTimePast.innerText = `${calculePastTime(item.solution.date)}`;

                    incidentDescripionDiv.appendChild(incidentSolutionTitle);
                    incidentDescripionDiv.appendChild(incidentSolutionDescription);
                    incidentDescripionDiv.appendChild(incidentTimePast);

                    incidentStatusDiv.appendChild(spanIcon);
                    incidentStatusDiv.appendChild(incidentDescripionDiv);

                    incidentDiv.appendChild(incidentStatusDiv);
                }
                if (item.monitoring.date) {
                    const incidentStatusDiv = document.createElement('div');
                    incidentStatusDiv.className = 'incident-status';

                    const spanIcon = document.createElement('span');
                    spanIcon.className = 'material-icons eye';
                    spanIcon.innerText = 'remove_red_eye';

                    const incidentDescripionDiv = document.createElement('div');
                    incidentDescripionDiv.className = 'incident-description';

                    const incidentSolutionTitle = document.createElement('h3');
                    incidentSolutionTitle.innerText = 'Problema sendo monitorado';

                    const incidentSolutionDescription = document.createElement('p');
                    incidentSolutionDescription.innerText = item.monitoring.description;

                    const incidentTimePast = document.createElement('span');
                    incidentTimePast.innerText = `${calculePastTime(item.monitoring.date)}`;

                    incidentDescripionDiv.appendChild(incidentSolutionTitle);
                    incidentDescripionDiv.appendChild(incidentSolutionDescription);
                    incidentDescripionDiv.appendChild(incidentTimePast);

                    incidentStatusDiv.appendChild(spanIcon);
                    incidentStatusDiv.appendChild(incidentDescripionDiv);

                    incidentDiv.appendChild(incidentStatusDiv);
                }
                const incidentStatusDiv = document.createElement('div');
                incidentStatusDiv.className = 'incident-status';

                const spanIcon = document.createElement('span');
                spanIcon.className = 'material-icons info';
                spanIcon.innerText = 'info';

                const incidentDescripionDiv = document.createElement('div');
                incidentDescripionDiv.className = 'incident-description';

                const incidentSolutionTitle = document.createElement('h3');
                incidentSolutionTitle.innerText = item.incident.title;

                const incidentSolutionDescription = document.createElement('p');
                incidentSolutionDescription.innerText = item.incident.description;

                const incidentTimePast = document.createElement('span');
                incidentTimePast.innerText = `${calculePastTime(item.incident.date)}`;

                const horizontalLine = document.createElement('hr');

                incidentDescripionDiv.appendChild(incidentSolutionTitle);
                incidentDescripionDiv.appendChild(incidentSolutionDescription);
                incidentDescripionDiv.appendChild(incidentTimePast);
                incidentDescripionDiv.appendChild(horizontalLine);

                incidentStatusDiv.appendChild(spanIcon);
                incidentStatusDiv.appendChild(incidentDescripionDiv);


                incidentDiv.appendChild(incidentStatusDiv);


            }
        });

        if (!counterIncident) {
            const noIncidentElement = document.createElement('div');
            noIncidentElement.className = 'no-incident';
            noIncidentElement.innerText = 'Sem incidentes para este dia';
            incidentDiv.appendChild(noIncidentElement);
        }

        if (!counterWhatsAppIncident && counterIncident) {
            const noWhatAppIncident = document.createElement('div');
            noWhatAppIncident.className = 'no-incident';
            noWhatAppIncident.innerText = 'Nenhum incidente do WhatsApp neste dia';
            incidentDiv.appendChild(noWhatAppIncident);
        }

        incidentsContainer.appendChild(incidentDiv);



        //avança o índice para o dia anterior
        indexDate.setTime(indexDate.getTime() - (24 * 60 * 60 * 1000));
    } while (indexDate >= pastDate);

};
import { serviceIncidents } from './objects.js'

export default function handleServiceUptime() {

    const ul = document.querySelector('.service-uptime ul');

    //Data de hoje
    const todayDate = Date.now();

    //Número de dias atrás que serão exibidos os incidentes
    const daysAgo = 20;

    const p = document.querySelector('.service-uptime p');
    p.innerText = `${daysAgo} dias atrás`;

    //Data 90 dias atrás
    const pastDate = new Date(todayDate - (daysAgo * 24 * 60 * 60 * 1000));
    //Data que percorre dia a dia os 90 dias atrás
    let indexDate = pastDate;

    //Cria elemento li pra cada um dos últimos 90 dias
    do {
        const li = document.createElement('li');
        //informationalDiv é o elemento que surge ao se passar o mouse sobre o 'li'
        const informationalDiv = document.createElement('div');
        const informationalDivDate = document.createElement('p');
        const informationalDivIncident = document.createElement('span');
        informationalDiv.classList.add('informational-element');
        informationalDivDate.classList.add('informational-element-date');
        informationalDivIncident.classList.add('informational-element-incident');
        const informational = {
            date: '',
            incident: '',
        }
        //Para cada dia é verificado se houve algum incidente, quando não houve incidentes a classe 'check' é atribuída, e o elemento fica com a cor verde.
        //Quando há incidente envolvendo WhatsApp, a classe 'settings' é usada, deixando vermelho o elemento. Outros incidentes, usa-se a classe 'error' que torna a 'li' amarela 
        serviceIncidents.forEach((item) => {
            if (item.incident.date.getDate() == indexDate.getDate() && item.incident.date.getMonth() == indexDate.getMonth() && item.incident.date.getFullYear() == indexDate.getFullYear()) {
                li.className = '';
                if (item.service.toLowerCase().indexOf('whatsapp') != -1) {
                    li.classList.add('settings');
                    informational.date =
                        `${item.incident.date.getDate()} de ${["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][item.incident.date.getMonth()]}, ${item.incident.date.getFullYear()}`;
                    informational.incident = item.incident.title;
                } else {
                    li.classList.add('error');
                    informational.date =
                        `${item.incident.date.getDate()} de ${["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][item.incident.date.getMonth()]}, ${item.incident.date.getFullYear()}`;
                    informational.incident = item.incident.title;
                }
            } else {
                if (!(li.classList.contains('settings')) && !(li.classList.contains('check')) && !(li.classList.contains('error'))) {
                    li.classList.add('check');
                    informational.date =
                        `${indexDate.getDate()} de ${["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][indexDate.getMonth()]}, ${indexDate.getFullYear()}`;
                    informational.incident = "Sem incidentes nesse dia";
                }
            }
        });

        informationalDivDate.innerText = informational.date;
        informationalDivIncident.innerText = informational.incident;
        informationalDiv.appendChild(informationalDivDate);
        informationalDiv.appendChild(informationalDivIncident);

        li.appendChild(informationalDiv);
        ul.append(li);
        indexDate.setTime(indexDate.getTime() + (24 * 60 * 60 * 1000));
    } while (indexDate <= todayDate);
}
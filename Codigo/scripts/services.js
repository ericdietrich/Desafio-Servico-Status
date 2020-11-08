import { serviceStatus } from './objects.js';


export default function handleServiceStatus() {
    const ul = document.querySelector('.services ul');

    serviceStatus.forEach((item, index, arr) => {

        const li = document.createElement('li');
        const p = document.createElement('p');
        const span = document.createElement('span');

        const hoverDiv = document.createElement('div');
        hoverDiv.className = 'hover-div';
        const hoverTitle = document.createElement('p');
        hoverTitle.innerText = item.status;
        const hoverDescription = document.createElement('span');
        hoverDescription.innerText = item.description;

        const horizontalLine = document.createElement('hr');

        p.innerText = item.service;
        span.classList.add('material-icons');

        if (item.status == 'Operando') {
            span.classList.add('check');
            span.innerText = 'check';
        }
        else {
            if (item.status == 'Em manutenção') {
                span.classList.add('settings');
                span.innerText = 'settings';
            }
            else {
                span.classList.add('error');
                span.innerText = 'error';
            }
        }



        hoverDiv.append(hoverTitle);
        hoverDiv.append(hoverDescription);

        li.append(p);
        li.append(span);
        li.append(hoverDiv);

        ul.append(li);
        if (index < arr.length - 1) {
            ul.appendChild(horizontalLine);
        }

    });



}



import { serviceStatus } from './objects.js';


export default function handleServiceStatus() {
    const ul = document.querySelector('.services ul');


    serviceStatus.forEach((item) => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const span = document.createElement('span');

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

        li.append(p);
        li.append(span);
        ul.append(li);

    })

}



export const serviceStatus = [
    { service: 'SacDigital', status: 'Operando' },
    { service: 'Panfleto.Online', status: 'Operando' },
    { service: 'SMSIdeal', status: 'Em manutenção' },
    { service: 'ConsultaIdeal', status: 'Oscilando' },
    { service: 'WhatsApp', status: 'Operando' },
    { service: 'WhatsApp Business API', status: 'Em manutenção' },
]

export const WhatsappNotifications = [
    {
        hour: 0,
        notifications: 15,
        country: 'Brasil',
    },
    {
        hour: 1,
        notifications: 20,
        country: 'Brasil',
    },
    {
        hour: 2,
        notifications: 16,
        country: 'Brasil',
    },
    {
        hour: 3,
        notifications: 12,
        country: 'Brasil',
    },
    {
        hour: 4,
        notifications: 42,
        country: 'Brasil',
    },
    {
        hour: 5,
        notifications: 23,
        country: 'Brasil',
    },
    {
        hour: 6,
        notifications: 12,
        country: 'Brasil',
    },
    {
        hour: 7,
        notifications: 9,
        country: 'Brasil',
    },
    {
        hour: 8,
        notifications: 0,
        country: 'Brasil',
    },
    {
        hour: 9,
        notifications: 33,
        country: 'Brasil',
    },
    {
        hour: 10,
        notifications: 20,
        country: 'Brasil',
    },
    {
        hour: 11,
        notifications: 14,
        country: 'Brasil',
    },
    {
        hour: 12,
        notifications: 10,
        country: 'Brasil',
    },
    {
        hour: 13,
        notifications: 40,
        country: 'Brasil',
    },
    {
        hour: 14,
        notifications: 17,
        country: 'Brasil',
    },
    {
        hour: 15,
        notifications: 13,
        country: 'Brasil',
    },
    {
        hour: 16,
        notifications: 12,
        country: 'Brasil',
    },
    {
        hour: 17,
        notifications: 16,
        country: 'Brasil',
    },
    {
        hour: 18,
        notifications: 45,
        country: 'Brasil',
    },
    {
        hour: 19,
        notifications: 27,
        country: 'Brasil',
    },
    {
        hour: 20,
        notifications: 40,
        country: 'Brasil',
    },
    {
        hour: 21,
        notifications: 22,
        country: 'Brasil',
    },
    {
        hour: 22,
        notifications: 15,
        country: 'Brasil',
    },
    {
        hour: 23,
        notifications: 47,
        country: 'Brasil',
    },

    {
        hour: 0,
        notifications: 74,
        country: 'México',
    },
    {
        hour: 1,
        notifications: 45,
        country: 'México',
    },
    {
        hour: 2,
        notifications: 87,
        country: 'México',
    },
    {
        hour: 3,
        notifications: 67,
        country: 'México',
    },
    {
        hour: 4,
        notifications: 59,
        country: 'México',
    },
    {
        hour: 5,
        notifications: 89,
        country: 'México',
    },
    {
        hour: 6,
        notifications: 95,
        country: 'México',
    },
    {
        hour: 7,
        notifications: 74,
        country: 'México',
    },
    {
        hour: 8,
        notifications: 83,
        country: 'México',
    },
    {
        hour: 9,
        notifications: 93,
        country: 'México',
    },
    {
        hour: 10,
        notifications: 62,
        country: 'México',
    },
    {
        hour: 11,
        notifications: 58,
        country: 'México',
    },
    {
        hour: 12,
        notifications: 78,
        country: 'México',
    },
    {
        hour: 13,
        notifications: 71,
        country: 'México',
    },
    {
        hour: 14,
        notifications: 57,
        country: 'México',
    },
    {
        hour: 15,
        notifications: 83,
        country: 'México',
    },
    {
        hour: 16,
        notifications: 52,
        country: 'México',
    },
    {
        hour: 17,
        notifications: 96,
        country: 'México',
    },
    {
        hour: 18,
        notifications: 65,
        country: 'México',
    },
    {
        hour: 19,
        notifications: 77,
        country: 'México',
    },
    {
        hour: 20,
        notifications: 70,
        country: 'México',
    },
    {
        hour: 21,
        notifications: 92,
        country: 'México',
    },
    {
        hour: 22,
        notifications: 55,
        country: 'México',
    },
    {
        hour: 23,
        notifications: 87,
        country: 'México',
    }
];

export const serviceIncidents = [
    {
        service: 'WhatsApp',
        solution: {
            date: new Date('Fri Nov 06 2020 11:32:56 GMT-0300'),
            description: 'WhatsApp voltou a operar normalmente.'
        },
        monitoring: {
            date: new Date('Fri Nov 06 2020 08:21:11 GMT-0300'),
            description: 'O serviço está sendo restaurado para alguns países.'
        },
        incident: {
            date: new Date('Fri Nov 06 2020 05:12:42 GMT-0300'),
            title: 'WhatsApp Interrompido',
            description: 'O WhatsApp está passando por uma interrupção geral em todo o mundo. Não é possível usar o serviço porque o servidor está fora do ar.'
        },
    },
    {
        service: 'WhatsApp',
        solution: {
            date: new Date('Thu Nov 05 2020 14:32:56 GMT-0300'),
            description: 'Gerador atenderá como backup em casos semelhantes, garantindo assim, a continuidade por períodos maiores que 23 horas.'
        },
        monitoring: {
            date: new Date('Thu Nov 05 2020 13:21:11 GMT-0300'),
            description: 'Aquisição de nova unidade de GERADOR DE ENERGIA A DIESEL.'
        },
        incident: {
            date: new Date('Thu Nov 05 2020 12:12:42 GMT-0300'),
            title: 'Incidente Energético',
            description: 'Devido a incidentes naturais houvera a presença da falta de energia na região por tempo não previsto, fazendo com que hajam paradas do fornecimento de energia de forma segura, o que faz com que a cada período de 23horas seja obrigatório o reinício das atividades dos serviços prestados. Isto ocorre diante ao fato de que o gerador disponibilizado pela ALERTRACK possui coeficiência de até 20 Horas de disponibilidade do fornecimento contínuo,somados à disponibilização por parte de armazenamento de energia, menos o tempo necessário para o desligamento dos servidores'
        },
    },
    {
        service: 'SMSIdeal',
        solution: {
            date: new Date('Sun Nov 01 2020 14:32:56 GMT-0300'),
            description: 'Entrou-se em contato com a provedora e o problema foi solucionado.'
        },
        monitoring: {
            date: new Date('Sun Nov 01 2020 13:21:11 GMT-0300'),
            description: 'Entrando em contato com a prestadora do serviço.'
        },
        incident: {
            date: new Date('Sun Nov 01 2020 12:12:42 GMT-0300'),
            title: 'Serviço SMSIdeal não respondendo',
            description: 'As mensagens mandadas pelo sistema não chegam ao destinatário.'
        },
    },
    {
        service: 'WhatsApp Business API',
        solution: {
            date: new Date('Fri Oct 30 2020 14:32:56 GMT-0300'),
            description: 'Aguardou-se o restabelecimento da API'
        },
        monitoring: {
            date: new Date('Fri Oct 30 2020 13:21:11 GMT-0300'),
            description: 'Entrando em contato com a prestadora do serviço.'
        },
        incident: {
            date: new Date('Fri Oct 30 2020 12:12:42 GMT-0300'),
            title: 'Api WhatsApp não responde',
            description: 'Detectou-se que a API do WhatsApp está instável e não respondendo'
        },
    },
]
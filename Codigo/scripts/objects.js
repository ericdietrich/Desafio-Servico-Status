export const serviceStatus = [
    { service: 'SacDigital', status: 'Operando', description: 'Sistema operando normalmente' },
    { service: 'Panfleto.Online', status: 'Operando', description: 'Sistema operando normalmente' },
    { service: 'SMSIdeal', status: 'Em manutenção', description: 'Implantação de uma nova feature' },
    { service: 'ConsultaIdeal', status: 'Oscilando', description: 'Alto número de acessos' },
    { service: 'WhatsApp', status: 'Operando', description: 'Sistema operando normalmente' },
    { service: 'WhatsApp Business API', status: 'Em manutenção', description: 'WhatsApp instável em vários países' },
]

export const WhatsappNotifications = [
    {
        hour: 0,
        notifications: 54,
        country: 'Brasil',
    },
    {
        hour: 1,
        notifications: 59,
        country: 'Brasil',
    },
    {
        hour: 2,
        notifications: 66,
        country: 'Brasil',
    },
    {
        hour: 3,
        notifications: 62,
        country: 'Brasil',
    },
    {
        hour: 4,
        notifications: 69,
        country: 'Brasil',
    },
    {
        hour: 5,
        notifications: 65,
        country: 'Brasil',
    },
    {
        hour: 6,
        notifications: 72,
        country: 'Brasil',
    },
    {
        hour: 7,
        notifications: 79,
        country: 'Brasil',
    },
    {
        hour: 8,
        notifications: 76,
        country: 'Brasil',
    },
    {
        hour: 9,
        notifications: 62,
        country: 'Brasil',
    },
    {
        hour: 10,
        notifications: 59,
        country: 'Brasil',
    },
    {
        hour: 11,
        notifications: 69,
        country: 'Brasil',
    },
    {
        hour: 12,
        notifications: 72,
        country: 'Brasil',
    },
    {
        hour: 13,
        notifications: 50,
        country: 'Brasil',
    },
    {
        hour: 14,
        notifications: 56,
        country: 'Brasil',
    },
    {
        hour: 15,
        notifications: 63,
        country: 'Brasil',
    },
    {
        hour: 16,
        notifications: 72,
        country: 'Brasil',
    },
    {
        hour: 17,
        notifications: 75,
        country: 'Brasil',
    },
    {
        hour: 18,
        notifications: 55,
        country: 'Brasil',
    },
    {
        hour: 19,
        notifications: 77,
        country: 'Brasil',
    },
    {
        hour: 20,
        notifications: 55,
        country: 'Brasil',
    },
    {
        hour: 21,
        notifications: 72,
        country: 'Brasil',
    },
    {
        hour: 22,
        notifications: 64,
        country: 'Brasil',
    },
    {
        hour: 23,
        notifications: 67,
        country: 'Brasil',
    },

    {
        hour: 0,
        notifications: 14,
        country: 'México',
    },
    {
        hour: 1,
        notifications: 22,
        country: 'México',
    },
    {
        hour: 2,
        notifications: 25,
        country: 'México',
    },
    {
        hour: 3,
        notifications: 19,
        country: 'México',
    },
    {
        hour: 4,
        notifications: 29,
        country: 'México',
    },
    {
        hour: 5,
        notifications: 14,
        country: 'México',
    },
    {
        hour: 6,
        notifications: 15,
        country: 'México',
    },
    {
        hour: 7,
        notifications: 29,
        country: 'México',
    },
    {
        hour: 8,
        notifications: 23,
        country: 'México',
    },
    {
        hour: 9,
        notifications: 33,
        country: 'México',
    },
    {
        hour: 10,
        notifications: 19,
        country: 'México',
    },
    {
        hour: 11,
        notifications: 18,
        country: 'México',
    },
    {
        hour: 12,
        notifications: 17,
        country: 'México',
    },
    {
        hour: 13,
        notifications: 16,
        country: 'México',
    },
    {
        hour: 14,
        notifications: 31,
        country: 'México',
    },
    {
        hour: 15,
        notifications: 23,
        country: 'México',
    },
    {
        hour: 16,
        notifications: 22,
        country: 'México',
    },
    {
        hour: 17,
        notifications: 27,
        country: 'México',
    },
    {
        hour: 18,
        notifications: 25,
        country: 'México',
    },
    {
        hour: 19,
        notifications: 17,
        country: 'México',
    },
    {
        hour: 20,
        notifications: 13,
        country: 'México',
    },
    {
        hour: 21,
        notifications: 31,
        country: 'México',
    },
    {
        hour: 22,
        notifications: 35,
        country: 'México',
    },
    {
        hour: 23,
        notifications: 17,
        country: 'México',
    }
];

export const serviceIncidents = [
    {
        service: 'ConsultaIdeal',
        solution: {
            date: new Date('Sat Nov 07 2020 16:58:56 GMT-0300'),
            description: 'Servidor reiniciado e operando normalmente.'
        },
        monitoring: {
            date: new Date('Sat Nov 07 2020 16:55:11 GMT-0300'),
            description: 'O servidor está offline.'
        },
        incident: {
            date: new Date('Sat Nov 07 2020 16:45:42 GMT-0300'),
            title: 'ConsultaIdeal Inoperante',
            description: 'ConsultaIdeal está inoperante.'
        },
    },
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
    {
        service: 'SacDigital',
        solution: {},
        monitoring: {
            date: new Date('Mon Oct 26 2020 16:45:51 GMT-0300'),
            description: 'A equipe responsável foi alertada e já está investigando a origem do problema'
        },
        incident: {
            date: new Date('Mon Oct 26 2020 09:26:14 GMT-0300'),
            title: 'SacDigital apresentando lentidão',
            description: 'Vários clientes relataram lentidão no serviço desde o início do horário comercial'
        },
    },
]
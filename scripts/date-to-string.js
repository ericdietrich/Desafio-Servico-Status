export default function transformDateToDateInFull(date) {
    const dateInFull = `${date.getDate()} de ${["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][date.getMonth()]} de ${date.getFullYear()}`;

    return dateInFull;
}
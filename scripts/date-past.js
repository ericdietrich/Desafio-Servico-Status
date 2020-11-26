export default function calculePastTime(date) {
    const ActualTime = Date.now();
    const TimeGap = ActualTime - date.getTime();
    let PastTime = '';

    if (TimeGap < (60 * 60 * 1000)) {
        if (TimeGap < 2 * 60 * 1000) {
            PastTime = `${Math.round(TimeGap / 1000 / 60)} minuto atrás`;
        } else {
            PastTime = `${Math.round(TimeGap / 1000 / 60)} minutos atrás`;
        }
    } else {
        if (TimeGap < (24 * 60 * 60 * 1000)) {
            if (TimeGap < (2 * 60 * 60 * 1000)) {
                PastTime = `${Math.round(TimeGap / 1000 / 60 / 60)} hora atrás`;
            } else {
                PastTime = `${Math.round(TimeGap / 1000 / 60 / 60)} horas atrás`;
            }
        } else {
            if (TimeGap < (48 * 60 * 60 * 1000)) {
                PastTime = `${Math.round(TimeGap / 1000 / 60 / 60 / 24)} dia atrás`;
            } else {
                PastTime = `${Math.round(TimeGap / 1000 / 60 / 60 / 24)} dias atrás`;
            }
        }
    }
    return PastTime;
}
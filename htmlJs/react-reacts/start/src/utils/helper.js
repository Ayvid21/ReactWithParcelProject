export const convertToTwelveHoursFormat = (_date, separator=':') => {
    const date = new Date(_date);

    if(!isNaN(date)) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        
        const twelveHourFormat = hours > 12 ? hours - 12 : hours;
        const insertZeroBeforeHours = twelveHourFormat < 10 ? `0${twelveHourFormat}`: twelveHourFormat;
        const insertZeroBeforeMinutes = minutes < 10 ? `0${minutes}`: minutes;
        const amPmFormat = hours >= 12 ? 'PM' : 'AM';

        return `${insertZeroBeforeHours + separator + insertZeroBeforeMinutes + amPmFormat}`
    }
    return "";
}

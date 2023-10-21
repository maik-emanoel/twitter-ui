export function getMonth(getMonthUserWasCreated: number) {
    let month: string;

    if (getMonthUserWasCreated === 1) {
      month = "January";
    } else if (getMonthUserWasCreated === 2) {
      month = "February";
    } else if (getMonthUserWasCreated === 3) {
      month = "March";
    } else if (getMonthUserWasCreated === 4) {
      month = "April";
    } else if (getMonthUserWasCreated === 5) {
      month = "May";
    } else if (getMonthUserWasCreated === 6) {
      month = "June";
    } else if (getMonthUserWasCreated === 7) {
      month = "July";
    } else if (getMonthUserWasCreated === 8) {
      month = "August";
    } else if (getMonthUserWasCreated === 9) {
      month = "September";
    } else if (getMonthUserWasCreated === 10) {
      month = "October";
    } else if (getMonthUserWasCreated === 11) {
      month = "November";
    } else {
      month = "December";
    }

    return month
}
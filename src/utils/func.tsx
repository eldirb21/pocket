const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const moment = require("moment-timezone");

const func = {
  timeZone(date: any, format?: any) {
    if (date === undefined || date === null || date === "") return "";
    let dates = null;

    switch (format) {
      case "time":
        dates = moment.tz(date, timezone).format("HH:MM");
        break;
      case "date":
        dates = moment.tz(date, timezone).format("DD MMM");
        break;
      case "dateyear":
        dates = moment.tz(date, timezone).format("DD MMM YYYY");
        break;
      case "datetimea":
        dates = moment.tz(date, timezone).format("DD MMM YYYY HH:MM");
        break;
      case "datetimep":
        dates = moment.tz(date, timezone).format("DD MMM YYYY hh:mm a");
        break;
        break;
      default:
        break;
    }

    return dates;
  },
};
export default func;

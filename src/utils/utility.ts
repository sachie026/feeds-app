import { AGO, DAYS, HOURS, MINS } from "./labels";

export function getTimeDiff(oldDate: string): string {
  let createdAt = new Date(oldDate);
  let currentTime = new Date();

  let diffMs = currentTime.valueOf() - createdAt.valueOf(); // milliseconds
  let diffDays = Math.floor(diffMs / 86400000); // days
  let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

  if (diffDays) {
    return `${diffDays} ${DAYS} ${AGO}`;
  }

  if (diffHrs) {
    return `${diffHrs} ${HOURS} ${AGO}`;
  }

  return `${diffMins} ${MINS} ${AGO}`;
}

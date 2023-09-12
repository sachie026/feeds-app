export function getTimeDiff(oldDate: string) {
  let createdAt = new Date(oldDate);
  let currentTime = new Date();

  let diffMs = currentTime.valueOf() - createdAt.valueOf(); // milliseconds
  let diffDays = Math.floor(diffMs / 86400000); // days
  let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

  if (diffDays) {
    return `${diffDays} days ago`;
  }

  if (diffHrs) {
    return `${diffHrs} hours ago`;
  }

  return `${diffMins} mins ago`;
}

import { format, differenceInDays, differenceInHours } from 'date-fns';

export const formatDate = (date: string) => {
  const newDate = new Date(date);

  return format(newDate, 'dd/MM/yyyy');
};

export const formatDateTimeAndExpiry = (
  startingDate: string,
  endingDate: string
) => {
  const startDate = new Date(startingDate);
  const endDate = new Date(endingDate);

  const formattedStartDate = format(startDate, 'dd/MM/yyyy');
  const formattedEndDate = format(endDate, 'dd/MM/yyyy');
  const now = new Date();
  const daysRemaining = differenceInDays(endDate, now);
  const hoursRemaining = differenceInHours(endDate, now) % 24;
  // return moment.utc(date).format('DD MMM YYYY');
  // todo: return formated date
  return `${formattedStartDate} - ${formattedEndDate} (expire in ${daysRemaining} days ${hoursRemaining} hours)`;
};

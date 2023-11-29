import { format, parseISO } from "date-fns";

export const formatToYYYYMMDD = (datetime: string): string => {
  const dateObject =
    typeof datetime === "string" ? parseISO(datetime) : datetime;
  return format(dateObject, "yyyy-MM-dd");
};

export const formatDatetime = (datetime: string, withTime = true): string =>
  new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "medium",
    timeStyle: withTime ? "short" : undefined,
  }).format(new Date(datetime));

export const formatDatetimeWithDay = (
  datetime: string,
  withTime = true
): string => {
  const time = typeof datetime === "string" ? parseISO(datetime) : datetime;
  const output = format(time, "yyyy年MM月dd日(eee)");

  return withTime ? `${output} ${format(time, "HH:mm")}` : output;
};

export const parseISODateString = (dateString: string | Date) =>
  typeof dateString === "string" ? parseISO(dateString) : dateString;

export const ISODateTimeToDateString = (
  dateTimeString: null | undefined | string | Date,
  withoutDay = false
) => {
  if (!dateTimeString) return undefined;
  const dateTime = parseISODateString(dateTimeString);

  return withoutDay
    ? format(dateTime, "yyyy-MM")
    : format(dateTime, "yyyy-MM-dd");
};

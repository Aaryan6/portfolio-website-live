import moment from "moment";

export default function formatDate(d?: Date) {
  if (!d) return "";
  const date = moment(new Date(d).toISOString()).format("D MMMM YYYY");
  return date.toString();
}

import moment from "moment";

export default function formatDate(d?: string) {
  if (!d) return "";
  const date = moment(d).format("D MMMM YYYY");
  return date.toString();
}

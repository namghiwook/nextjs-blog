import { parseISO, format } from "date-fns";

// export default function Date({ dateString }) {
//   const date = parseISO(dateString)
//   return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
// }

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;

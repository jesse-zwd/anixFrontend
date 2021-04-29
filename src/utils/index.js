import http from "./http";

export const trim = (str, len) =>
  str?.length > len ? `${str.substr(0, len) + "..."}` : str;

// ONE PIECE -> One Piece
export const titleCase = (str) => str && str[0] + str.slice(1).toLowerCase();

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (date) => {
  if (!date?.year) {
    return "";
  }

  return `${months[date?.month]} ${date?.day}, ${date?.year}`;
};

// is this hard to read?
export const formatDesc = (desc) =>
  desc?.length > 580
    ? desc?.substr(0, 580).split("\n").slice(0, 2).join("\n")
    : desc;

export const fetchWrapper = async (endpoint) => {
  const res = await http.get(endpoint);
  return res.data;
};

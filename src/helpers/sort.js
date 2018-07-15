const extractSortProp = (text) => {
    switch (text) {
        case "TITLE":
          return "Title";
        case "DATE":
          return "Year";
        default:
          return "Title";
      }
}

const sort = (data, by) => {
  const sortProp = extractSortProp(by);

  return data.sort((a, b) => {
    if (a[sortProp] > b[sortProp]) return 1;
    if (a[sortProp] < b[sortProp]) return -1;
    return 0;
  });
};

export default sort;

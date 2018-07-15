import React from "react";
import "./searchList.css"
import ListItem from "../listItem/listItem";

export default ({ results }) => {
  const listItems = results && results.Search && results.Search.map(item => {
    return <ListItem key={item.imdbID} {...item} />;
  });

  return (
    <div className={'search-list__container'}>
      {results && results.Error ? results.Error : null}
      {results && !results.Error ? <ul className="search-list__list">{listItems}</ul> : null}
    </div>
  );
}

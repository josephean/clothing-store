import React, { Component } from 'react';
import SearchItem from './SearchItem';

import { Link } from 'react-router-dom';

const NO_RESULTS = 'No results found';
const SearchList = props => {
 
  const close = (e) => {
    props.onClose(e);
  }

  if (props.items.length) {
    const listItems = props.items.map((item) => 
      <Link 
      to={"/item/" + item.id}
      key={item.id.toString()} 
      onClick={(e) => close(e)} 
      className="item-link" 
      >
        <SearchItem id={item.id.toString()} value={item}/>
      </Link>);

    return listItems; 
  }
  return (<p>{NO_RESULTS}</p>);
}

export default SearchList;
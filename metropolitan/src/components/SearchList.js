import React, { Component } from 'react';
import SearchItem from './SearchItem';

import { Link } from 'react-router-dom';

const NO_RESULTS = 'No results found';
class SearchList extends Component {

  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
  }

  close = (e) => {
    this.props.onClose(e);
  }

  render() {
    if (this.props.items.length) {
      const listItems = this.props.items.map((item) => 
        <Link 
        to={"/item/" + item.id}
        key={item.id.toString()} 
        onClick={(e) => this.close(e)} 
        className="item-link" 
        >
          <SearchItem id={item.id.toString()} value={item}/>
        </Link>);

      return listItems; 
    }
    else return (<p>{NO_RESULTS}</p>);
  }
}

export default SearchList;
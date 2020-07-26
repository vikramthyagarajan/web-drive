import { useState, useCallback } from 'react';

const debounce = (fn, delay) => {
  let timer = null;
  return function() {
      const context = this,
      args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
          fn.apply(context, args);
      }, delay);
  };  
}

export default function useDebounce() {
  const [search, setSearch] = useState('');
  const [searchFor, setSearchFor] = useState(search);


  const onEnter = event => {
    const { keyCode } = event;
    if (keyCode === 13) {
        event.preventDefault();
        setSearchFor(search);
    }
  }

  const onChange = event => {
    const { value } = event.target;
    setSearch(value);
    debounceSetSearchFor(value);
  };

  const debounceSetSearchFor = useCallback(debounce(function(value) {
    setSearchFor(value);
  }, 250), []);

  return [search, searchFor, onChange, onEnter]
}
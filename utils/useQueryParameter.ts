import { useState, useEffect } from 'react';

export const useQueryParameter = (param: string) => {
  const [parameter, setParam] = useState('');
  useEffect(() => {
    const queryString = window?.location?.search;
    const urlParams = new URLSearchParams(queryString);
    setParam(urlParams.get(param));
  }, []);

  return parameter;
};

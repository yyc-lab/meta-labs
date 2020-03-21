import { useState, useEffect } from 'react'
import Axios from 'axios';

import qs from 'query-string';
import { useGlobal } from '../state';

const getTokenFromQuery = () => {
  const queryValues = qs.parse(window.location.search);
  return queryValues.code;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false) 
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);
  const [ global, setGlobal ] = useGlobal();
  const token = global.token || getTokenFromQuery();

  const login = () => (
    process.env.REACT_APP_GITHUB_OAUTH_URL ?
    window.location.href = process.env.REACT_APP_GITHUB_OAUTH_URL
    :
    Axios.get(`/auth/github`)
  );

  useEffect(() => {
    if(token) {
      setLoading(true);
      setGlobal({...global, token: token})
      Axios.get(`/user/profile`, { headers: { Authorization: `Bearer ${token}` } })
      .then((data) => {
        setGlobal({ ...global, user: data.user })
        setLoading(false);
        setData({}); // are we rerending unncessarily here because setGlobal should already rerender?
      })
      .catch((err) => {
        setErr(err);
      });
    } 
  }, []);

  return [login, err, loading, data]
}
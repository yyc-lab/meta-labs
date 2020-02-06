import { useState, useEffect } from 'react'
import Axios from 'axios';

import qs from 'query-string';
import { useGlobal } from '../state';

const backendEndpoint = 'http://localhost:3022';

const getTokenFromQuery = () => {
  const queryValues = qs.parse(window.location.search);
  return queryValues.token;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(true) 
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);
  const [ global, setGlobal ] = useGlobal();
  const token = global.token || getTokenFromQuery();

  const login = () => Axios.get(`${backendEndpoint}/auth/github`);

  useEffect(() => {
    if(token) {
      setGlobal({...global, token: token})
      Axios.get(`${backendEndpoint}/user/profile`, { headers: { Authorization: `Bearer ${token}` } })
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
/**
  const [triggerFn, err, loading, data] = useApi(optionalOptionsObject);
  triggerFn may or may not need arguments - it should throw, if required args are not passed
  example use case of triggerFn will be:
  triggerFn({
    crudType: 'GET_ONE',
    resource: 'projects',
    body: { id: '1' },
    filter: null
  })
*/
import { useState, useEffect, useCallback } from 'react';
import { useGlobal } from '../state';
import { makeRequest } from '../lib/apiHelpers';

export const useApi = (initOpts) => {
  const [global, setGlobal] = useGlobal();
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null); // shoule we be defaulting this to what comes from global?

  const triggerFn = useCallback(
    (opts) => {
    setLoading(true)
    setErr(null)
    return makeRequest({
        ...opts,
        token: global.token
      })
      .then(setData) // not sure if we should setGlobal here
      .catch(setErr) // we definitely need to process this error obj more before sending it downstream
      // .finally(setLoading) // this will set loading to undefined; this is potential for bug downstream?
  });// no dependencies yet

  useEffect(() => {
    if (initOpts) {
      triggerFn(initOpts)
    }
  }, []);

  return [triggerFn, err, loading, data]
}
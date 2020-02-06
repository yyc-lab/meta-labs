import Axios from 'axios';
export const CRUD_TO_METHOD = {
  GET: 'get',
  UPDATE: 'put',
  CREATE: 'create',
  DELETE: 'delete'
}

export const TYPES_THAT_NEED_ID = ['PUT', 'DELETE', 'GET_ONE'];

export const makeRequest = (opts) => {
  const requestOpts = processRequestOptions(opts);
  return Axios(requestOpts)
    .then(response => {
      console.log('response :', response);
      return response && response.data;
    })
};

export const getMethodFromCrudType = (crudType) => {
  const inputCrudType = crudType.split('_')[0];
  return CRUD_TO_METHOD[inputCrudType];
}

export const processRequestOptions = ({
  crudType,
  resource,
  body,
  filter
}) => {
  crudType = crudType.toUpperCase(); // for consistency
  const method = getMethodFromCrudType(crudType)
  let url = `/${resource}`;
  if (TYPES_THAT_NEED_ID.includes(crudType)) {
    if (!body.id) throw new Error('id not provided');
    url += `/${body.id}`;
  }
  // TO DO: if (crudType === 'GET_MANY' && filter)
  return {
    url,
    method,
    body,
  }
}
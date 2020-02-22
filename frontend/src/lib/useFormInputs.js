import { useCallback, useState } from 'react';

const useFormInputs = () => {
  const [formInputs, setInput] = useState({});
// this is a hack to add name prop to setInput due to ant.d not passing the name prop by default
  const setInputWithName = useCallback(name => (
    {
      target: {
        value
      }
    }) => setInput(prevState => ({
      ...prevState,
      [name]: value
    }))
  );

  // called with event object or an object with that has target.value and target.name
  // input elements need to have name attributes
  const setFormInput = useCallback(({
    target: {
      name,
      value
    }
  }) => {
    return setInput(prevState => ({
      ...prevState,
      [name]: value
    }))
  });

  return [
    formInputs,
    setInputWithName,
    setFormInput
  ]
}

export default useFormInputs;

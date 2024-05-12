import { useState } from 'react'

const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const OnchangeForm = (value, key) => {
    setState({
        ...state,
        [key]: value,
      });
  } 
  const setForm = () => {
    setState(initialState);
  };
  return {
    OnchangeForm,
    state,
    setForm
  }
}

export default useForm
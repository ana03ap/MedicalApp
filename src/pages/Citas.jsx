import React from 'react'
import useForm from '../hook/useForm'

const Citas = () => {
    const {OnchangeForm, state} = useForm({
        citas: ''
    })
    console.log(state)
  return (
    <div>
        <input type="text" value={state.citas} name='citas' onChange={({target: {value, name}}) => OnchangeForm(value, name)}/>
    </div>
  )
}

export default Citas
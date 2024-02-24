import { useEffect, useMemo, useState } from 'react'

export const useForm = (initialForm = {}, fomrValidations = {}) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidations()
  }, [formState])

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) {
        return false
      }
    }
    return true

  }, [formValidation])

  const onResetForm = () => {
    setFormState(initialForm)
  }

  const createValidations = () => {
    const formCheckedValues = {}
    for (const formField of Object.keys(fomrValidations)) {
      const [fn, erroMessage = 'Este campo es requerido'] = fomrValidations[formField]
      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : erroMessage
    }
    setFormValidation(formCheckedValues)
  }


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    isFormValid,
    ...formValidation
  }
}
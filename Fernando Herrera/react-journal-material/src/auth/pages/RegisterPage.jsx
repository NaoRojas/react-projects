import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { registerUser } from '../../store/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@mui/material'

const formData = {
  password: '',
  email: '',
  displayName: '',
}
const formValidations = {
  email: [(value) => value.includes('@'), 'Correo no válido'],
  displayName: [(value) => value.trim().length > 0, 'Nombre no válido'],
  password: [(value) => value.length > 5, 'Contraseña no válida'],
}

export const RegisterPage = () => {
  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { status, errorMessage } = useSelector((state) => state.auth)
  const isCheckingAuth = useMemo(() => status === 'checking', [status])

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    emailValid,
    displayNameValid,
    passwordValid,
  } = useForm(formData, formValidations)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
    setFormSubmitted(true)
    if (!isFormValid) return
    dispatch(registerUser({ email, password, displayName }))
  }

  return (
    <AuthLayout title="Crear cuenta">
      <h1>Form Valid {isFormValid ? 'Valido' : 'Incorrecto'}</h1>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Nombre completo"
              type="text"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={displayNameValid && formSubmitted}
              helperText={formSubmitted && displayNameValid}
              placeholder="Nombre completo"
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="correo@google.com"
              fullWidth
              error={emailValid && formSubmitted}
              helperText={formSubmitted && emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="Contraseña"
              error={passwordValid && formSubmitted}
              helperText={formSubmitted && passwordValid}
              fullWidth
            />
          </Grid>
          {errorMessage && (
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Alert severity="error" sx={{ ml: 2, mt: 1 }}>
                {errorMessage}
              </Alert>
            </Grid>
          )}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isCheckingAuth}
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

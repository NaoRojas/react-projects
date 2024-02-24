import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuth, startGoogleLogin } from '../../store/auth'
import { useMemo } from 'react'

export const LoginPage = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const { email, password, onInputChange, formState } = useForm({
    email: 'nao@mail.com',
    password: '123456',
  })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
    dispatch(checkingAuth(email, password))
  }

  const onGoogleLogin = () => {
    console.log('Google Login')
    console.log({ email, password })
    dispatch(startGoogleLogin(email, password))
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              name="email"
              onChange={onInputChange}
              value={email}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={onInputChange}
              value={password}
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
                type="submit"
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleLogin}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

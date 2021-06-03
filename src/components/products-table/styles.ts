import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440
  },
  cell: {
    minWidth: 130
  },
  clearBox: {
    display: 'flex',
    flexGrow: 1
  },
  title: {
    alignSelf: 'center',
    marginLeft: 24
  },
  button: {
    padding: '.5rem 1rem'
  },
  buttonDisabled: {
    backgroundColor: '#ffffff1f',
    color: '#303030'
  },
  buttonActive: {
    backgroundColor: '#e0e0e0',
    color: '#000000de',
    '&:hover': {
      backgroundColor: '#e0e0e0',
      color: '#000000de'
    }
  }
})

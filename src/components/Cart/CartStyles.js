import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '9.375rem',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0.3125',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '1.25rem',
    },
  },
  checkoutButton: {
    minWidth: '9.375rem',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));
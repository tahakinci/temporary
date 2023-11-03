import { Dashboard } from './Dashboard';
import { Footer } from './Footer';
import { Header } from './Header';
import { MaterialInfo } from './MaterialInfo';
import { Sidebar } from './Sidebar';
import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    minHeight: '100vh',
  },
  mainContent: {
    ...shorthands.margin('-0.75rem', '-0.75rem', 'calc(1.5rem - 0.75rem)', '-0.75rem'),
    flexGrow: 1,
    '@media screen and (min-width: 769px)': {
      display: 'flex',
    },
  },
  column: {
    display: 'block',
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    ...shorthands.padding('0.75rem'),
  },
  'is-2': {
    '@media screen and (min-width: 769px)': {
      ...shorthands.flex('none'),
      width: '16.66667%',
    },
  },
});

export const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.mainContent}>
        <div className={mergeClasses(classes.column, classes['is-2'])}>
          <Sidebar />
        </div>
        <div className={classes.column}>
          <Dashboard />
        </div>
        <div className={mergeClasses(classes.column, classes['is-2'])}>
          <MaterialInfo />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

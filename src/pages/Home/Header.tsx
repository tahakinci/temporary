import { Image, makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import { UserMenu } from './UserMenu';

const useStyles = makeStyles({
  navBar: {
    minHeight: '3.25rem',
    position: 'relative',
    zIndex: '30',
    backgroundColor: tokens.colorNeutralBackground1,
    '@media screen and (min-width: 1024)': {
      minHeight: '3.25rem',
      display: 'flex',
      alignItems: 'stretch',
    },
  },
  navbarMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: '100px',
    height: '50px',
  },
  box: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
    color: tokens.colorStrokeFocus2,
    ...shorthands.padding('1.25rem'),
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
    ':not(:last-child)': {
      marginBottom: '1.5rem',
    },
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <nav className={mergeClasses(classes.navBar, classes.box)}>
      <div id="navMenu" className={classes.navbarMenu}>
        <div className={classes.logo}>
          <Image src="/src/assets/interkod-logo-full.png" alt="Interkod Logo" fit="contain" />
        </div>
        <div>
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

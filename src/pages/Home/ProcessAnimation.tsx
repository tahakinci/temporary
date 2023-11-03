import { Image, makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});

export const ProcessAnimation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Image src="/src/assets/rollform-animation.png" alt="Process Animation" fit="cover" />
    </div>
  );
};

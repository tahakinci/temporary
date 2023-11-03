import { makeStyles, tokens, shorthands, mergeClasses } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  box: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
    color: tokens.colorStrokeFocus2,
    ...shorthands.padding('1.25rem'),
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
  },
});

export const MaterialInfo = () => {
  const classes = useStyles();
  return <div className={mergeClasses(classes.box, classes.root)}>MaterialInfo</div>;
};

import {
  Tree,
  TreeItemLayout,
  TreeItem,
  Text,
  makeStyles,
  shorthands,
  tokens,
  mergeClasses,
} from '@fluentui/react-components';
import { Link } from 'react-router-dom';
import useStore from '../../store/useStore';
import { ModalForm } from '../../components/ModalForm';

const useStyles = makeStyles({
  box: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
    color: tokens.colorStrokeFocus2,
    ...shorthands.padding('1.25rem'),
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
  },
});

export const Sidebar = () => {
  const classes = useStyles();
  const data = useStore((state) => state.data);

  return (
    <div className={mergeClasses(classes.box, classes.root)}>
      <div>
        <Tree aria-label="project-tree">
          <TreeItem itemType="branch">
            <TreeItemLayout>Projects</TreeItemLayout>
            <Tree>
              {data?.projects?.map((project) => (
                <TreeItem itemType="leaf" key={project.id}>
                  <TreeItemLayout>
                    <Link to={`/project/${project?.id}`}>{project?.name}</Link>
                  </TreeItemLayout>
                </TreeItem>
              ))}
            </Tree>
          </TreeItem>
        </Tree>
        <Text as="h2">Filter</Text>
      </div>
      <div>
        <ModalForm styles={classes.modal} />
      </div>
    </div>
  );
};

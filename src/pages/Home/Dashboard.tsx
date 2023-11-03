import {
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  TabValue,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from '@fluentui/react-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../store/useStore';
import { DataTable } from './DataTable';
import { DataVisualization } from './DataVisualization';
import { ProcessAnimation } from './ProcessAnimation';
import { Part } from '../../types/ApiResponseType';

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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
  animationContainer: {
    maxHeight: '200px',
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  columns: {
    ...shorthands.margin('-0.75rem', '-0.75rem', '0', '-0.75rem'),
    ':last-child': {
      marginBottom: '-0.75rem',
    },
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
  'is-7': {
    '@media screen and (min-width: 769px)': {
      ...shorthands.flex('none'),
      width: '58.3333%',
    },
  },
  'is-5': {
    '@media screen and (min-width: 769px)': {
      ...shorthands.flex('none'),
      width: '41.66667%',
    },
  },
  fullHeight: {
    height: '100%',
  },
});

export const Dashboard = () => {
  const { id } = useParams();
  const [selectedValue, setSelectedValue] = useState<TabValue>('tab1');
  const [parts, setParts] = useState<Part[]>([]);
  const onTabSelect = (_: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };

  const classes = useStyles();

  const { projects } = useStore((state) => state.data);

  const project = projects?.find((item) => item.id === +id!);

  useEffect(() => {
    setParts(project?.profile.parts ?? []);
  }, [project]);

  const handleSelection = (selectedIds: number[]) => {
    if (!project || !project.profile || !Array.isArray(project.profile.parts) || project.profile.parts.length === 0) {
      console.log('Object or property not found.');
      return;
    }

    const updatedParts = project.profile.parts.map((part) => {
      if (selectedIds.includes(part.id)) {
        // Create a copy of the part with the 'selected' property set to true
        return { ...part, selected: true };
      }
      // Create a copy of the part with the 'selected' property set to false
      return { ...part, selected: false };
    });

    // Update the state with the updated project
    setParts(updatedParts);
  };

  return (
    <div className={mergeClasses(classes.box, classes.root, classes.fullHeight)}>
      <div className={mergeClasses(classes.box, classes.animationContainer)}>
        <ProcessAnimation />
      </div>

      <div className={classes.dashboard}>
        <TabList appearance="subtle" selectedValue={selectedValue} onTabSelect={onTabSelect}>
          <Tab value="tab1">{project?.name} Parts</Tab>
          <Tab value="tab2">Second Tab</Tab>
          <Tab value="tab3">Third Tab</Tab>
          <Tab value="tab4">Fourth Tab</Tab>
        </TabList>
        <div className={classes.grow}>
          {selectedValue === 'tab1' && (
            <div className={mergeClasses(classes.columns, classes.fullHeight)}>
              <div className={classes.column}>
                <div className={mergeClasses(classes.box, classes.fullHeight)}>
                  <DataTable parts={project?.profile.parts} handleSelection={handleSelection} />
                </div>
              </div>
              <div className={classes.column}>
                <div className={mergeClasses(classes.box, classes.fullHeight)}>
                  <DataVisualization parts={parts} />
                </div>
              </div>
            </div>
          )}
          {selectedValue === 'tab2' && 'tab2'}
          {selectedValue === 'tab3' && 'tab3'}
          {selectedValue === 'tab4' && 'tab4'}
        </div>
      </div>
    </div>
  );
};

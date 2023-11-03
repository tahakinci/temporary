import {
  Option,
  Button,
  Combobox,
  ComboboxProps,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Label,
  Input,
  Tooltip,
} from '@fluentui/react-components';

// TODO : Combobox ve Input disablesi gelen veriye göre değişecek

import { AddRegular as AddButton } from '@fluentui/react-icons';
import { useState, useId } from 'react';
interface ModalFormPropType {
  styles: string;
}

export const ModalForm = ({ styles }: ModalFormPropType) => {
  const comboId = useId();
  const options = ['Interkod', 'Interdigit', 'Google', 'Microsoft', 'Apple', 'IBM', 'OpenAI', 'Samsung'];
  const [projectName, setProjectName] = useState('');
  const [matchingOptions, setMatchingOptions] = useState([...options]);

  const onChange: ComboboxProps['onChange'] = (event) => {
    const value = event.target.value.trim();
    const matches = options.filter((option) => option.toLowerCase().indexOf(value.toLowerCase()) === 0);
    setMatchingOptions(matches);
  };
  return (
    <Dialog
      modalType="modal"
      onOpenChange={(_, data) => {
        if (data.type === 'backdropClick' || data.type === 'escapeKeyDown') data.open = true;
        if (data.event.currentTarget.id === 'modal-close-button') {
          if (!confirm('are you sure')) {
            data.open = true;
          }
        }
      }}
    >
      <DialogTrigger disableButtonEnhancement>
        <Button>
          <AddButton />
        </Button>
      </DialogTrigger>
      <DialogSurface aria-describedby={undefined}>
        <form>
          <DialogBody>
            <DialogTitle>New project</DialogTitle>
            <DialogContent className={styles}>
              <Label required htmlFor={'project-name'}>
                Project name
              </Label>
              <Input
                required
                type="text"
                id={'project-name'}
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Please enter the project name..."
              />
              <Label id={comboId}>Companies</Label>
              <Tooltip
                content="You need to enter a project name to enable"
                relationship="description"
                withArrow
                positioning="below-start"
                visible={!projectName.length}
                onVisibleChange={(e, data) => console.log(e, data)}
              >
                <Combobox
                  aria-labelledby={comboId}
                  placeholder="Select a company"
                  onChange={onChange}
                  disabled={projectName === ''}
                >
                  {matchingOptions.map((option) => (
                    <Option key={option}>{option}</Option>
                  ))}
                  {matchingOptions.length === 0 ? (
                    <Option key="no-results" text="">
                      No results found
                    </Option>
                  ) : null}
                </Combobox>
              </Tooltip>
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button id="modal-close-button" appearance="secondary">
                  Close
                </Button>
              </DialogTrigger>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
            </DialogActions>
          </DialogBody>
        </form>
      </DialogSurface>
    </Dialog>
  );
};

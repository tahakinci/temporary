import {
  Menu,
  MenuTrigger,
  Persona,
  MenuPopover,
  MenuList,
  Button,
  DialogTrigger,
  Dialog,
  DialogSurface,
  DialogBody,
  DialogContent,
  DialogActions,
} from '@fluentui/react-components';

export const UserMenu = () => {
  return (
    <>
      <Menu positioning={'above-start'}>
        <MenuTrigger disableButtonEnhancement>
          <Persona
            name="Taha Akıncı"
            presence={{ status: 'available' }}
            avatar={{
              image: {
                src: '/src/assets/avatar.jpeg',
              },
              size: 40,
            }}
            secondaryText="Developer"
            tertiaryText="Interkod"
          />
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <Button appearance="transparent">Ayarlar</Button>

            <Dialog>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="transparent">Çıkış</Button>
              </DialogTrigger>
              <DialogSurface>
                <DialogBody>
                  <DialogContent>Çıkış yapmak istediğinize emin misiniz?</DialogContent>
                  <DialogActions>
                    <DialogTrigger disableButtonEnhancement>
                      <Button appearance="outline">İptal</Button>
                    </DialogTrigger>
                    <Button appearance="primary">Çıkış</Button>
                  </DialogActions>
                </DialogBody>
              </DialogSurface>
            </Dialog>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
};

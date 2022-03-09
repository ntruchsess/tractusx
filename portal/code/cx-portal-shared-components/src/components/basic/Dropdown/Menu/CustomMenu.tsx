import { Menu, MenuItem, Fade } from '@mui/material'
import { CustomSubMenuItems } from './CustomSubMenuItems'

interface CustomMenuProps {
  open: boolean,
  anchorElement: any,
  items: any
  onClose: any
}

const CustomMenuItems = (props: { items: any }) => {
  const {items} = props;
  return items.map((item: any) => {
      if (item.hasOwnProperty("subMenuItems")) {
        return (
          <CustomSubMenuItems
            key={item.key}
            caption={item.caption}
            menuItems={item.subMenuItems}
          />
        );
      }

      return (
        <MenuItem key={item.key} onClick={item.onClick}>
          {item.caption}
        </MenuItem>
      );
    });
}

export const CustomMenu = (props: CustomMenuProps) => {
  const { open, items, onClose, anchorElement } = props;
  return (      
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorElement}
        open={open}
        onClose={onClose}
        TransitionComponent={Fade}
        elevation={0}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: 'top', horizontal: 'left', }}
      >
        <CustomMenuItems items={items} />
      </Menu>
  )
}

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { IconButton } from "@mui/material";
import MenuIcon from "./MenuSvg";
export default function FadeMenu({ setFieldSelected, data }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = React.useCallback(
    (e: any, id: string) => {
      e.stopPropagation();
      setFieldSelected((prev: any) => {
        const newState = { ...prev };
        delete newState[id];
        console.log("id:", id, newState, "new state");
        return newState;
      });
      handleClose();
    },
    [setFieldSelected]
  );

  return (
    <div>
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={(e) => handleRemove(e, data.id)}>Remove</MenuItem>
      </Menu>
    </div>
  );
}

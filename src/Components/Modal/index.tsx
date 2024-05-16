import {
  Box,
  Button,
  Modal as MuiModal,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

//ideally this will be a reusable component
const Modal = ({ open, handleClose, dataToSubmit }: any) => {
  //will comefrom api resonse
  const [success, setSuccess] = useState(false);
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {success ? (
          <Stack justifyContent={"center"}>
            <Typography color={"#000000"} textAlign="center" fontSize={16}>
              Successfully Submitted the Following Fields!
              {dataToSubmit.map((item: any) => (
                <Typography key={item.id}>{item.label}</Typography>
              ))}
            </Typography>
            <Button
              onClick={() => {
                handleClose();
                setSuccess(false);
              }}
            >
              Ok
            </Button>
          </Stack>
        ) : (
          <>
            <Typography color={"#000000"} textAlign="center" fontSize={16}>
              Are you sure you want to confirm the selected fields?
            </Typography>

            <Stack direction="row" justifyContent="center">
              <Button onClick={() => setSuccess(true)}>Yes</Button>
              <Button onClick={handleClose}>No</Button>
            </Stack>
          </>
        )}
      </Box>
    </MuiModal>
  );
};

export default Modal;

import React, { memo } from "react";
import { AppModal } from "../Common";
import { Button, Stack } from "@mui/material";
import FormContentModal from "./FormContentModal";
import { useForm } from "react-hook-form";
import useDeviceAction from "./hooks/useDeviceAction";
import { DataConstants } from "src/const";

const DeviceAddModal = ({ open, onClose }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: DEFAULT_VALUE,
  });

  const { handleCreateDevice } = useDeviceAction();

  const handleSubmitForm = (data) => {
    handleCreateDevice({
      ...data,
      id: 0,
      status: data.status
        ? DataConstants.STATUS_TYPE.ACTIVE
        : DataConstants.STATUS_TYPE.INACTIVE,
    });
    onClose();
  };

  return (
    <AppModal
      open={open}
      onClose={onClose}
      component="form"
      onSubmit={handleSubmit(handleSubmitForm)}
      modalTitleProps={{
        title: "Add Device",
      }}
      modalActionsProps={{
        children: (
          <Stack direction={"row"} justifyContent={"flex-end"} spacing={1}>
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" color="success">
              Create
            </Button>
          </Stack>
        ),
      }}
      modalContentProps={{
        content: <FormContentModal control={control} />,
      }}
    />
  );
};

export default memo(DeviceAddModal);

const DEFAULT_VALUE = {
  ipTcpip: "",
  port: "",
  username: "",
  password: "",
  description: "",
  status: true,
};

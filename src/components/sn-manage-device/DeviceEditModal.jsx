import React, { memo, useEffect, useState } from "react";
import { AppModal } from "../Common";
import { Button, Stack } from "@mui/material";
import FormContentModal from "./FormContentModal";
import { useForm } from "react-hook-form";
import useDeviceAction from "./hooks/useDeviceAction";

const DeviceEditModal = ({ data, open, onClose }) => {
  const [initialValues, setInitialValues] = useState(DEFAULT_VALUE);

  const { control, handleSubmit } = useForm({
    values: initialValues,
  });

  const { handleCreateDevice } = useDeviceAction();

  const handleSubmitForm = (data) => {
    handleCreateDevice({ ...data, id: 0 });
    onClose();
  };

  useEffect(() => {
    setInitialValues({
      ipTcpip: data?.ipTcpip,
      port: data?.port,
      username: data?.username,
      password: data?.password,
      description: data?.description,
    });
  }, [data]);

  return (
    <AppModal
      open={open}
      onClose={onClose}
      component="form"
      onSubmit={handleSubmit(handleSubmitForm)}
      modalTitleProps={{
        title: "Edit Device",
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

export default memo(DeviceEditModal);

const DEFAULT_VALUE = {
  ipTcpip: "",
  port: "",
  username: "",
  password: "",
  description: "",
};

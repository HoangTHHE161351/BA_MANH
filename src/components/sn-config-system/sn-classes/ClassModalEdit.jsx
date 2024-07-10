import { Button, Stack } from "@mui/material";
import React, { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  AppFormControlToggle,
  AppFormTextField,
  AppModal,
} from "src/components/Common";
import { DataConstants } from "src/const";
import useCreateClass from "./hooks/useCreateClass";
import useUpdateClass from "./hooks/useUpdateClass";

const ClassModalEdit = ({ open, onClose, data }) => {
  const [initialValue, setInitialValue] = React.useState(DEFAULT_VALUE);

  const { control, handleSubmit, reset } = useForm({
    values: initialValue,
  });
  const handleCreateClass = useCreateClass();
  const handleUpdateClass = useUpdateClass();

  const handleSubmitForm = (dataSubmit) => {
    console.log(dataSubmit);
    if (data) {
      handleUpdateClass({
        ...dataSubmit,
        id: data.id,
        status: dataSubmit.status
          ? DataConstants.STATUS_TYPE.ACTIVE
          : DataConstants.STATUS_TYPE.INACTIVE,
      });
    } else {
      handleCreateClass({
        ...dataSubmit,
        status: dataSubmit.status
          ? DataConstants.STATUS_TYPE.ACTIVE
          : DataConstants.STATUS_TYPE.INACTIVE,
      });
    }
    reset(DEFAULT_VALUE);
    onClose();
  };

  useEffect(() => {
    if (data) {
      setInitialValue({
        className: data.className,
        description: data.description,
        status: data.status === DataConstants.STATUS_TYPE.ACTIVE ? true : false,
      });
    }
  }, [data]);

  return (
    <AppModal
      open={open}
      onClose={() => {
        onClose();
        reset(DEFAULT_VALUE);
      }}
      component={"form"}
      onSubmit={handleSubmit(handleSubmitForm)}
      modalTitleProps={{
        title: data ? "Edit Room" : "Create Room",
      }}
      modalActionsProps={{
        children: (
          <Stack direction={"row"} justifyContent={"flex-end"} spacing={1}>
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" color="success">
              {data ? "Update" : "Create"}
            </Button>
          </Stack>
        ),
      }}
      modalContentProps={{
        content: (
          <Stack direction={"column"} spacing={1.5} px={3}>
            <AppFormTextField
              label={"Class Name"}
              name={"className"}
              required
              control={control}
            />
            <AppFormTextField
              label={"Description"}
              name={"description"}
              required
              control={control}
            />
            <AppFormControlToggle
              control={control}
              label={"Status"}
              name={"status"}
            />
          </Stack>
        ),
      }}
    />
  );
};

export default memo(ClassModalEdit);

const DEFAULT_VALUE = {
  className: "",
  description: "",
  status: false,
};

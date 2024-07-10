import { Button, Stack } from "@mui/material";
import React, { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  AppFormControlToggle,
  AppFormTextField,
  AppFormTimePicker,
  AppModal,
} from "src/components/Common";
import { DataConstants } from "src/const";
import useCreateTimeSlots from "./hooks/useCreateTimeSlots";
import useUpdateTimeSlots from "./hooks/useUpdateTimeSlots";
import dayjs from "dayjs";

const RoomModalEdit = ({ open, onClose, data }) => {
  const [initialValue, setInitialValue] = React.useState(DEFAULT_VALUE);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: initialValue,
  });
  const handleCreateTimeSlots = useCreateTimeSlots();
  const handleUpdateTimeSlots = useUpdateTimeSlots();

  const handleSubmitForm = (dataSubmit) => {
    const startTime = dayjs(dataSubmit.startTime);
    const endTime = dayjs(dataSubmit.endTime);
    if (data) {
      handleUpdateTimeSlots({
        ...dataSubmit,
        id: data.id,
        startTime: {
          hour: startTime.hour(),
          minute: startTime.minute(),
          second: 0,
          nano: 0,
        },
        endTime: {
          hour: endTime.hour(),
          minute: endTime.minute(),
          second: 0,
          nano: 0,
        },
        statusEdit: dataSubmit.statusEdit
          ? DataConstants.STATUS_TYPE.ACTIVE
          : DataConstants.STATUS_TYPE.INACTIVE,
      });
    } else {
      handleCreateTimeSlots({
        ...dataSubmit,
        startTime: {
          hour: startTime.hour(),
          minute: startTime.minute(),
          second: 0,
          nano: 0,
        },
        endTime: {
          hour: endTime.hour(),
          minute: endTime.minute(),
          second: 0,
          nano: 0,
        },
        statusEdit: dataSubmit.statusEdit
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
        startTime: data.startTime ? dayjs(data.startTime, "HH:mm:ss") : null,
        endTime: data.endTime ? dayjs(data.endTime, "HH:mm:ss") : null,
        description: data.description,
        statusEdit:
          data.status === DataConstants.STATUS_TYPE.ACTIVE ? true : false,
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
        title: data ? "Edit Time Slots" : "Create Time Slots",
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
            <AppFormTimePicker
              label={"Start Time"}
              name={"startTime"}
              rules={{
                required: { value: true, message: "Start Time is required" },
              }}
              required
              control={control}
              timePickerProps={{
                slotProps: {
                  textField: {
                    error: !!errors?.startTime,
                    helperText: errors?.startTime?.message,
                  },
                },
              }}
            />
            <AppFormTimePicker
              label={"End Time"}
              name={"endTime"}
              rules={{
                required: { value: true, message: "End Time is required" },
              }}
              required
              control={control}
              timePickerProps={{
                slotProps: {
                  textField: {
                    error: !!errors?.endTime,
                    helperText: errors?.endTime?.message,
                  },
                },
              }}
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
              name={"statusEdit"}
            />
          </Stack>
        ),
      }}
    />
  );
};

export default memo(RoomModalEdit);

const DEFAULT_VALUE = {
  roomName: "",
  description: "",
  status: false,
};

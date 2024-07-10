import { Stack } from "@mui/material";
import React, { memo } from "react";
import { AppFormControlToggle, AppFormTextField } from "../Common";

const FormContentModal = ({ control }) => {
  return (
    <Stack direction={"column"} spacing={1} px={"24px"}>
      <AppFormTextField
        label={"IP"}
        control={control}
        name={"ipTcpip"}
        required
      />
      <AppFormTextField
        label={"Port"}
        control={control}
        name={"port"}
        required
      />
      <AppFormTextField
        label={"User Name"}
        control={control}
        name={"username"}
        required
      />
      <AppFormTextField
        label={"Password"}
        control={control}
        name={"password"}
        required
        textfieldProps={{
          type: "password",
          inputProps: { autoComplete: "new-password" },
        }}
      />
      <AppFormTextField
        label={"Description"}
        control={control}
        name={"description"}
        required
      />
      <AppFormControlToggle
        control={control}
        name={"status"}
        label={"Device Status"}
      />
    </Stack>
  );
};

export default memo(FormContentModal);

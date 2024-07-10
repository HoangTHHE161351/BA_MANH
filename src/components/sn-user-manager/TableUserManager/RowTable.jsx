import React, { memo } from "react";
import {
  AppTableCell,
  AppTableRow,
  DateCell,
  EditCell,
  StatusCell,
} from "src/components/Common/TableCommon";
import usePostUser from "../hooks/usePostUser";
import { DataConstants } from "src/const";
import { userActions } from "src/redux-store/store";
import { useDispatch } from "react-redux";
import { PasswordResetIcon } from "src/assets/icons";
import { IconButton } from "@mui/material";

const RowTable = ({ data, index, onOpenEdit, onOpenReset }) => {
  const dispatch = useDispatch();
  const { handleChangeStatus } = usePostUser();

  return (
    <AppTableRow>
      <AppTableCell align="center">{index + 1}</AppTableCell>
      <EditCell buttonProps={{ onClick: onOpenEdit }} />
      {/* <ViewCell /> */}
      <AppTableCell
        align="left"
        sx={{
          whileSpace: "nowrap",
        }}
      >
        {data.username}
      </AppTableCell>
      <AppTableCell align="left">{data.firstName}</AppTableCell>
      <AppTableCell align="left">{data.lastName}</AppTableCell>
      <AppTableCell
        align="left"
        sx={{
          whileSpace: "nowrap",
        }}
      >
        {data.email}
      </AppTableCell>
      <AppTableCell align="left">{data.phone}</AppTableCell>
      <AppTableCell
        align="left"
        sx={{
          whileSpace: "nowrap",
        }}
      >
        {data.gender}
      </AppTableCell>
      <DateCell align="left" date={data.dob} />
      <AppTableCell
        align="left"
        sx={{
          whileSpace: "nowrap",
        }}
      >
        {data.roleName}
      </AppTableCell>
      <StatusCell
        onStatusChange={(_, value) => {
          handleChangeStatus({
            id: data.id,
            status: value
              ? DataConstants.STATUS_TYPE.ACTIVE
              : DataConstants.STATUS_TYPE.INACTIVE,
            onSuccess: () => {
              dispatch(
                userActions.getUserList(DataConstants.PAGINATION_DEFAULT)
              );
            },
          });
        }}
        status={data.status}
      />
      <AppTableCell align="center">
        <IconButton
          sx={{
            color: "warning.main",
            height: 24,
            width: 24,
          }}
          onClick={onOpenReset}
        >
          <PasswordResetIcon />
        </IconButton>
      </AppTableCell>
    </AppTableRow>
  );
};

export default memo(RowTable);

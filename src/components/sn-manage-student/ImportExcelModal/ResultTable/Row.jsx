import React, { memo } from "react";
import { AppTableCell, AppTableRow } from "src/components/Common/TableCommon";
import { DataConstants } from "src/const";

const Row = ({ data, order, ...otherProps }) => {
  const isError = data.validateResult === DataConstants.BOOLEAN_TYPE.false;

  return (
    <AppTableRow
      tabIndex={-1}
      sx={{
        "&& .MuiTableCell-root": {
          color: isError ? "error.main" : "inherit",
        },
      }}
      {...otherProps}
    >
      <AppTableCell align="center">{order}</AppTableCell>
      <AppTableCell sx={{ whiteSpace: "nowrap" }}>
        {data?.username}
      </AppTableCell>
      <AppTableCell>{data?.firstName}</AppTableCell>
      <AppTableCell>{data?.lastName}</AppTableCell>
      <AppTableCell>{data?.email}</AppTableCell>
      <AppTableCell>{data?.roleName}</AppTableCell>
      <AppTableCell>{data?.dob}</AppTableCell>
      <AppTableCell>{data?.sex}</AppTableCell>
      <AppTableCell>{data?.phoneNumber}</AppTableCell>
      <AppTableCell>{data?.address}</AppTableCell>
      <AppTableCell>{data?.status}</AppTableCell>
      <AppTableCell>{data.errorMess}</AppTableCell>
    </AppTableRow>
  );
};

export default memo(Row);

// {
//   "id": null,
//   "avatar": "",
//   "username": "tungtdhe162589",
//   "firstName": "Tùng",
//   "lastName": "Trần Dương",
//   "dob": "2002-02-25",
//   "sex": 1,
//   "email": "tungtdhe162589@gmail.com",
//   "phoneNumber": "0365847542",
//   "address": "Hà Nội",
//   "roleName": "STAFF",
//   "status": "SUCCESS",
//   "errorMess": null
// },

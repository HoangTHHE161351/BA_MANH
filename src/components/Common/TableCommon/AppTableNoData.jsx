import React, { memo } from "react";
import AppTableRow from "./AppTableRow";
import AppTableCell from "./AppTableCell";
import { CircularProgress, Typography } from "@mui/material";

const AppTableNoData = ({
  title = "Không có dữ liệu!",
  isLoading,
  rowProps,
  sx,
  ...otherProps
}) => {
  return (
    <AppTableRow
      sx={{
        pointerEvents: "none",
        ...rowProps?.sx,
      }}
      {...rowProps}
    >
      <AppTableCell sx={{ border: "unset !important" }}>
        <Typography
          sx={{
            position: "absolute",
            left: "50%",
            top: "35%",
            transform: "translateX(-50%)",
            ...sx,
          }}
          {...otherProps}
        >
          {isLoading ? <CircularProgress color="inherit" /> : title}
        </Typography>
      </AppTableCell>
    </AppTableRow>
  );
};

export default memo(AppTableNoData);

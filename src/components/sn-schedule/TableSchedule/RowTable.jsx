import { Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { AppTableCell, AppTableRow } from "src/components/Common/TableCommon";

const RowTable = ({ data, onClickDetail }) => {
  return (
    <AppTableRow
      hover={false}
      sx={{
        height: "80px",
      }}
    >
      <AppTableCell align="left">
        <Typography whiteSpace={"nowrap"}>{data?.[0]}</Typography>
      </AppTableCell>
      {data?.slice(1).map((cell, index) => {
        const data = JSON.parse(cell);
        return (
          <AppTableCell
            key={index}
            align="left"
            sx={{
              ":hover": data && {
                bgcolor: "grey.300",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              onClickDetail(data);
            }}
          >
            <Stack>
              {(data?.className || data?.subjectCode) && (
                <Typography>
                  {data?.className} {data?.subjectCode}
                </Typography>
              )}
              {data?.teacherCode && (
                <Typography fontSize={14}>
                  Teacher: {data?.teacherCode}
                </Typography>
              )}
            </Stack>
          </AppTableCell>
        );
      })}
    </AppTableRow>
  );
};

export default memo(RowTable);

// {"id":5,"className":"SE1635","subjectCode":"SE104","teacherCode":"tungtdhe162589"}

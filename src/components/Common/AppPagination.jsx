import { Box, TablePagination } from "@mui/material";
import React, { forwardRef, useState } from "react";
import { DataConstants } from "src/const";

const AppPagination = forwardRef(
  ({ currentPage, pageSize, onPageChange, totalData, ...otherProps }, ref) => {
    const [page, setPage] = useState({
      size: DataConstants.PAGINATION_DEFAULT.size,
      page: DataConstants.PAGINATION_DEFAULT.page,
    });

    const handlePageChange = (key) => (value) => {
      let newPage = {
        ...page,
        [key]: value,
      };

      if (key === PAGE_CHANGE.pageSize) {
        newPage = {
          ...newPage,
          page: DataConstants.PAGINATION_DEFAULT.page,
        };
      }
      setPage(newPage);
      onPageChange(newPage);
    };

    return (
      <Box sx={style.wrapper} ref={ref} {...otherProps}>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={totalData}
          rowsPerPage={page.size}
          page={page.page - 1}
          onPageChange={(e, page) =>
            handlePageChange(PAGE_CHANGE.currentPage)(page + 1)
          }
          onRowsPerPageChange={(e) =>
            handlePageChange(PAGE_CHANGE.pageSize)(e.target.value)
          }
        />
      </Box>
    );
  }
);

export default AppPagination;

const PAGE_CHANGE = {
  pageSize: "size",
  currentPage: "page",
};

const style = {
  wrapper: {
    height: 40,
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #F2F3F5",
    justifyContent: "flex-end",
    pr: 3.25,
    pl: 3.25,
    position: "relative",
    backgroundColor: "common.white",
    boxShadow: "2px 0px 4px 0px rgba(0, 0, 0, 0.2)",
  },
};

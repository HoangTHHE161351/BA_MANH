import React, { memo, useEffect, useMemo, useState } from "react";
import Row from "./Row";
import { AppTableLayout } from "src/components/Common/TableCommon";
import Header from "./Header";

const ResultTable = ({ data }) => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPage: 1,
    pageSize: 50,
  });

  const paginatedData = useMemo(
    () => getDataPagination(data, pagination.currentPage, pagination.pageSize),
    [data, pagination.currentPage, pagination.pageSize]
  );

  const handlePageChange = (page) => {
    setPagination((pre) => ({
      ...pre,
      ...page,
    }));
  };

  useEffect(() => {
    setPagination((pre) => ({
      ...pre,
      totalPage: Math.ceil(data.length / pagination.pageSize) || 1,
    }));
  }, [data, pagination.pageSize]);

  return (
    <AppTableLayout
      paperProps={{
        sx: {
          mx: 0,
        },
      }}
      totalData={data.length}
      currentPage={pagination.currentPage}
      pageSize={pagination.pageSize}
      totalPage={pagination.totalPage}
      onPageChange={handlePageChange}
      header={<Header />}
    >
      {paginatedData?.map((row, index) => {
        return (
          <Row
            key={index}
            data={row}
            order={
              index + 1 + pagination.pageSize * (pagination.currentPage - 1)
            }
          />
        );
      })}
    </AppTableLayout>
  );
};

const getDataPagination = (array, pageNumber, pageSize) => {
  // Tính toán chỉ số bắt đầu và kết thúc của các phần tử trong trang hiện tại
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Trả về các phần tử trong trang hiện tại
  return array.slice(startIndex, endIndex);
};

export default memo(ResultTable);

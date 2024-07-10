import React, { useState, useEffect, useCallback, memo } from "react";
import { AppTableLayout } from "src/components/Common/TableCommon";
import HeaderTable from "./HeaderTable";
import RowTable from "./RowTable";
import UserManageEditModal from "../UserManageEditModal";
//import { useSelector } from "react-redux";
import PasswordResetModal from "../PasswordResetModal";

const TableUserManager = () => {
  const [open, setOpen] = useState(false);
  const [openReset, setOpenReset] = useState(false);
  const [rowSelected, setRowSelected] = useState(null);
  const [userName, setUserName] = useState(null);
  const [page] = useState(1); // Removed setPage since it's not used
  const [size] = useState(10); // Removed setSize since it's not used
  // const { userList, isFetching, totalData } = useSelector(
  //   (state) => state.userReducer
  // );
  const [userList, setUserList] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const getDataList = useCallback(() => {
    setIsFetching(true);
    fetch(
      `http://localhost:8080/api/v1/user/all-users?page=${page}&size=${size}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data user:", data);
        if (data.code === 200) {
          setUserList(data.data.content);
          setTotalData(data.data.totalElements);
        } else {
          // Handle the case where data is not as expected
        }
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching subjects:", error);
        setIsFetching(false);
      });
  }, [page, size]);

  useEffect(() => {
    getDataList();
  }, [getDataList]);

  return (
    <>
      <AppTableLayout
        totalData={totalData}
        header={<HeaderTable />}
        isLoading={isFetching}
      >
        {userList.map((row, index) => {
          const order = (page - 1) * size + (index + 1);
          return (
            <RowTable
              key={row.id}
              data={row}
              index={order}
              onOpenEdit={() => {
                setRowSelected(row);
                setOpen(true);
              }}
              onOpenReset={() => {
                setUserName(row.username);
                setOpenReset(true);
              }}
            />
          );
        })}
      </AppTableLayout>
      <UserManageEditModal
        data={rowSelected}
        open={open}
        onClose={() => {
          setRowSelected(null);
          setOpen(false);
        }}
      />
      <PasswordResetModal
        onClose={() => setOpenReset(false)}
        open={openReset}
        userName={userName}
      />
    </>
  );
};

export default memo(TableUserManager);

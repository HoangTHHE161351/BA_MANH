import React, { memo, useCallback, useEffect, useState } from "react";
import {
  AppTable,
  AppTableBody,
  AppTableContainer,
  AppTableHead,
  AppTableNoData,
} from "src/components/Common/TableCommon";
import HeaderTable from "./HeaderTable";
import RowTable from "./RowTable";
import { CheckAttendanceModal, ScheduleDetailModal } from "..";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import { DataConstants } from "src/const";

const TableSchedule = () => {
  const [open, setOpen] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [dataSelected, setDataSelected] = useState(null);
  const [dataAttend, setDataAttend] = useState(null);

  const { userInfo } = useSelector((state) => state.authReducer);

  const { schedules, isFetching } = useSelector(
    (state) => state.scheduleReducer
  );

  // const [page, setPage] = useState(1);
  // const [size, setSize] = useState(10);

  // const [scheduleList, setScheduleList] = useState([]);
  // const [totalData, setTotalData] = useState(0);
  // const [isFetching, setIsFetching] = useState(false);

  // function getDataList() {
  //   fetch(
  //     `http://localhost:8080/api/v1/schedule/view-schedule?date=${date}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Fetched data schedule:", data);
  //       if (data.code === 200) {
  //         setScheduleList(data.data.content);
  //         setTotalData(data.data.totalElements);
  //       } else {
  //         // setUserList([]);
  //       }
  //       setIsFetching(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching schedule:", error);
  //     });
  // }
  // setIsFetching(false);

  // useEffect(() => {
  //   getDataList();
  // }, []);

  const handleClickDetail = useCallback(
    (data) => {
      if (userInfo.roleId === DataConstants.ROLE.TEACHER) {
        if (data.id) {
          setOpen(true);
          setDataAttend(data);
        }
      } else if (
        userInfo.roleId === DataConstants.ROLE.ADMIN ||
        userInfo.roleId === DataConstants.ROLE.STAFF
      ) {
        setOpenModalInfo(true);
        setDataSelected(data);
      }
    },
    [userInfo]
  );

  useEffect(() => {
    const tableEl = document.getElementById("table");
    const heightWindow = window.innerHeight;
    const tableTop = tableEl.getBoundingClientRect().top;
    tableEl.style.height = `${heightWindow - tableTop}px`;
  }, []);

  return (
    <>
      <Paper
        className="custom-scrollbar"
        sx={{
          mx: 3,
          overflow: "hidden",
          boxShadow: "unset",
          position: "relative",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <AppTableContainer id="table">
          <AppTable>
            <AppTableHead>
              <HeaderTable HeaderCell={schedules?.[0]} />
            </AppTableHead>
            <AppTableBody>
              {schedules?.slice(1)?.length ? (
                schedules?.slice(1)?.map((schedule, index) => (
                  <RowTable
                    key={index}
                    data={schedule}
                    onClickDetail={(data) => {
                      handleClickDetail(data);
                    }}
                  />
                ))
              ) : (
                <AppTableNoData isLoading={isFetching} />
              )}
            </AppTableBody>
          </AppTable>
        </AppTableContainer>
      </Paper>
      <CheckAttendanceModal
        data={dataAttend}
        open={open}
        onClose={() => setOpen(false)}
      />
      <ScheduleDetailModal
        data={dataSelected}
        open={openModalInfo}
        onClose={() => setOpenModalInfo(false)}
      />
    </>
  );
};

export default memo(TableSchedule);

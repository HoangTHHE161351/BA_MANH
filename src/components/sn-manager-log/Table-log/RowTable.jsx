import React, { memo, useState } from "react";
import { AppTableCell, AppTableRow } from "src/components/Common/TableCommon";
import { Button } from "@mui/material";
import LogDetailModal from "../LogDetailModal";

const RowTable = ({ data, index }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const showModal = () => {
    setModalData(data); // Pass the current row's data to the modal
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <AppTableRow>
        <AppTableCell align="center">{index + 1}</AppTableCell>
        {/* <ViewCell /> */}
        <AppTableCell align="left">{data.roomName}</AppTableCell>
        <AppTableCell align="left">{data.userName}</AppTableCell>
        <AppTableCell align="left">{data.fullName}</AppTableCell>
        <AppTableCell align="left">{data.className}</AppTableCell>
        <AppTableCell align="left">{data.subject}</AppTableCell>
        <AppTableCell align="left">{data.checkIn}</AppTableCell>
        <AppTableCell align="left">{data.checkOut}</AppTableCell>
        <AppTableCell align="left">{data.note}</AppTableCell>
        <AppTableCell
          align="center"
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          <Button onClick={showModal}>View</Button>
        </AppTableCell>
      </AppTableRow>
      {modalData && (
        <LogDetailModal
          open={isModalVisible}
          onClose={handleCancel}
          user={modalData.user}
          data={modalData.logDetails}
        />
      )}
    </>
  );
};

export default memo(RowTable);

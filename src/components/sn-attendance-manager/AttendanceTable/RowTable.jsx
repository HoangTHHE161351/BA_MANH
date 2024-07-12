import React, { memo, useState } from "react";
import { AppTableRow, AppTableCell } from "src/components/Common/TableCommon"; // Ví dụ import các thành phần cần thiết
import Switch from "@mui/material/Switch"; // Import Switch từ Material-UI

const TableRowComponent = ({ index }) => {
  // Giả định dữ liệu sinh viên và trạng thái điểm danh
  const [studentsData, setStudentsData] = useState([
    {
      id: 1,
      studentName: "John Doe",
      date: "2024-07-12",
      slot: "Morning",
      room: "Room A",
      classroom: "Class A",
      subject: "Mathematics",
      lecturer: "Dr. Smith",
      attendanceStatus: "Present",
      description: "Lorem ipsum dolor sit amet",
    },
  ]);

  // Hàm xử lý sự kiện thay đổi trạng thái điểm danh
  const handleAttendanceStatusChange = (id) => {
    const updatedStudentsData = studentsData.map((student) => {
      if (student.id === id) {
        // Đảo ngược trạng thái điểm danh
        const newStatus = student.attendanceStatus === "Present" ? "Absent" : "Present";
        return { ...student, attendanceStatus: newStatus };
      }
      return student;
    });
    setStudentsData(updatedStudentsData);
    // Thực hiện các hành động khác cập nhật trạng thái điểm danh
    // Ví dụ: dispatch(changeAttendanceStatus(id, newStatus));
  };

  return (
    <>
      {studentsData.map((student) => (
        <AppTableRow key={student.id}>
          <AppTableCell align="center">{index + 1}</AppTableCell>
          <AppTableCell align="left">{student.studentName}</AppTableCell>
          <AppTableCell align="left">{student.date}</AppTableCell>
          <AppTableCell align="left">{student.slot}</AppTableCell>
          <AppTableCell align="left">{student.room}</AppTableCell>
          <AppTableCell align="left">{student.classroom}</AppTableCell>
          <AppTableCell align="left">{student.subject}</AppTableCell>
          <AppTableCell align="left">{student.lecturer}</AppTableCell>
          <AppTableCell align="left">
            {/* Sử dụng Switch để chỉnh sửa trạng thái điểm danh */}
            <Switch
              checked={student.attendanceStatus === "Present"}
              onChange={() => handleAttendanceStatusChange(student.id)}
              inputProps={{ "aria-label": "Toggle attendance status" }}
            />
          </AppTableCell>
          <AppTableCell align="left">{student.description}</AppTableCell>
        </AppTableRow>
      ))}
    </>
  );
};

export default memo(TableRowComponent);

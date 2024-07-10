import React, { useState, useEffect } from "react";
import { AppTableLayout } from "src/components/Common/TableCommon";
import HeaderTable from "./HeaderTable";
import RowTable from "./RowTable";
import { useSelector } from "react-redux";
import TeacherManageEditModal from "../TeacherManageEditModal";
import PasswordResetModal from "../PasswordResetModal";

const TableTeacherManager = () => {
  const [open, setOpen] = useState(false);
  const [openReset, setOpenReset] = useState(false);
  const [rowSelected, setRowSelected] = useState(null);
  const [userName, setUserName] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isFetchingSubjects, setIsFetchingSubjects] = useState(false);
  const { teacherList, isFetching, totalData } = useSelector(
    (state) => state.teacherReducer
  );
  console.log(isFetching)

  useEffect(() => {
    if (rowSelected) {
      setIsFetchingSubjects(true);
      fetch(`http://localhost:8080/api/v1/teacher/teacher-subject?id=${rowSelected.id}`)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched subjects data:', data);
          if (data.code === 200) {
            setSubjects(data.data);
          } else {
            setSubjects([]);
          }
          setIsFetchingSubjects(false);
        })
        .catch(error => {
          console.error('Error fetching subjects:', error);
          setIsFetchingSubjects(false);
        });
    }
  }, [rowSelected]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/teacher/users-teacher?page=1&size=10`)
    .then(response => response.json())
    .then(data => {
      console.log('Fetched subjects data=============================================', data);
      if (data.code === 200) {
        setTeachers(data.data.content);
      } else {
        setTeachers([]);
      }
      // setIsFetchingSubjects(false);
    })
    .catch(error => {
      console.error('Error fetching subjects:', error);
      // setIsFetchingSubjects(false);
    });
  }, []); 
  return (
    <>
      <AppTableLayout
        totalData={totalData}
        header={<HeaderTable />}
        isLoading={isFetching}
      >
      {console.log(teachers)}
        {teachers.map((row, index) => {
          return (
            <RowTable
              key={index}
              data={row}
              index={index}
              onOpenEdit={() => {
                setRowSelected(row);
                console.log('Selected row:', row); // Log selected row
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
      <TeacherManageEditModal
        data={rowSelected}
        open={open}
        onClose={() => {
          setRowSelected(null);
          setSubjects([]);
          setOpen(false);
        }}
        subjects={subjects}
        isFetchingSubjects={isFetchingSubjects}
      />
      <PasswordResetModal
        onClose={() => setOpenReset(false)}
        open={openReset}
        userName={userName}
      />
    </>
  );
};

export default TableTeacherManager;

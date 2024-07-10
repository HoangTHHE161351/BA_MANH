import { Stack, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import Content from "./Content";
import ChoosesExcelFileButton from "./ChoosesExcelFileButton";
import { AppConfirmModal } from "src/components/Common";
import { AppConstants, DataConstants } from "src/const";
import useExportExcel from "src/components/sn-user-manager/hooks/useExportExcel";
import { usePostUser } from "src/components/sn-user-manager";
import dayjs from "dayjs";

const ImportExcelModal = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [validResArr, setValidResArr] = useState([]);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  const { handleReadExcel, handleCreateExcel } = useExportExcel();
  const { handleImportUser } = usePostUser();

  const dataVerified = useMemo(
    () =>
      validResArr
        .filter(
          (item) => item.validateResult === DataConstants.BOOLEAN_TYPE.true
        )
        .map((item) => ({
          code: item.data.code,
          name: item.data.name,
          note: item.data.note,
        })),
    [validResArr]
  );

  const downloadTemplateFile = () => {
    handleCreateExcel({
      fileName: "import_user.xlsx",
      tableName: "Import User",
      columns: HEADER_EXCEL,
      hasTemplate: false,
      onCustomWorkSheet: customWorkSheet,
    });
  };

  const handleChangeFile = (event) => {
    const newFile = event.target.files[0];
    setExcelFile(newFile || null);
  };
  const handleUploadFile = async () => {
    if (excelFile) {
      const data = await handleReadExcel({
        file: excelFile,
        metaId: META_ID,
        metaValue: META_VALUE,
        objectMapping: [
          {
            key: "username",
            valueIndex: 1,
          },
          {
            key: "firstName",
            valueIndex: 2,
          },
          {
            key: "lastName",
            valueIndex: 3,
          },
          {
            key: "dob",
            valueIndex: 4,
          },
          {
            key: "gender",
            valueIndex: 5,
          },
          {
            key: "email",
            valueIndex: 6,
          },
          {
            key: "email",
            valueIndex: 7,
          },
          {
            key: "address",
            valueIndex: 8,
          },
          {
            key: "roleName",
            valueIndex: 9,
          },
        ],
      });

      if (!data) return;
      const updateData = data.map((item) => ({
        ...item,
        dob: item?.dob
          ? dayjs(item?.dob).format(AppConstants.ISO_DATE_FORMAT)
          : null,
        sex: item?.gender === "Male" ? 2 : 1,
      }));
      const result = await handleImportUser(updateData);
      if (result) {
        setValidResArr(result);
      }
    }
  };

  const handleSubmitData = async () => {
    // const result = await insertMultiData(dataVerified);
    // if (result) {
    //   handleClose();
    // }
  };

  return (
    <Stack pt={0.5} spacing={1} px={3}>
      <Typography>
        Tải file mẫu nhập Bảng phân loại sách từ Excel tại
        <Typography
          sx={{ cursor: "pointer" }}
          ml={0.5}
          fontWeight={500}
          component="span"
          color="primary.main"
          onClick={downloadTemplateFile}
        >
          đây
        </Typography>
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          fontStyle: "italic",
          textDecoration: "underline",
        }}
      >
        Lưu ý:
      </Typography>
      <Typography component="li" ml={3}>
        1. Các cột tiêu đề mầu đỏ trong file mẫu là bắt buộc nhập
      </Typography>
      <Typography component="li" ml={3}>
        2. Không thay đổi, thêm, xóa các cột trong file mẫu
      </Typography>
      <ChoosesExcelFileButton
        file={excelFile}
        onChangeFile={handleChangeFile}
        onUploadFile={handleUploadFile}
      />
      <Content data={validResArr} />
      <AppConfirmModal
        modalTitleProps={{
          title: `Bạn xác nhận thêm ${dataVerified.length} phân loại sách thỏa mãn từ file excel?`,
        }}
        open={isOpenConfirm}
        onClose={() => {
          setIsOpenConfirm(false);
        }}
        onCancel={() => {
          setIsOpenConfirm(false);
        }}
        onConfirm={handleSubmitData}
      />
    </Stack>
  );
};

export default ImportExcelModal;

const META_ID = "Metadata";
const META_VALUE = "Metadata";

const customWorkSheet = (workSheet, workbook) => {
  const hiddenSheet = workbook.addWorksheet(META_ID);
  hiddenSheet.state = "hidden";
  hiddenSheet.getCell("A1").value = META_VALUE;
  workSheet.columns.forEach((item) => {
    item.alignment = {
      wrapText: true,
      vertical: "middle",
      horizontal: "left",
    };
    item.border = {
      top: {
        style: "thin",
      },
      left: {
        style: "thin",
      },
      right: {
        style: "thin",
      },
      bottom: {
        style: "thin",
      },
    };
  });

  workSheet.eachRow((item, index) => {
    if (index === 1) {
      item.height = 40;
      item.eachCell((cell, index) => {
        cell.font = {
          size: 16,
          bold: true,
          color: { argb: index === 3 ? "00000" : "fd0000" },
        };
      });
    }
  });
};

const HEADER_EXCEL = [
  {
    name: "Username",
    key: "username",
    width: 15,
  },
  {
    name: "First Name",
    key: "firstName",
    width: 20,
  },
  {
    name: "Last Name",
    key: "lastName",
    width: 20,
  },
  {
    name: "Dob",
    key: "dob",
    width: 20,
    style: { numFmt: "dd/mm/yyyy" },
  },
  {
    name: "Gender",
    key: "gender",
    width: 15,
  },
  {
    name: "Email",
    key: "email",
    width: 25,
  },
  {
    name: "Phone",
    key: "email",
    width: 20,
  },
  {
    name: "Address",
    key: "address",
    width: 30,
  },
  {
    name: "Role",
    key: "roleName",
    width: 15,
  },
];

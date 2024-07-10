import { instanceAPIMain } from "src/api";
import { ApiConstants } from "src/const";

export const getStudentListService = (params) =>
    instanceAPIMain.get(ApiConstants.GET_STUDENT_LIST, { params });

export const exportStudentService = (params) =>
    instanceAPIMain.get(ApiConstants.EXPORT_STUDENT, { params });
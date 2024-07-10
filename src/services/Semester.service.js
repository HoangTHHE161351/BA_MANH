import { instanceAPIMain } from "src/api";
import { ApiConstants } from "src/const";

export const getSemester = (params) =>
  instanceAPIMain.get(ApiConstants.GET_SEMESTER_LIST, { params });

export const createSemester = (data) =>
  instanceAPIMain.post(ApiConstants.CREATE_SEMESTER, data);

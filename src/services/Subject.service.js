import { instanceAPIMain } from "src/api";
import { ApiConstants } from "src/const";

export const getSubjectListService = (params) =>
  instanceAPIMain.get(ApiConstants.GET_SUBJECT_LIST, { params });

export const exportSubjectService = (params) =>
  instanceAPIMain.get(ApiConstants.EXPORT_SUBJECT, { params });

export const createSubjectService = (body) =>
  instanceAPIMain.post(ApiConstants.CREATE_USER, body);

export const editSubjectService = (body) =>
  instanceAPIMain.post(ApiConstants.EDIT_USER, body);

export const activeSubjectService = (body) =>
  instanceAPIMain.post(ApiConstants.ACTIVE_USER, body);

export const changeStatusSubjectService = (body) =>
  instanceAPIMain.post(ApiConstants.USER_MANAGER_CHANGE_STATUS, body);

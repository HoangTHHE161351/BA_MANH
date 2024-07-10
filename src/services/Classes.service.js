import { instanceAPIMain } from "src/api";
import { ApiConstants } from "src/const";

export const getClassesList = (params) =>
  instanceAPIMain.get(ApiConstants.CLASSES_LIST, { params });

export const createClass = (data) =>
  instanceAPIMain.post(ApiConstants.CREATE_CLASS, data);

export const editClass = (data) => {
  const { id, ...body } = data;
  return instanceAPIMain.post(`${ApiConstants.EDIT_CLASS}?id=${id}`, body);
}

export const deleteClass = (params) =>
  instanceAPIMain.post(`${ApiConstants.DELETE_CLASS}?id=${params}`);
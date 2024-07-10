import { instanceAPIMain } from "src/api";
import { ApiConstants } from "src/const";
import stringFormat from "string-format";

export const getCurriculumList = (params) =>
  instanceAPIMain.get(ApiConstants.GET_CURRICULUM_LIST, { params });

export const createCurriculum = (data) =>
  instanceAPIMain.post(ApiConstants.CREATE_CURRICULUM, data);

export const editCurriculum = (id, data) =>
  instanceAPIMain.put(stringFormat(ApiConstants.EDIT_CURRICULUM, { id }), data);

export const deleteCurriculum = (id) =>
  instanceAPIMain.delete(ApiConstants.DELETE_CURRICULUM, { params: { id } });

export const getCurriculumDetail = (id) =>
  instanceAPIMain.get(ApiConstants.CURRICULUM_DETAIL, { params: { id } });

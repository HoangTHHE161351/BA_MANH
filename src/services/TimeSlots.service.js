import { instanceAPIMain } from "src/api";
import { ApiConstants } from "src/const";
import stringFormat from "string-format";

export const getTimeSlotsList = (params) =>
  instanceAPIMain.get(ApiConstants.TIME_SLOTS, { params });

export const createTimeSlot = (data) =>
  instanceAPIMain.post(ApiConstants.CREATE_TIME_SLOT, data);

export const editTimeSlot = (id, data) =>
  instanceAPIMain.put(stringFormat(ApiConstants.EDIT_TIME_SLOT, { id }), data);

export const deleteTimeSlot = (id) =>
  instanceAPIMain.delete(stringFormat(ApiConstants.DELETE_TIME_SLOT, { id }));

export const getScheduleWeeks = (params) =>
  instanceAPIMain.get(ApiConstants.GET_WEEKS, { params });

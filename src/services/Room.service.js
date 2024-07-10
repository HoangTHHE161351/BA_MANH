import { instanceAPIMain } from "src/api";
import { ApiConstants } from "src/const";
import stringFormat from "string-format";

export const getRoomList = (params) =>
  instanceAPIMain.get(ApiConstants.ROOM_LIST, { params });

export const createRoom = (data) =>
  instanceAPIMain.post(ApiConstants.CREATE_ROOM, data);

export const editRoom = (id, data) =>
  instanceAPIMain.put(stringFormat(ApiConstants.EDIT_ROOM, { id }), data);

export const deleteRoom = (id) =>
  instanceAPIMain.delete(stringFormat(ApiConstants.DELETE_ROOM, { id }));
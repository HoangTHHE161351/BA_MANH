import { instanceAPIMain } from "src/api";
import { ApiConstants } from "src/const";

export const getDeviceListService = (params) =>
  instanceAPIMain.get(ApiConstants.GET_DEVICE_LIST, { params });

export const createDeviceService = (data) =>
  instanceAPIMain.post(ApiConstants.CREATE_CAMERA, data);

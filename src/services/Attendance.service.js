import apiRequest from "src/api/http";
import { ApiConstants } from "src/const";

export const getAttendClass = (params) =>
  apiRequest.get(ApiConstants.GET_ATTENDANCE_CLASS, { params });

export const getAttendReport = (params) =>
  apiRequest.get(ApiConstants.GET_ATTENDANCE_REPORT, { params });

export const checkAttendance = (params, body) =>
  apiRequest.put(ApiConstants.CHECK_ATTENDANCE, {
    params,
    body,
  });

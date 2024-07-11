import apiRequest from "src/api/http";
import { ApiConstants } from "src/const";

export const getAttendClass = ({ scheduleId }) =>
  apiRequest.get(ApiConstants.GET_ATTENDANCE_CLASS, { params: { scheduleId } });

export const getAttendReport = (params) =>
  apiRequest.get(ApiConstants.GET_ATTENDANCE_REPORT, { params });

export const checkAttendance = (scheduleId, body) =>
  apiRequest.put(ApiConstants.CHECK_ATTENDANCE, {
    params: { scheduleId },
    body,
  });

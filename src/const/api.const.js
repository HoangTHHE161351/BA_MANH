// Common
export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
//Định nghĩa đường dẫn API endpoint
export const HEADER_UPLOAD = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
};

export const TIMEOUT = 30000;

export const ACCESS_TOKEN = "access_token";
export const REFRESH_TOKEN = "refresh_token";
export const USER_INFO = "user_info";

export const STT_OK = 200;

export const LOGIN = "/api/v1/login";
export const REGISTER = "/api/v1/login/register";
export const PROFILE = "/api/v1/login/get-profile";

export const VERIFY_CODE = "/api/v1/user/send-otp-reset-password";
export const RESET_PASSWORD = "/api/v1/user/reset-password";

export const VERIFY_CODE_CHANGE_PASSWORD =
  "/api/v1/user/send-otp-change-password";
export const CHANGE_PASSWORD = "/api/v1/user/change-password";

export const CREATE_USER = "/api/v1/user/add-user";
export const GET_USER_BY_TOKEN = "/api/v1/user/get-user-by-token"; //get
export const ACTIVE_USER = "/api/v1/user/active-user"; // post

export const GET_USER_LIST = "/api/v1/user/all-users";
export const GET_BLACK_LIST = "/api/v1/user/user-blacklist";
export const EXPORT_USER_LIST = "/api/v1/user/export-user";
export const USER_MANAGER_CHANGE_STATUS = "/api/v1/user/change-status";
export const EDIT_USER = "/api/v1/user/edit-user";
export const IMPORT_USER = "/api/v1/user/import-user";
export const SET_NEW_PASSWORD = "/api/v1/user/set-newPass";

export const GET_STUDENT_LIST = "/api/v1/student/search-student";
export const EXPORT_STUDENT = "/api/v1/student/export-student";

export const GET_DEVICE_LIST = "/api/v1/camera/camera";
export const CREATE_CAMERA = "/api/v1/camera/add-camera";

export const GET_SUBJECT_LIST = "/api/v1/subject/subject";
export const CREATE_SUBJECT = "/api/v1/subject/add-subject";
export const EDIT_SUBJECT = "/api/v1/subject/{id}";
export const EXPORT_SUBJECT = "/api/v1/student/";

export const VIEW_SCHEDULE = "/api/v1/schedule/view-schedule";
export const VIEW_SCHEDULE_DETAIL = "/api/v1/schedule/schedule-details";
export const DELETE_SCHEDULE = "/api/v1/schedule/delete-schedule";
export const ADD_SCHEDULE = "/api/v1/schedule/add-schedule";
export const EDIT_SCHEDULE = "/api/v1/schedule/edit-schedule";
export const IMPORT_SCHEDULE = "/api/v1/schedule/import-schedule";
export const STUDENT_SCHEDULE = "/api/v1/schedule/student-schedule";

export const GET_SEMESTER_LIST = "/api/v1/semester/all-semester";
export const CREATE_SEMESTER = "/api/v1/semester/add-semester";

export const GET_CURRICULUM_LIST = "/api/v1/curriculum/all-curriculum";
export const CREATE_CURRICULUM = "/api/v1/curriculum/add-curriculum";
export const EDIT_CURRICULUM = "/api/v1/curriculum/edit-curriculum/{id}";
export const DELETE_CURRICULUM = "/api/v1/curriculum/delete-curriculum";
export const CURRICULUM_DETAIL = "/api/v1/curriculum/curriculum-details";

export const ROOM_LIST = "/api/v1/room/all-rooms";
export const CREATE_ROOM = "/api/v1/room/add-room";
export const EDIT_ROOM = "/api/v1/room/{id}";
export const DELETE_ROOM = "/api/v1/room/{id}";

export const TIME_SLOTS = "/api/v1/timeslots/all-timeslot";
export const CREATE_TIME_SLOT = "/api/v1/timeslots/add-timeslot";
export const EDIT_TIME_SLOT = "/api/v1/timeslots/edit-timeslot";
export const DELETE_TIME_SLOT = "/api/v1/timeslots/delete-timeslot";

export const CLASSES_LIST = "/api/v1/classroom/all-classroom";
export const CREATE_CLASS = "/api/v1/classroom/add-classroom";
export const EDIT_CLASS = "/api/v1/classroom/edit-classroom";
export const DELETE_CLASS = "/api/v1/classroom/delete-classroom";

//Teacher
export const GET_TEACHER_LIST = "/api/v1/teacher/users-teacher";
export const GET_TEACHER_SUBJECT_LIST = "/api/v1/teacher/teacher-subject";
export const GET_TEACHER_CLASSROOM_LIST = "/api/v1/teacher/teacher-classroom";

export const GET_ATTENDANCE_REPORT = "/api/v1/attendance/attendance-report";
export const GET_ATTENDANCE_CLASS = "/api/v1/attendance/attendance-class";
export const CHECK_ATTENDANCE = "/api/v1/attendance/check-attendance";
export const GET_WEEKS = "/api/v1/timeslots/weeks";

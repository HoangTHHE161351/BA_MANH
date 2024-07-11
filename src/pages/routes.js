import { Fragment, lazy } from "react";
import { PathConstants } from "../const";

const HomePage = lazy(() => import("./Home"));
const LoginPage = lazy(() => import("./Login"));
const RegisterPage = lazy(() => import("./Register"));
const UserManagerPage = lazy(() => import("./UserManager"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const ResetPassword = lazy(() => import("./ResetPassword"));
const StudentManager = lazy(() => import("./StudentManager"));
const Schedule = lazy(() => import("./Schedule"));
const DeviceManager = lazy(() => import("./DeviceManager"));
const ProfilePage = lazy(() => import("./Profile"));
const ActivePage = lazy(() => import("./ActiveUser"));
const BlackListPage = lazy(() => import("./UserManager/BlackListManager"));
const ImportUserPage = lazy(() => import("./UserManager/ImportUser"));
const SubjectManagerPage = lazy(() => import("./SubjectManager"));
const SemesterPage = lazy(() => import("./ConfigSystem/Semester"));
const CurriculumPage = lazy(() => import("./ConfigSystem/Curriculum"));
const ClassPage = lazy(() => import("./ConfigSystem/Classes"));
const RoomPage = lazy(() => import("./ConfigSystem/Room"));
const TimeSlotsPage = lazy(() => import("./ConfigSystem/TimeSlots"));
const TeacherPage = lazy(() => import("./TeacherManager"));
const TeacherProfile = lazy(() => import("./TeacherManager/Profile.jsx"));
const HistoryLog = lazy(() => import("./ConfigSystem/HistoryLog"));

const ScheduleStudent = lazy(() => import("./Schedule/ScheduleStudent"));

const publicRoutes = [
  {
    path: PathConstants.LOGIN,
    element: LoginPage,
  },
  {
    path: PathConstants.REGISTER,
    element: RegisterPage,
  },
  {
    path: PathConstants.FORGOT_PASSWORD,
    element: ForgotPassword,
  },
  {
    path: PathConstants.ACTIVE_USER,
    element: ActivePage,
  },
];

const popularRoutes = [
  {
    path: PathConstants.ROOT,
    element: HomePage,
  },
  {
    path: PathConstants.USER_MANAGER,
    element: UserManagerPage,
  },
  {
    path: PathConstants.PROFILE,
    element: ProfilePage,
  },
];

const userRoutes = [
  {
    path: PathConstants.SCHEDULE_STUDENT,
    element: ScheduleStudent,
  },
];

const adminRoutes = [
  {
    path: PathConstants.RESET_PASSWORD,
    element: ResetPassword,
    layout: Fragment,
  },
  {
    path: PathConstants.STUDENT_MANAGER,
    element: StudentManager,
  },
  { path: PathConstants.DEVICE_MANAGER, element: DeviceManager },
  { path: PathConstants.BLACK_LIST, element: BlackListPage },
  { path: PathConstants.IMPORT_USER, element: ImportUserPage },
  {
    path: PathConstants.SUBJECT_MANAGER,
    element: SubjectManagerPage,
  },
  {
    path: PathConstants.SEMESTER,
    element: SemesterPage,
  },
  {
    path: PathConstants.CURRICULUM,
    element: CurriculumPage,
  },
  {
    path: PathConstants.CLASSES,
    element: ClassPage,
  },
  {
    path: PathConstants.ROOMS,
    element: RoomPage,
  },
  {
    path: PathConstants.TIME_SLOTS,
    element: TimeSlotsPage,
  },
  {
    path: PathConstants.TEACHER_MANAGER,
    element: TeacherPage,
    //Nối đường dẫn đến trang tương ứng
  },
  {
    path: PathConstants.TEACHER_PROFILE,
    element: TeacherProfile,
    //Nối đường dẫn đến trang tương ứng
  },

  {
    path: PathConstants.HISTORY_LOG,
    element: HistoryLog,
    //Nối đường dẫn đến trang tương ứng
  },

  { path: PathConstants.SCHEDULE, element: Schedule },

];

export { publicRoutes, popularRoutes, adminRoutes, userRoutes };

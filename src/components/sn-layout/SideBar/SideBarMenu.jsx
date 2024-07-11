import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ArrowIcon,
  CameraIcon,
  HomeIcon,
  ScheduleIcon,
  UserManagerIcon,
} from "src/assets/icons";
import { DataConstants, PathConstants } from "src/const";

const SideBarMenu = ({ open }) => {
  const navigate = useNavigate();
  const [openDrop, setOpenDrop] = React.useState(null);

  const userInfo = useSelector((state) => state.authReducer.userInfo);

  const MenuList = useMemo(() => {
    if (userInfo.roleId === DataConstants.ROLE.STUDENT) {
      return LIST_MENU_STUDENT;
    } else {
      return LIST_MENU;
    }
  }, [userInfo]);

  return (
    <List>
      {MenuList.map((item) => (
        <ListItem disablePadding sx={{ display: "block" }} key={item.id}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => {
              if (item.children && open) {
                setOpenDrop((prev) => (prev === item.id ? null : item.id));
              } else {
                navigate(item.path);
              }
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <item.icon />
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ fontSize: "18px" }}
              sx={{ opacity: open ? 1 : 0 }}
            />
            {item.children &&
              open &&
              (openDrop === item.id ? (
                <ArrowIcon
                  sx={{
                    fontSize: "16px",
                    transform: "rotate(90deg)",
                  }}
                />
              ) : (
                <ArrowIcon
                  sx={{
                    transform: "rotate(-90deg)",
                    fontSize: "16px",
                  }}
                />
              ))}
          </ListItemButton>
          {item.children && (
            <Collapse
              in={openDrop === item.id && open}
              timeout="auto"
              unmountOnExit
            >
              {item.children.map((child) => (
                <List component="div" disablePadding key={child.path}>
                  <ListItemButton
                    sx={{
                      pl: open ? 4 : "20px",
                      transition: "ease-in-out 0.2s",
                    }}
                    onClick={() => navigate(child.path)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={child.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </List>
              ))}
            </Collapse>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default memo(SideBarMenu);

const LIST_MENU = [
  {
    id: "home",
    icon: HomeIcon,
    text: "Dashboard",
    path: PathConstants.ROOT,
  },
  {
    id: "user",
    icon: UserManagerIcon,
    text: "User Manager",
    path: PathConstants.USER_MANAGER,
    children: [
      {
        icon: UserManagerIcon,
        text: "User Manager List",
        path: PathConstants.USER_MANAGER,
      },
      {
        icon: UserManagerIcon,
        text: "Import User",
        path: PathConstants.IMPORT_USER,
      },
      {
        icon: UserManagerIcon,
        text: "User Black List",
        path: PathConstants.BLACK_LIST,
      },
    ],
  },
  {
    id: "teacher",
    icon: UserManagerIcon,
    text: "Teacher Manager",
    path: PathConstants.TEACHER_MANAGER,
    children: [
      {
        icon: UserManagerIcon,
        text: "Teacher List",
        path: PathConstants.TEACHER_MANAGER,
      },
      {
        icon: UserManagerIcon,
        text: "Import Teacher",
        path: PathConstants.IMPORT_TEACHER,
      },
    ],
  },
  {
    id: "student",
    icon: UserManagerIcon,
    text: "Student Manager",
    path: PathConstants.STUDENT_MANAGER,
  },
  {
    id: "schedule",
    icon: ScheduleIcon,
    text: "Schedule",
    path: PathConstants.SCHEDULE,
  },
  {
    id: "camera",
    icon: CameraIcon,
    text: "Device Manager",
    path: PathConstants.DEVICE_MANAGER,
  },
  {
    id: "subject",
    icon: UserManagerIcon,
    text: "Subject Manager",
    path: PathConstants.SUBJECT_MANAGER,
  },
  {
    id: "config",
    icon: UserManagerIcon,
    text: "Config System",
    children: [
      {
        icon: UserManagerIcon,
        text: "Semester",
        path: PathConstants.SEMESTER,
      },
      {
        icon: UserManagerIcon,
        text: "Curriculum",
        path: PathConstants.CURRICULUM,
      },
      {
        icon: UserManagerIcon,
        text: "Classes",
        path: PathConstants.CLASSES,
      },
      {
        icon: UserManagerIcon,
        text: "Rooms",
        path: PathConstants.ROOMS,
      },
      {
        icon: UserManagerIcon,
        text: "Time Slots",
        path: PathConstants.TIME_SLOTS,
      },
    ],
  },
  {
    id: "historyLog",
    icon: HomeIcon,
    text: "HistoryLog",
    path: PathConstants.HISTORY_LOG,
  },
];

const LIST_MENU_STUDENT = [
  {
    id: "home",
    icon: HomeIcon,
    text: "Dashboard",
    path: PathConstants.ROOT,
  },
  {
    id: "schedule",
    icon: ScheduleIcon,
    text: "Schedule",
    path: PathConstants.SCHEDULE_STUDENT,
  },
];

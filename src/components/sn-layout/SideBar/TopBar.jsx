import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import Cookies from "js-cookie";
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotifyIcon } from "src/assets/icons";
import MenuIcon from "src/assets/icons/MenuIcon";
import { ApiConstants, PathConstants } from "src/const";

const TopBar = ({ open, setOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNotify, setAnchorElNotify] = useState(null);
  const navigate = useNavigate();
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClickLogout = () => {
    Cookies.remove(ApiConstants.ACCESS_TOKEN);
    Cookies.remove(ApiConstants.REFRESH_TOKEN);
    Cookies.remove(ApiConstants.USER_INFO);
    navigate(PathConstants.LOGIN);
  };

  return (
    <Box sx={{ ...style.header, height: 60 }}>
      <Stack ml={3} direction="row" spacing={0.5}>
        <IconButton onClick={() => setOpen(!open)}>
          <MenuIcon />
        </IconButton>
      </Stack>
      <Typography fontSize={20} fontWeight={700}>
        Home Page
      </Typography>
      <Box sx={style.container}>
        <Badge color="warning" overlap="circular" variant="dot" sx={{ mr: 1 }}>
          <IconButton
            type="button"
            onClick={(e) => setAnchorElNotify(e.currentTarget)}
          >
            <NotifyIcon />
          </IconButton>
        </Badge>
        <Avatar
          aria-haspopup="true"
          sx={{
            marginRight: "24px",
            border: `1px solid `,
            borderColor: "grey.400",
            cursor: "pointer",
            width: 32,
            height: 32,
          }}
          src={""}
          onClick={handlePopoverOpen}
        />
        <Popover
          sx={{ zIndex: 1200 }}
          open={Boolean(anchorElNotify)}
          onClose={() => setAnchorElNotify(null)}
          anchorEl={anchorElNotify}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
        </Popover>
        <Popover
          id="mouse-over-popover"
          onClose={handlePopoverClose}
          disableRestoreFocus
          sx={{
            marginTop: "8px",
          }}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          slotProps={{
            paper: {
              sx: {
                boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.10)",
                borderRadius: "8px",
              },
            },
          }}
        >
          <Typography
            sx={{
              width: "186px",
              height: "40px",
              padding: "12px 0 12px 20px",
              cursor: "pointer",
              "&&:hover": {
                backgroundColor: "grey.100",
              },
            }}
            onClick={() => navigate(PathConstants.PROFILE)}
          >
            Tài khoản của tôi
          </Typography>
          <Typography
            onClick={handleClickLogout}
            sx={{
              cursor: "pointer",
              color: "red",
              width: "186px",
              height: "40px",
              padding: "12px 0 12px 20px",
              "&&:hover": {
                backgroundColor: "grey.100",
              },
            }}
          >
            Đăng xuất
          </Typography>
        </Popover>
      </Box>
    </Box>
  );
};

export default memo(TopBar);
const style = {
  header: {
    maxWidth: "100%",
    width: "100%",
    borderBottom: "1px solid #DBDBDB",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "common.white",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  h4: {
    color: "#243648",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
  },

  contactBox: {
    borderRadius: "100px",
    border: "1px solid #DBDBDB ",
    width: "120px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 8px",
  },
};

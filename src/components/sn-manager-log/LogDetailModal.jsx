import React from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const LogDetailModal = ({ open, onClose, user, data }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, marginRight: 2 }}>
          <img
            src={user?.avata}
            alt={user?.name}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <Typography variant="h6" align="center" sx={{ mt: 2 }}>
            {user?.name}
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: 2 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Room</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.room}</TableCell>
                    <TableCell>{row.time}</TableCell>
                    <TableCell>{row.type}</TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Modal>
  );
};

export default LogDetailModal;

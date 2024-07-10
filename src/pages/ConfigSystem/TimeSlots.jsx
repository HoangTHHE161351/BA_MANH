import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTablePageLayout } from "src/components/Common/TableCommon";
import HeaderPageTable from "src/components/sn-config-system/sn-time-slots/HeaderPageTable";
import TimeSlotsTable from "src/components/sn-config-system/sn-time-slots/TimeSlotsTable";
import { timeSlotActions } from "src/redux-store/store";

const TimeSlots = () => {
  const dispatch = useDispatch();

  const { pagination } = useSelector((state) => state.timeSlotsReducer);

  useEffect(() => {
    dispatch(timeSlotActions.getTimeSlotsList(pagination));
  }, [pagination, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(timeSlotActions.timeSlotReset());
    };
  }, [dispatch]);

  return (
    <AppTablePageLayout headerFilter={<HeaderPageTable />}>
      <TimeSlotsTable />
    </AppTablePageLayout>
  );
};

export default TimeSlots;

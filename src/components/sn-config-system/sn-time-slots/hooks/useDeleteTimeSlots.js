import { useDispatch } from 'react-redux';
import { AppToastNotify } from 'src/components/Common';
import { ApiConstants, AppConstants, DataConstants, EnvConstants } from 'src/const';
import { timeSlotActions } from 'src/redux-store/store';
import { TimeSlotService } from 'src/services';

const useDeleteTimeSlots = () => {
    const dispatch = useDispatch()
    const handleDeleteTimeSlots = async (id) => {
        try {
            const response = await TimeSlotService.deleteTimeSlot(id);
            if (response.status === ApiConstants.STT_OK) {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.SUCCESS, message: 'Delete time slots success!' });
                dispatch(timeSlotActions.getTimeSlotsList(DataConstants.PAGINATION_DEFAULT))
            } else {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: response?.message || 'Delete time slots failed!' })
            }
        } catch (error) {
            EnvConstants.IS_DEV && console.log(error);
            AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: error?.response?.data?.message || 'An error occurred!' })
        }
    }
    return handleDeleteTimeSlots;
}

export default useDeleteTimeSlots
import { useDispatch } from 'react-redux';
import { AppToastNotify } from 'src/components/Common';
import { ApiConstants, AppConstants, DataConstants, EnvConstants } from 'src/const';
import { timeSlotActions } from 'src/redux-store/store';
import { TimeSlotService } from 'src/services'

const useCreateTimeSlots = () => {
    const dispatch = useDispatch()
    const handleCreateTimeSlots = async (data) => {
        try {
            const response = await TimeSlotService.createTimeSlot(data);
            if (response.status === ApiConstants.STT_OK) {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.SUCCESS, message: 'Create time slots success!' })
                dispatch(timeSlotActions.getTimeSlotsList(DataConstants.PAGINATION_DEFAULT))
            } else {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: response?.message || 'Create time slots failed!' })
            }
        } catch (error) {
            EnvConstants.IS_DEV && console.log(error);
            AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: error?.response?.data?.message || 'An error occurred!' })
        }
    }
    return handleCreateTimeSlots;
}

export default useCreateTimeSlots
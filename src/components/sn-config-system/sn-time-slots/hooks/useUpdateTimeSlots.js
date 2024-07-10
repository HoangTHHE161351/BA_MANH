import { useDispatch } from 'react-redux';
import { AppToastNotify } from 'src/components/Common';
import { ApiConstants, AppConstants, DataConstants, EnvConstants } from 'src/const';
import { timeSlotActions } from 'src/redux-store/store';
import { TimeSlotService } from 'src/services';

const useUpdateTimeSlots = () => {
    const dispatch = useDispatch()
    const handleUpdateTimeSlots = async (data) => {
        try {
            const { id, ...body } = data
            if (!id) throw new Error('Update time slots failed!');
            const response = await TimeSlotService.editTimeSlot(id, body);
            if (response.status === ApiConstants.STT_OK) {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.SUCCESS, message: 'Update time slots success!' })
                dispatch(timeSlotActions.getTimeSlotsList(DataConstants.PAGINATION_DEFAULT))
            } else {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: response?.message || 'Update time slots failed!' })
            }
        } catch (error) {
            EnvConstants.IS_DEV && console.log(error);
            AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: error?.response?.data?.message || 'An error occurred!' })
        }
    }
    return handleUpdateTimeSlots;
}

export default useUpdateTimeSlots
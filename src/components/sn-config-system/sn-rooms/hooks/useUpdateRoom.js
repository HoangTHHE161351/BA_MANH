import { useDispatch } from 'react-redux';
import { AppToastNotify } from 'src/components/Common';
import { ApiConstants, AppConstants, DataConstants, EnvConstants } from 'src/const';
import { roomActions } from 'src/redux-store/store';
import { RoomService } from 'src/services';

const useUpdateRoom = () => {
    const dispatch = useDispatch()
    const handleUpdateRoom = async (data) => {
        try {
            const { id, ...body } = data
            if (!id) throw new Error('Update room failed!');
            const response = await RoomService.editRoom(id, body);
            if (response.status === ApiConstants.STT_OK) {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.SUCCESS, message: 'Update room success!' })
                dispatch(roomActions.getRoomList(DataConstants.PAGINATION_DEFAULT))
            } else {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: response?.message || 'Update room failed!' })
            }
        } catch (error) {
            EnvConstants.IS_DEV && console.log(error);
            AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: error?.response?.data?.message || 'An error occurred!' })
        }
    }
    return handleUpdateRoom;
}

export default useUpdateRoom
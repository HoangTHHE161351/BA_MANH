import { useDispatch } from 'react-redux';
import { AppToastNotify } from 'src/components/Common';
import { ApiConstants, AppConstants, DataConstants, EnvConstants } from 'src/const';
import { classesActions } from 'src/redux-store/store';
import { ClassService } from 'src/services';

const useUpdateClass = () => {
    const dispatch = useDispatch()
    const handleUpdateClass = async (data) => {
        try {
            if (!data.id) throw new Error('Update class failed!');
            const response = await ClassService.editClass(data);
            if (response.status === ApiConstants.STT_OK) {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.SUCCESS, message: 'Update class success!' })
                dispatch(classesActions.getClassesList(DataConstants.PAGINATION_DEFAULT))
            } else {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: response?.message || 'Update class failed!' })
            }
        } catch (error) {
            EnvConstants.IS_DEV && console.log(error);
            AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: error?.response?.data?.message || 'An error occurred!' })
        }
    }
    return handleUpdateClass;
}

export default useUpdateClass
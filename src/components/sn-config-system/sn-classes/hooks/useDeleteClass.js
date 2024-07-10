import { useDispatch } from 'react-redux';
import { AppToastNotify } from 'src/components/Common';
import { ApiConstants, AppConstants, DataConstants, EnvConstants } from 'src/const';
import { classesActions } from 'src/redux-store/store';
import { ClassService } from 'src/services';

const useDeleteClass = () => {
    const dispatch = useDispatch()
    const handleDeleteClass = async (id) => {
        try {
            const response = await ClassService.deleteClass(id);
            if (response.status === ApiConstants.STT_OK) {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.SUCCESS, message: 'Delete class success!' });
                dispatch(classesActions.getClassesList(DataConstants.PAGINATION_DEFAULT))
            } else {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: response?.message || 'Delete class failed!' })
            }
        } catch (error) {
            EnvConstants.IS_DEV && console.log(error);
            AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: error?.response?.data?.message || 'An error occurred!' })
        }
    }
    return handleDeleteClass;
}

export default useDeleteClass
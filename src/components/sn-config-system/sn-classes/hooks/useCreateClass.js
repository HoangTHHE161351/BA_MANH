import { useDispatch } from 'react-redux';
import { AppToastNotify } from 'src/components/Common';
import { ApiConstants, AppConstants, DataConstants, EnvConstants } from 'src/const';
import { classesActions } from 'src/redux-store/store';
import { ClassService } from 'src/services'

const useCreateClass = () => {
    const dispatch = useDispatch()
    const handleCreateClass = async (data) => {
        try {
            const response = await ClassService.createClass(data);
            if (response.status === ApiConstants.STT_OK) {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.SUCCESS, message: 'Create class success!' })
                dispatch(classesActions.getClassesList(DataConstants.PAGINATION_DEFAULT))
            } else {
                AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: response?.message || 'Create class failed!' })
            }
        } catch (error) {
            EnvConstants.IS_DEV && console.log(error);
            AppToastNotify({ type: AppConstants.NOTIFY_TYPE.ERROR, message: error?.response?.data?.message || 'An error occurred!' })
        }
    }
    return handleCreateClass;
}

export default useCreateClass
import { useDispatch } from 'react-redux';
import { AppToastNotify } from 'src/components/Common';
import { ApiConstants, AppConstants, EnvConstants } from 'src/const'
import { authActions } from 'src/redux-store/store';
import { AuthService } from 'src/services';

const useAuth = () => {
    const dispatch = useDispatch()
    const handleLoginRequest = async (data, onSuccess) => {
        try {
            const response = await AuthService.requestLoginService(data);
            if (response.status === ApiConstants.STT_OK) {
                AppToastNotify({
                    type: AppConstants.NOTIFY_TYPE.SUCCESS,
                    message: "Login Success!",
                });
                onSuccess();
                dispatch(authActions.requestLoginSuccess(response.data.data.data))
                return response.data;
            } else {
                AppToastNotify({
                    type: AppConstants.NOTIFY_TYPE.ERROR,
                    message: response?.message || "An error occurred!",
                });
                return;
            }
        } catch (error) {
            EnvConstants.IS_DEV && console.log(error);
            EnvConstants.IS_DEV && console.log(error);
            AppToastNotify({
                type: AppConstants.NOTIFY_TYPE.ERROR,
                message: error?.response?.data?.message || "An error occurred!",
            });
            return;
        }
    }

    return { handleLoginRequest }
}

export default useAuth
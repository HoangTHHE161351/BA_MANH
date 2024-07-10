import { useDispatch } from "react-redux";
import { AppToastNotify } from "src/components/Common";
import {
  ApiConstants,
  AppConstants,
  DataConstants,
  EnvConstants,
} from "src/const";
import { deviceActions } from "src/redux-store/store";
import { DeviceService } from "src/services";

const useDeviceAction = () => {
  const dispatch = useDispatch();
  const handleCreateDevice = async (data) => {
    try {
      const response = await DeviceService.createDeviceService(data);
      if (response.status === ApiConstants.STT_OK) {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.SUCCESS,
          message: "Create device successfully",
        });
        dispatch(deviceActions.getDeviceList(DataConstants.PAGINATION_DEFAULT));
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
      AppToastNotify({
        type: AppConstants.NOTIFY_TYPE.ERROR,
        message: error?.response?.data?.message || "An error occurred!",
      });
      return;
    }
  };

  return { handleCreateDevice };
};

export default useDeviceAction;

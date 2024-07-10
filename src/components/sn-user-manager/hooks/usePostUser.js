import { useDispatch } from "react-redux";
import { AppToastNotify } from "src/components/Common";
import {
  ApiConstants,
  AppConstants,
  DataConstants,
  EnvConstants,
} from "src/const";
import { userActions } from "src/redux-store/store";
import { UserService } from "src/services";

const usePostUser = () => {
  const dispatch = useDispatch();

  const handleCreateUser = async (data) => {
    try {
      const response = await UserService.createUserService(data);
      if (response.status === ApiConstants.STT_OK) {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.SUCCESS,
          message: "Create User Success!",
        });
        dispatch({ type: userActions.getUserList.type });
        return response.data;
      } else {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.ERROR,
          message: response?.message || "An error occurred!",
        });
        dispatch(userActions.stopLoading());
        return;
      }
    } catch (error) {
      EnvConstants.IS_DEV && console.log(error);
      AppToastNotify({
        type: AppConstants.NOTIFY_TYPE.ERROR,
        message: error?.response?.data?.message || "An error occurred!",
      });
      dispatch(userActions.stopLoading());
      return;
    }
  };

  const handleActiveUser = async (data, onSuccess) => {
    try {
      const response = await UserService.activeUserService(data);
      if (response.status === ApiConstants.STT_OK) {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.SUCCESS,
          message: "Active User Success!",
        });
        onSuccess();
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

  const handleChangeStatus = async (data) => {
    try {
      const { id, status, onSuccess } = data;
      const response = await UserService.changeStatusUserService({
        id,
        status,
      });
      if (response.status === ApiConstants.STT_OK) {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.SUCCESS,
          message: "Change Status User Success!",
        });
        onSuccess();
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

  const handleEditUser = async (data) => {
    try {
      const response = await UserService.editUserService(data);
      if (response.status === ApiConstants.STT_OK) {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.SUCCESS,
          message: "Edit User Success!",
        });
        dispatch(userActions.getUserList(DataConstants.PAGINATION_DEFAULT));
        return response.data;
      } else {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.ERROR,
          message: response?.message || "An error occurred!",
        });
        dispatch(userActions.stopLoading());
        return;
      }
    } catch (error) {
      EnvConstants.IS_DEV && console.log(error);
      AppToastNotify({
        type: AppConstants.NOTIFY_TYPE.ERROR,
        message: error?.response?.data?.message || "An error occurred!",
      });
      dispatch(userActions.stopLoading());
      return;
    }
  };

  const handleImportUser = async (data) => {
    try {
      const response = await UserService.importUserService(data);
      if (response.status === ApiConstants.STT_OK) {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.SUCCESS,
          message: "Import User Success!",
        });
        dispatch(userActions.getUserList(DataConstants.PAGINATION_DEFAULT));
        return response.data.data;
      } else {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.ERROR,
          message: response?.message || "An error occurred!",
        });
        dispatch(userActions.stopLoading());
        return;
      }
    } catch (error) {
      EnvConstants.IS_DEV && console.log(error);
      AppToastNotify({
        type: AppConstants.NOTIFY_TYPE.ERROR,
        message: error?.response?.data?.message || "An error occurred!",
      });
      dispatch(userActions.stopLoading());
      return;
    }
  };

  const handleSetNewPassword = async (data) => {
    try {
      const queryParams = new URLSearchParams({ userName: data.userName, newPass: data.newPass }).toString();
      const response = await UserService.setNewPasswordService(queryParams);

      if (response.status === ApiConstants.STT_OK) {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.SUCCESS,
          message: "Set New Password Success!",
        });
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

  return {
    handleCreateUser,
    handleActiveUser,
    handleChangeStatus,
    handleEditUser,
    handleImportUser,
    handleSetNewPassword
  };
};

export default usePostUser;

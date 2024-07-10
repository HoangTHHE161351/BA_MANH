import { useDispatch } from "react-redux";
import { AppToastNotify } from "src/components/Common";
import {
  ApiConstants,
  AppConstants,
  DataConstants,
  EnvConstants,
} from "src/const";
import { curriculumActions } from "src/redux-store/store";
import { CurriculumService } from "src/services";

const useCreateCurriculum = () => {
  const dispatch = useDispatch();
  const handleCreateCurriculum = async (data) => {
    try {
      const response = await CurriculumService.createCurriculum(data);
      if (response.status === ApiConstants.STT_OK) {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.SUCCESS,
          message: "Create curriculum success!",
        });
        dispatch(
          curriculumActions.getCurriculumList(DataConstants.PAGINATION_DEFAULT)
        );
      } else {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.ERROR,
          message: response?.message || "Create curriculum failure!",
        });
      }
    } catch (error) {
      EnvConstants.IS_DEV && console.log(error);
      AppToastNotify({
        type: AppConstants.NOTIFY_TYPE.ERROR,
        message: error?.response?.data?.message || "An error occurred!",
      });
    }
  };

  return handleCreateCurriculum;
};

export default useCreateCurriculum;

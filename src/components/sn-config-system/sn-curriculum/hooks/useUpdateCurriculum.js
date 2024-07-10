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

const useUpdateCurriculum = () => {
  const dispatch = useDispatch();
  const handleUpdateCurriculum = async (data) => {
    try {
      const { id, ...body } = data;
      if (!id) throw new Error("Update curriculum failure!");
      const response = await CurriculumService.editCurriculum(id, body);
      if (response.status === ApiConstants.STT_OK) {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.SUCCESS,
          message: "Update curriculum success!",
        });
        dispatch(
          curriculumActions.getCurriculumList(DataConstants.PAGINATION_DEFAULT)
        );
      } else {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.ERROR,
          message: response?.message || "Update curriculum failure!",
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

  return handleUpdateCurriculum;
};

export default useUpdateCurriculum;

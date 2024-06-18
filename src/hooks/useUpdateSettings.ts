import { ElNotification } from "element-plus";
import { updateSettingApi as updateAdminSettingApi } from "@/services/apis/admin";
import { updateSettingApi as updateRoomSettingApi } from "@/services/apis/room";

const UpdateType = {
  admin: updateAdminSettingApi,
  room: updateRoomSettingApi
};

export const useUpdateSettings = (type: keyof typeof UpdateType, token: string) => {
  const { state, isLoading, execute } = UpdateType[type]();

  const updateSet = async (key: string, value: any) => {
    const data: Record<string, any> = {};
    data[key] = value;
    try {
      await execute({
        headers: {
          Authorization: token
        },
        data: data
      });
    } catch (err: any) {
      console.error(err.message);
      ElNotification({
        title: `${key} 设置失败`,
        message: err.response?.data.error || err.message,
        type: "error"
      });
    }
  };

  return {
    state,
    isLoading,
    updateSet
  };
};

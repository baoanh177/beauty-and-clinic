import { EFetchStatus } from "@/shared/enum";

export const commonStaticReducers = () => {
  return {
    resetStatus(state: any) {
      state.status = EFetchStatus.IDLE;
      state.message = "";
    },
    setFilter: (state: any, { payload }: any) => {
      state.filter = payload;
    },
  };
};
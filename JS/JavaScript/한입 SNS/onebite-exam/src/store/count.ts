import { Store } from "lucide-react";
import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set, get) => ({
            actions: {
              increase: () => {
                set((state) => {
                  state.count += 1;
                });
                //immer 사용으로 아래 주석처리
                // set((store) => ({
                //   count: store.count + 1,
                // }));
              },
              decrease: () => {
                set((state) => {
                  state.count -= 1;
                });
                // set((store) => ({
                //   count: store.count - 1,
                // }));
              },
            },
          })),
        ),
      ),
      {
        name: "countStore",
        partialize: (store) => ({
          count: store.count,
        }),
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    { name: "countStore" },
  ),
);

useCountStore.subscribe(
  (store) => store.count, //count 값이 변경될 때마다
  (count, prevCount) => {
    console.log(count, prevCount);

    const store = useCountStore.getState();
    console.log(store);
  },
);

// export const useCountStore = create<Store>((set, get) => ({
//   count: 0,
//   increase: () => {
//     set((store) => ({
//       count: store.count + 1,
//     }));
//   },
//   decrease: () => {
//     set((store) => ({
//       count: store.count - 1,
//     }));
//   },
// }));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};
export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};

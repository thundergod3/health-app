import * as routes from "constants/routes";

export const navLinkList = [
  {
    path: routes.RECORD_PAGE,
    label: "自分の記録",
  },
  {
    path: routes.RECORD_PAGE,
    label: "体重グラフ",
    scrollTo: "graphRecord",
  },
  {
    path: routes.TOP_PAGE,
    label: "目標",
  },
  {
    path: "",
    label: "選択中のコース",
  },
  {
    path: routes.COLUMN_PAGE,
    label: "コラム一覧",
  },
  {
    path: "",
    label: "設定",
  },
];

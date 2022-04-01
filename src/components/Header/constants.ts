// import * as routes from "constants/routes";

import noteIcon from "assets/icons/note.svg";
import medalIcon from "assets/icons/medal.svg";
import messageIcon from "assets/icons/message.svg";

export const navLinkList = [
  {
    path: "",
    label: "自分の記録",
    icon: noteIcon,
  },
  {
    path: "",
    label: "チャレンジ",
    icon: medalIcon,
  },
  {
    path: "",
    label: "お知らせ",
    icon: messageIcon,
    showNotification: true,
  },
];

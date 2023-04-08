import dash_1 from "../public/bg_large/dash_1.jpg";
import dash_2 from "../public/bg_large/dash_2.jpg";
import dash_3 from "../public/bg_large/dash_3.jpg";
import dash_4 from "../public/bg_large/dash_4.jpg";
import dash_5 from "../public/bg_large/dash_5.jpg";
import dash_6 from "../public/bg_large/dash_6.jpg";
import dash_7 from "../public/bg_large/dash_7.jpg";
import bg_profile from "../public/bg_large/curved8.jpg";

export default function optimizeBg(bgString: string | undefined) {
  switch (bgString) {
    case "dash_1":
      return dash_1.src;
    case "dash_2":
      return dash_2.src;
    case "dash_3":
      return dash_3.src;
    case "dash_4":
      return dash_4.src;
    case "dash_5":
      return dash_5.src;
    case "dash_6":
      return dash_6.src;
    case "dash_7":
      return dash_7.src;
    case "bg_profile":
      return bg_profile.src;
    default:
      return "";
  }
}

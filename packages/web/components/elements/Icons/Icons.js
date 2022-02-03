import PropTypes from "prop-types";

import { Alert } from "./assets/Alert";
import { Chat } from "./assets/Chat";
import { Data } from "./assets/Data";
import { Desktop } from "./assets/Desktop";
import { Food } from "./assets/Food";
import { Football } from "./assets/Football";
import { Globe } from "./assets/Globe";
import { Heart } from "./assets/Heart";
import { Like } from "./assets/Like";
import { Linesman } from "./assets/Linesman";
import { Location } from "./assets/Location";
import { Node } from "./assets/Node";
import { Pitch } from "./assets/Pitch";
import { Recycle } from "./assets/Recycle";
import { Shopping } from "./assets/Shopping";
import { Signpost } from "./assets/Signpost";
import { Stadium } from "./assets/Stadium";
import { Tickets } from "./assets/Tickets";

export function Icons({ icon }) {
  const icons = {
    alert: <Alert />,
    chat: <Chat />,
    data: <Data />,
    desktop: <Desktop />,
    food: <Food />,
    football: <Football />,
    globe: <Globe />,
    heart: <Heart />,
    like: <Like />,
    linesman: <Linesman />,
    location: <Location />,
    node: <Node />,
    pitch: <Pitch />,
    recycle: <Recycle />,
    shopping: <Shopping />,
    signpost: <Signpost />,
    stadium: <Stadium />,
    tickets: <Tickets />,
  };
  return icons[icon] || null;
}

Icons.propTypes = {
  icon: PropTypes.string.isRequired,
};

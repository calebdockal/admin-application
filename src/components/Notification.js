import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    <div>
      <div>
        <div>
          <p>Notifications</p>
          <button> 5 new</button>
        </div>
        <Button icon={<MdOutlineCancel />} size="2xl" />
      </div>
      <div></div>
      <div>
        <Button color="white" text="see all notifications" width="full" />
      </div>
    </div>
  );
};
export default Notification;

import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { themeColors } from "../data/testData";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <div>
      <div>
        <div>
          <p>Settings</p>
          <button>
            <MdOutlineCancel />
          </button>
        </div>
        <div>
          <p>Theme Option</p>
          <div>
            <input type="radio" />
            <label>Light</label>
          </div>
          <div>
            <input type="radio" />
            <label>Dark</label>
          </div>
        </div>
        <div>
          <p>Theme Colors</p>
          <div>
            {themeColors.map((item, index) => (
              <TooltipComponent>
                <div>
                  <button>
                    <BsCheck />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThemeSettings;

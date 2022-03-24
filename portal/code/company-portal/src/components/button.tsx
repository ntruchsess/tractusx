// Copyright (c) 2021 Microsoft
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { AiOutlineUserAdd } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

const Button = ({ label, styleClass, handleClick, icon = false, showTooltip = false, tooltipText = '' }) => {

  return (showTooltip) ? (<><ReactTooltip id="tooltipBtn" place="top" effect="solid">
    {tooltipText}
  </ReactTooltip><div data-tip data-for="tooltipBtn"><button className={styleClass} onClick={handleClick} color='#939393'  disabled>
      {(!icon) ? label : <><AiOutlineUserAdd className="button-icon" /> <span>{label}</span></>}
    </button></div></>) : (<button className={styleClass} onClick={handleClick}>
      {(!icon) ? label : <><AiOutlineUserAdd className="button-icon" /> <span>{label}</span></>}
    </button>);

};

export default Button;

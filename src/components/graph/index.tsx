import React from "react";
import { style } from "./style"
export type Props = {

}
const Component: React.FC<Props> = (props) => {
    return <div {...props} >graph</div>
}

export default style(Component)
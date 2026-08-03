// i miss gtk...
import "./style.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    middleIsMaster?: boolean;
}

/** only supports 3 children, might have undefined behavior if
  * more are added to it.
  *
  * you can use props to make the middle child be a priority */
export default function CenterBox({middleIsMaster, ...props}: Props): React.ReactNode {
    return <div {...props} className={
        `${props.className ?? ""} centerboxcomponent ${middleIsMaster ? "middle-rules" : ""}`
    }>
        {props.children}
    </div>
}

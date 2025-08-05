import type { CSSProperties } from "react";

interface ActionGroupProps {
    children: React.ReactNode
    position?: CSSProperties["justifyContent"]
}

export default function ActionGroup({ children, position }: ActionGroupProps)
{
    const actionGroupStyle: CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "45px",
        justifyContent: position
    }

    return (
        <div className="action-group" style={actionGroupStyle}>
            {children}
        </div>
    );
}
import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";
import { useStore } from "zustand";
import { useGlobalStore } from "../hooks/useGlobalStore";

const handleStyle = { left: 10 };

export default function ExitStep({ data }) {
  const trigger = useGlobalStore((state) => state.trigger);

  return (
    <div className="step-wrapper">
      <div>Exit Step</div>
      <div>{trigger}</div>
      <Handle type="target" position={Position.Top} />
    </div>
  );
}

import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";
import { useStore } from "zustand";
import { useGlobalStore } from "../hooks/useGlobalStore";

const handleStyle = { left: 10 };

export default function TriggerStep({ data }) {
  const trigger = useGlobalStore((state) => state.trigger);

  return (
    <div className="step-wrapper">
      <div>Trigger Step</div>
      <input
        type="text"
        onChange={(event) => {
          useGlobalStore.setState({ trigger: event.target.value });
        }}
      />
      <div>{trigger}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

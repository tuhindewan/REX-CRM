import React from "react";

export default function CircularProgressbar({strokeWidth, sqSize, percentage }) {
   
    const radius = (sqSize - strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * percentage / 100;

    return (
        <>
            <svg
                width={sqSize}
                height={sqSize}
                viewBox={viewBox}>
                <circle
                className="circle-background"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`} />

                <circle
                className="circle-progress"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                // Start progress marker at 12 O'Clock
                transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                }} />
                
                <text
                className="circle-text"
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle">
                {`${percentage}%`}
                </text>
            </svg>
        </>
    );
}


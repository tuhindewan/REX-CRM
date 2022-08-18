import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({ data, isConnectable }) => {
    return (
      <>
        <Handle
          type="target"
          position="top"
          style={{ background: '#555' }}
          onConnect={(params) => console.log('handle onConnect', params)}
          isConnectable={isConnectable}
        />
        <div>
          if/else
        </div>
        <Handle
          type="source"
          position="bottom"
          id="if"
          style={{ left: 10, background: '#555' }}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position="bottom"
          id="else"
          style={{ right: 10, left: 'auto', background: '#555' }}
          isConnectable={isConnectable}
        />
      </>
    );
  });
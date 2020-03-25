import React, { useEffect, useState } from 'react';
import { Button } from './styles/styles.js';

const App = () => {
  const [isRecording, setRecording] = useState(false)

  const onMove = e => {
    const x = e.clientX;
    const y = e.clientY;

    console.log(`Move: x: ${x}, y: ${y}`)
  }

  const onClick = e => {
    const x = e.clientX;
    const y = e.clientY;

    console.log(`Click: x: ${x}, y: ${y}`)
  }

  useEffect(() => {
    if (isRecording) {
      document.body.addEventListener('mousemove', onMove);
    }

    return () => document.body.removeEventListener('mousemove', onMove);
  }, [isRecording]);


  useEffect(() => {
    if (isRecording) {
      document.body.addEventListener('click', onClick);
    }

    return () => document.body.removeEventListener('click', onClick);
  }, [isRecording]);

  return (
    <div>
      {isRecording ?
        <Button onClick={() => setRecording(false)}>
          Stop
        </Button>
      :
        <Button onClick={() => setRecording(true)}>
          Record
        </Button>
      }
    </div>
  );
}

export default App;

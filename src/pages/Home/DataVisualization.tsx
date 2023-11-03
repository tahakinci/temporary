import { forwardRef, useRef } from 'react';
import { Part } from '../../types/ApiResponseType';
import { useDraw } from '../../hooks/useDraw';

export const DataVisualization = ({ parts }: { parts: Part[] }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const PureCanvas = forwardRef<HTMLCanvasElement>((_, ref) => <canvas ref={ref} />);

  useDraw(canvasRef, parts);

  return <PureCanvas ref={canvasRef} />;
};

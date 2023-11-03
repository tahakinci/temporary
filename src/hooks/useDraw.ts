import { RefObject, useEffect } from 'react';
import { Holes } from '../types/ApiResponseType';

export const useDraw = (canvasRef: RefObject<HTMLCanvasElement>, parts: Part[]) => {
  useEffect(() => {
    if (!parts?.length || !canvasRef.current) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');

    const handleResize = () => {
      if (!ctx) return;
      const parentElement: HTMLElement = ctx.canvas.parentElement!;
      // Padding of parent element
      const padding = 40;
      ctx.canvas.height = parentElement.offsetHeight - padding;
      ctx.canvas.width = parentElement.offsetWidth - padding;

      // Call the draw function after resizing
      draw(ctx);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [parts]);

  // Getting maximum x and y coordinates for sizing the drawwing
  const maxCoords = parts.reduce(
    (acc, part: Part) => {
      part.coords.forEach((coord) => {
        acc.x = Math.max(acc.x, coord.x);
        acc.y = Math.max(acc.y, coord.y);
      });
      return acc;
    },
    { x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY }
  );

  const drawingSize = maxCoords;

  const draw = (ctx: CanvasRenderingContext2D) => {
    if (canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    if (!parts?.length) {
      return;
    }

    // Calculate the scale factor based on canvas size
    // NOTE: parent divde padding olduğu için biraz küçültmek gerekiyor 0.9 ile o yüzden çarpıyoruz
    const scaleX = (ctx.canvas.width / drawingSize.x) * 0.93; // Use your initial canvas width
    const scaleY = (ctx.canvas.height / drawingSize.y) * 0.93; // Use your initial canvas height
    const scaleFactor = Math.min(scaleX, scaleY);

    // Apply the scale factor
    ctx.scale(scaleFactor, scaleFactor);

    // Draw your content using the scaled coordinates

    parts.forEach((part: Part) => {
      // Draw the main shape using scaled coordinates
      ctx.beginPath();
      ctx.moveTo(part.coords[0].x, part.coords[0].y);
      ctx.lineTo(part.coords[1].x, part.coords[1].y);
      ctx.strokeStyle = part.selected ? 'blue' : 'black';
      ctx.stroke();

      // For each hole within the shape
      part.holes.forEach((hole: Holes) => {
        // Draw the hole as a filled circle using scaled coordinates
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(hole.position.x, hole.position.y, hole.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw the shape inside the hole using scaled coordinates
        ctx.beginPath();
        ctx.arc(hole.position.x, hole.position.y, hole.radius - 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw the rectangle and text using scaled coordinates
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.rect((part.coords[0].x + part.coords[1].x) / 2 - 10, (part.coords[0].y + part.coords[1].y + 10) / 2, 20, 10);
      ctx.fill();
      ctx.restore();
      ctx.beginPath();
      ctx.textAlign = 'center';
      ctx.fillText(
        part.name,
        (part.coords[0].x + part.coords[1].x) / 2,
        (part.coords[0].y + part.coords[1].y + 30) / 2
      );
    });
  };
};

// Scrollable Canvas:

// import { RefObject, useEffect } from 'react';
// import { Holes, Part } from '../../types/ApiResponseType';

// export const useDraw = (canvasRef: RefObject<HTMLCanvasElement>, parts?: Part[]) => {
//   useEffect(() => {
//     if (!parts?.length || !canvasRef.current) {
//       return;
//     }

//     // Getting maximum x and y coordinates for sizing the drawwing
//     const maxCoords = parts.reduce(
//       (acc, part: Part) => {
//         part.coords.forEach((coord) => {
//           acc.x = Math.max(acc.x, coord.x);
//           acc.y = Math.max(acc.y, coord.y);
//         });
//         return acc;
//       },
//       { x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY }
//     );

//     const drawingSize = maxCoords;

//     const ctx = canvasRef.current.getContext('2d');

//     const handleResize = () => {
//       if (!ctx) return;

//       ctx.canvas.height = drawingSize.y;
//       ctx.canvas.width = drawingSize.x;

//       // Call the draw function after resizing
//       draw(ctx);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, [parts]);

//   const draw = (ctx: CanvasRenderingContext2D) => {
//     if (canvasRef.current) {
//       ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//     }

//     if (!parts?.length) {
//       return;
//     }

//     parts.forEach((part: Part) => {
//       ctx.beginPath();
//       ctx.moveTo(part.coords[0].x, part.coords[0].y);
//       ctx.lineTo(part.coords[1].x, part.coords[1].y);
//       ctx.strokeStyle = part.selected ? 'blue' : 'black';
//       ctx.stroke();

//       // For each hole within the shape
//       part.holes.forEach((hole: Holes) => {
//         ctx.save();
//         ctx.globalCompositeOperation = 'destination-out';
//         ctx.beginPath();
//         ctx.arc(hole.position.x, hole.position.y, hole.radius, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.restore();

//         ctx.beginPath();
//         ctx.arc(hole.position.x, hole.position.y, hole.radius - 2, 0, Math.PI * 2);
//         ctx.fill();
//       });

//       ctx.save();
//       ctx.globalCompositeOperation = 'destination-out';
//       ctx.beginPath();
//       ctx.rect((part.coords[0].x + part.coords[1].x) / 2 - 10, (part.coords[0].y + part.coords[1].y + 10) / 2, 20, 10);
//       ctx.fill();
//       ctx.restore();
//       ctx.beginPath();
//       ctx.textAlign = 'center';
//       ctx.fillText(
//         part.name,
//         (part.coords[0].x + part.coords[1].x) / 2,
//         (part.coords[0].y + part.coords[1].y + 30) / 2
//       );
//     });

//     // requestAnimationFrame(() => draw(ctx));
//   };
// };

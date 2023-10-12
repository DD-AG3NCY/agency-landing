// import { motion } from 'framer-motion';
// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from 'react';

// interface LineProps {
//   lineWidth: string;
//   lineSeparation: string;
//   lineColor: string;
//   gradientStartColor?: string;
//   gradientEndColor?: string;
//   children?: any;
// }

// const LinesBackground: React.FC<
//   LineProps
// > = ({
//   lineWidth,
//   lineSeparation,
//   lineColor,
//   gradientStartColor = 'transparent', // Added default values to prevent
//   gradientEndColor = 'transparent', // undefined in the gradient.
// }) => {
//   const containerRef =
//     useRef<HTMLDivElement>(null);
//   const [
//     numberOfLines,
//     setNumberOfLines,
//   ] = useState<number>(0);

//   useEffect(() => {
//     const updateNumberOfLines = () => {
//       if (containerRef.current) {
//         const parentWidth =
//           containerRef.current
//             .offsetWidth;
//         const lineWidthValue =
//           parseFloat(lineWidth);
//         const lineSeparationValue =
//           parseFloat(lineSeparation);
//         const calculatedNumberOfLines =
//           Math.floor(
//             parentWidth /
//               (lineWidthValue +
//                 lineSeparationValue)
//           );
//         setNumberOfLines(
//           calculatedNumberOfLines
//         );
//       }
//     };

//     updateNumberOfLines();

//     window.addEventListener(
//       'resize',
//       updateNumberOfLines
//     );
//     return () =>
//       window.removeEventListener(
//         'resize',
//         updateNumberOfLines
//       );
//   }, [lineWidth, lineSeparation]);

//   const lineStyle: React.CSSProperties =
//     {
//       width: lineWidth,
//       backgroundColor: lineColor,
//       marginRight: lineSeparation,
//       height: '100%',
//       position: 'relative',
//       transform: 'translateZ(0)',
//     };

//   const gradientOverlayStyle: React.CSSProperties =
//     {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: `linear-gradient(${gradientStartColor}, ${gradientEndColor})`,
//       mixBlendMode: 'overlay',
//     };

//   return (
//     <div className="absolute z-10 h-screen w-screen opacity-0">
//       <motion.div
//         className="absolute left-0 top-0 z-10 h-full w-full"
//         ref={containerRef}
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           height: '100%',
//         }}>
//         {Array.from({
//           length: numberOfLines,
//         }).map((_, index) => (
//           <motion.div
//             key={index}
//             style={lineStyle}>
//             <div
//               style={
//                 gradientOverlayStyle
//               }
//             />{' '}
//             {/* Gradient moved inside line divs */}
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default LinesBackground

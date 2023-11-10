// import React from 'react';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import FastForwardIcon from '@mui/icons-material/FastForward';
// import FastRewindIcon from '@mui/icons-material/FastRewind';
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

// function Pagination({ handlePage, activePage = 0, totalPages = 0 }) {
//   const start = Math.max(activePage - 1, 1);
//   const end = Math.min(start + 2, totalPages);
//   const pageNumbers = [...Array(end - start + 1)].map((_, i) => start + i);

//   return (
//     <div style={{ display: "flex", justifyContent: "center", gap: "5px", marginTop: "20px" }}>
//       <button
//         style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "lightblue" }}
//         disabled={activePage === 1}
//         onClick={() => handlePage(1)}
//       >
//         <FastRewindIcon />
//       </button>
//       <button
//         style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "lightblue" }}
//         onClick={() => handlePage(activePage - 1)}
//         disabled={activePage === 1}
//       >
//         <ArrowLeftIcon />
//       </button>
//       {pageNumbers.map((item, i) => (
//         <button
//           key={i}
//           style={{
//             width: "30px",
//             height: "30px",
//             borderRadius: "50%",
//             backgroundColor: activePage === item ? "skyblue" : "lightblue",
//           }}
//           disabled={activePage === item}
//           onClick={() => handlePage(item)}
//         >
//           {item}
//         </button>
//       ))}
//       <button
//         style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "lightblue" }}
//         onClick={() => handlePage(activePage + 1)}
//         disabled={activePage === totalPages}
//       >
//         <ArrowRightIcon />
//       </button>
//       <button
//         style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "lightblue" }}
//         disabled={activePage === totalPages}
//         onClick={() => handlePage(totalPages)}
//       >
//         <FastForwardIcon />
//       </button>
//     </div>
//   );
// }

// export default Pagination;


import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

function Pagination({ handlePage, activePage = 0, totalPages = 0 }) {
  const start = Math.max(activePage - 1, 1);
  const end = Math.min(start + 2, totalPages);
  const pageNumbers = [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px", alignItems:"center", marginTop: "20px", position: "fixed", bottom: "-10px", left: "50%", transform: "translateX(-50%)", backgroundColor:"black", width:"100%", padding:"10px" }}>
      <button
        style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "lightblue" }}
        disabled={activePage === 1}
        onClick={() => handlePage(1)}
      >
        <FastRewindIcon />
      </button>
      <button
        style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "lightblue" }}
        onClick={() => handlePage(activePage - 1)}
        disabled={activePage === 1}
      >
        <ArrowLeftIcon />
      </button>
      {pageNumbers.map((item, i) => (
        <button
          key={i}
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: activePage === item ? "skyblue" : "lightblue",
          }}
          disabled={activePage === item}
          onClick={() => handlePage(item)}
        >
          {item}
        </button>
      ))}
      <button
        style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "lightblue" }}
        onClick={() => handlePage(activePage + 1)}
        disabled={activePage === totalPages}
      >
        <ArrowRightIcon />
      </button>
      <button
        style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "lightblue" }}
        disabled={activePage === totalPages}
        onClick={() => handlePage(totalPages)}
      >
        <FastForwardIcon />
      </button>
    </div>
  );
}

export default Pagination;


import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FastForwardIcon from '@mui/icons-material/FastForward';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

function Pagination({ handlePage, activePage = 0, totalPages = 0 }) {
  const start = Math.max(activePage - 1, 1);
  const end = Math.min(start + 2, totalPages);
  const pageNumbers = [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px", marginTop: "20px" }}>
      <button disabled={activePage === 1} onClick={() => handlePage(1)}><ReplyAllIcon /></button>
      <button onClick={() => handlePage(activePage - 1)} disabled={activePage === 1}><ArrowLeftIcon /></button>
      {pageNumbers.map((item, i) => (
        <button
          key={i}
          disabled={activePage === item}
          onClick={() => handlePage(item)}
          style={{ backgroundColor: activePage === item ? "skyblue" : "" }}
        >
          {item}
        </button>
      ))}
      <button onClick={() => handlePage(activePage + 1)} disabled={activePage === totalPages}><ArrowRightIcon /></button>
      <button disabled={activePage === totalPages} onClick={() => handlePage(totalPages)}><FastForwardIcon /></button>
    </div>
  );
}

export default Pagination;

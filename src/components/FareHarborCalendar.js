import React, { useEffect, useRef } from 'react';

function FareHarborCalendar({ itemId }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const url = `https://fareharbor.com/embeds/calendar/tours4less-pr/items/${itemId}/?full-items=yes&flow=no&api=yes`;
      iframe.src = url;
    }
  }, [itemId]);

  return (
    <iframe 
      ref={iframeRef}
      title="FareHarbor Calendar"
      width="100%"
      height="600px"
      frameBorder="0"
    ></iframe>
  );
}

export default FareHarborCalendar;
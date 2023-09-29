import React from 'react';

// Define the exportToJSON function
function exportToJSON() {
  const dbRequest = indexedDB.open("instagram-db", 1);
  
  dbRequest.onsuccess = function(event) {
    const db = event.target.result;
    const objectStores = ["users", "posts", "likes", "comments"];
    let exportData = {};

    let storeCounter = 0;
    
    objectStores.forEach(storeName => {
      const transaction = db.transaction(storeName, "readonly");
      const objectStore = transaction.objectStore(storeName);
      const getAllRequest = objectStore.getAll();

      getAllRequest.onsuccess = function() {
        exportData[storeName] = getAllRequest.result;
        
        storeCounter++;

        // Once all object stores have been processed, export the data
        if (storeCounter === objectStores.length) {
          const jsonBlob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
          const jsonUrl = URL.createObjectURL(jsonBlob);

          const downloadLink = document.createElement("a");
          downloadLink.href = jsonUrl;
          downloadLink.download = "instagram-db-export.json";
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      };
    });
  };
}

// React button component
function ExportButton() {
  return (
    <button onClick={exportToJSON}>Download Database as JSON</button>
  );
}

export default ExportButton;
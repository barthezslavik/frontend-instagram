const openRequest = indexedDB.open("instagram-db", 1);

openRequest.onupgradeneeded = function(e) {
  const db = e.target.result;

  // Users store
  if (!db.objectStoreNames.contains('users')) {
    db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
  }

  // Posts store
  if (!db.objectStoreNames.contains('posts')) {
    db.createObjectStore('posts', { keyPath: 'id', autoIncrement: true });
  }

  // Likes store
  if (!db.objectStoreNames.contains('likes')) {
    db.createObjectStore('likes', { keyPath: 'id', autoIncrement: true });
  }

  // Comments store
  if (!db.objectStoreNames.contains('comments')) {
    db.createObjectStore('comments', { keyPath: 'id', autoIncrement: true });
  }
};

function addData(storeName, data) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("instagram-db", 1);
    request.onsuccess = function() {
      const db = request.result;
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);
      const req = store.add(data);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    };
  });
}

// You can add more utilities like getUser, getPosts, etc.
export { addData };

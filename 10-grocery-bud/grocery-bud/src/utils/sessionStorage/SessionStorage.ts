const setSessionStorage = <T>(key: string, value: T): void | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storage = window.sessionStorage;
  if (!storage) return null;
  storage.setItem(key, JSON.stringify(value ?? ''));
};

const getSessionStorage = <T>(key: string): T | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const storage = window.sessionStorage;
  if (!storage) return null;
  try {
    return JSON.parse(storage.getItem(key) ?? '');
  } catch (err) {
    return null;
  }
};

const removeSessionStorage = (key: string): void | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const storage = window.sessionStorage;
  if (!storage) return null;
  return storage.removeItem(key);
};

export { getSessionStorage, setSessionStorage, removeSessionStorage };

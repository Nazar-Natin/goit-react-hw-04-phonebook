const STORAGE_KEY = 'phonebookContacts';

export const saveContactsToLocalStorage = contacts => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};

export const loadContactsFromLocalStorage = () => {
  const storedContacts = localStorage.getItem(STORAGE_KEY);
  return storedContacts ? JSON.parse(storedContacts) : [];
};

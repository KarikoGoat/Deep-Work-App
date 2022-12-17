import { createContext, useContext } from 'react';
import { db } from '../firebase-config';
import { collection, query } from 'firebase/firestore';
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import LoadingScreen from '../components/LoadingScreen';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const presetsRef = query(collection(db, "presets"));
  const tasksRef = query(collection(db, "tasks"));
  const presetsQuery = useFirestoreQuery("presets", presetsRef, {subscribe: true});
  const tasksQuery = useFirestoreQuery("tasks", tasksRef, {subscribe: true});
  
  if (presetsQuery.isLoading && tasksQuery.isLoading) {
    return (
      <LoadingScreen />
    );
  }

  const presetsSnapshot = presetsQuery.data;
  const tasksSnapshot = tasksQuery.data;
  const presets = presetsSnapshot.docs.map((doc) => ({...doc.data(), id: doc.id }));
  const tasks = tasksSnapshot.docs.map((doc) => ({...doc.data(), id: doc.id }));

  return (
    <AppContext.Provider value={{tasks, presets}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
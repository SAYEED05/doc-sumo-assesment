// Create a context and consume data from there

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import sampleData from "../sampleData/sections.json";

const DataContext = createContext<any>(null);

export const DataProvider = ({ children }: any) => {
  const data = sampleData.data;
  const [fieldsSelected, setFieldSelected] = useState<any>({}); //used map(object) instead of array because look up in map is O(1) while in array it is O(N)
  const [modelOpen, setModalOpen] = useState(false);
  const sectionsData = useMemo(() => {
    return data?.sections?.[0]?.children ?? [];
  }, [data]);

  const setAllSelected = useCallback(() => {
    for (let item of sectionsData) {
      setFieldSelected((prev: any) => {
        return {
          ...prev,
          [item.id]: true,
        };
      });
    }
  }, [sectionsData]);

  const filteredData = useMemo(() => {
    const _filtered = sectionsData.filter((item: any) =>
      fieldsSelected.hasOwnProperty(item.id)
    );

    return _filtered;
  }, [sectionsData, fieldsSelected]);

  const dataToSubmit = useMemo(() => {
    const _data = filteredData.filter((item: any) => !!fieldsSelected[item.id]);

    return _data;
  }, [filteredData, fieldsSelected]);

  const hasAnySelected = useMemo(() => {
    return !Object.values(fieldsSelected).some((item) => item);
  }, [fieldsSelected]);

  useEffect(() => {
    setAllSelected();
  }, [setAllSelected]);
  return (
    <DataContext.Provider
      value={{
        fieldsSelected,
        setFieldSelected,
        filteredData,
        dataToSubmit,
        modelOpen,
        setModalOpen,
        hasAnySelected,
        setAllSelected,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume the context
export const useData = () => useContext(DataContext);

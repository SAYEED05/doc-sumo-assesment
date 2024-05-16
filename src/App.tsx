import { Box, Grid } from "@mui/material";
import "./App.css";
import DocDisplay from "./Components/DocDisplay";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import sampleData from "./sampleData/sections.json";
import { useCallback, useEffect, useMemo, useState } from "react";
import Modal from "./Components/Modal";

function App() {
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
    <Box component={"main"}>
      <Navbar />
      <Grid container className="main__layout">
        <DocDisplay dataToSubmit={dataToSubmit} />
        <SideBar
          filteredData={filteredData}
          fieldsSelected={fieldsSelected}
          setFieldSelected={setFieldSelected}
          hasAnySelected={hasAnySelected}
          setModalOpen={setModalOpen}
          setAllSelected={setAllSelected}
        />
      </Grid>
      <Modal
        open={modelOpen}
        handleClose={() => setModalOpen(false)}
        dataToSubmit={dataToSubmit}
      />
    </Box>
  );
}

export default App;

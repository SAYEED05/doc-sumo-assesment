import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import styles from "./styles.module.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Props, TabType } from "./types";
import { tabs } from "./constants";
import RegularFields from "./RegularField";
import Modal from "../Modal";

const SideBar = ({ data }: Props) => {
  const [tabSelected, setTabSelected] = useState<number>(0);
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

  useEffect(() => {
    setAllSelected();
  }, [setAllSelected]);

  const hasAnySelected = useMemo(() => {
    return !Object.values(fieldsSelected).some((item) => item);
  }, [fieldsSelected]);

  const handleTabChange = (e: any, newValue: number): void => {
    setTabSelected(newValue);
  };
  return (
    <Grid item xs={3} p={2} className={styles.container}>
      <div className={styles.header}>Fields</div>
      <div className={styles.body}>
        <Tabs value={tabSelected} onChange={handleTabChange}>
          {tabs.map((tab: TabType) => (
            <Tab
              label={tab.label}
              key={tab.value}
              sx={{ color: "#ffffff" }}
              className={styles.tab}
              // disabled={tab.value === tabs[1].value}
            />
          ))}
        </Tabs>
        {tabSelected === 0 && (
          <Box
            component={"div"}
            className={`${tabs[0].value} ${styles.tab__body}`}
          >
            <RegularFields
              data={filteredData}
              fieldsSelected={fieldsSelected}
              setFieldSelected={setFieldSelected}
            />
          </Box>
        )}
        {tabSelected === 1 && (
          <Box
            component={"div"}
            className={`${tabs[1].value} ${styles.tab__body}`}
          ></Box>
        )}
      </div>
      <Box component={"div"} className={styles.footer}>
        <Button className={styles.action__button} onClick={setAllSelected}>
          Select all
        </Button>
        <Button
          className={styles.action__button}
          disabled={hasAnySelected} //will be disabled if no field is selected
          onClick={() => setModalOpen(true)}
        >
          Confirm
        </Button>
      </Box>
      <Modal
        open={modelOpen}
        handleClose={() => setModalOpen(false)}
        dataToSubmit={dataToSubmit}
      />
    </Grid>
  );
};

export default SideBar;

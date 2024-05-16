import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { useState } from "react";
import { TabType } from "./types";
import { tabs } from "./constants";
import RegularFields from "./RegularField";

const SideBar = ({
  filteredData,
  fieldsSelected,
  setFieldSelected,
  hasAnySelected,
  setModalOpen,
  setAllSelected,
}: any) => {
  const [tabSelected, setTabSelected] = useState<number>(0);

  const handleTabChange = (e: any, newValue: number): void => {
    setTabSelected(newValue);
  };
  return (
    <Grid item xs={3} p={2} className={styles.container}>
      <div className={styles.header}>
        <Typography>Fields</Typography>
      </div>
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
    </Grid>
  );
};

export default SideBar;

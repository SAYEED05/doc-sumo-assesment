import { Box, Grid } from "@mui/material";
import "./App.css";
import DocDisplay from "./Components/DocDisplay";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Modal from "./Components/Modal";
import { DataProvider } from "./Provider/DataProvider";

function App() {
  //TO-DO
  // 1.Remove all the any and strictly type it
  // 2.clean up data provider

  return (
    <DataProvider>
      <Box component={"main"}>
        <Navbar />
        <Grid container className="main__layout">
          <DocDisplay />
          <SideBar />
        </Grid>
        <Modal />
      </Box>
    </DataProvider>
  );
}

export default App;

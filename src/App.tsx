import { Box, Grid } from "@mui/material";
import "./App.css";
import DocDisplay from "./Components/DocDisplay";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import sampleData from "./sampleData/sections.json";

function App() {
  return (
    <Box component={"main"}>
      <Navbar />
      <Grid container className="main__layout">
        <DocDisplay />
        <SideBar data={sampleData.data} />
      </Grid>
    </Box>
  );
}

export default App;

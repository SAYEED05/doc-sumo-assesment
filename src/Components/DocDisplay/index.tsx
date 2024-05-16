import { Grid } from "@mui/material";
import styles from "./styles.module.css";
import image from "../../sampleData/Pdfpages/a2cbec1124234a6d846f908ba9531a2e-1.jpg";
const DocDisplay = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      item
      xs={9}
      className={styles.container}
    >
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#526069" }}
      >
        <img src={image} alt="document" />
      </Grid>
    </Grid>
  );
};

export default DocDisplay;

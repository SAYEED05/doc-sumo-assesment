import { Grid } from "@mui/material";
import styles from "./styles.module.css";
import image from "../../sampleData/Pdfpages/a2cbec1124234a6d846f908ba9531a2e-1.jpg";
import { useMemo } from "react";
import HighlightRectangle from "./HighlightRectangle";

const DocDisplay = ({ dataToSubmit }: any) => {
  const PositionMapper = useMemo(() => {
    const _modified = dataToSubmit.map((item: any) => {
      return {
        position: item?.content?.position,
        value: item?.content?.value,
      };
    });
    return _modified;
  }, [dataToSubmit]);
  console.log(PositionMapper, "PositionMapper");

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
        sx={{ backgroundColor: "#526069", position: "relative" }}
      >
        <img src={image} alt="document" />
        {PositionMapper?.map((rectangle: any) => (
          <HighlightRectangle position={rectangle} />
        ))}
      </Grid>
    </Grid>
  );
};

export default DocDisplay;

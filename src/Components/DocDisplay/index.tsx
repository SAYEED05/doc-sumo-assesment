import { Grid } from "@mui/material";
import styles from "./styles.module.css";
import image from "../../sampleData/Pdfpages/a2cbec1124234a6d846f908ba9531a2e-1.jpg";
import { useMemo } from "react";
import HighlightRectangle from "./HighlightRectangle";
import { useData } from "../../Provider/DataProvider";

const DocDisplay = () => {
  const { dataToSubmit } = useData();

  const positionMapper = useMemo(() => {
    const _modified = dataToSubmit.map((item: any) => {
      return {
        position: item?.content?.position,
        value: item?.content?.value,
        id: item?.id,
      };
    });
    return _modified;
  }, [dataToSubmit]);

  console.log(positionMapper, "positionMapper");

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
        <img src={image} alt="document" loading="lazy" />
        {positionMapper?.map((rectangle: any) => (
          <HighlightRectangle key={rectangle.id} position={rectangle} />
        ))}
      </Grid>
    </Grid>
  );
};

export default DocDisplay;

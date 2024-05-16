import { Checkbox, Grid, ListItem, Typography } from "@mui/material";
import styles from "./cardStyles.module.css";
import { getInitials } from "../../../utils";
import { useCallback, useMemo } from "react";
import FadeMenu from "../../Menu";
import { useData } from "../../../Provider/DataProvider";
const Card = ({ data }: any) => {
  const { fieldsSelected, setFieldSelected } = useData();

  const isSelected = useMemo(
    () => !!fieldsSelected[`${data.id}`],
    [fieldsSelected, data]
  );

  const handleCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      setFieldSelected((prev: any) => {
        return {
          ...prev,
          [id]: e.target.checked,
        };
      });
    },
    [setFieldSelected]
  );

  return (
    <ListItem
      sx={{ px: 1, py: 2, mb: 1, backgroundColor: "#273139" }}
      className={styles.card__wrapper}
    >
      <Grid container>
        <Grid className={styles.card__label} item xs={2}>
          <Typography>{getInitials(`${data?.label}`)}</Typography>
        </Grid>
        <Grid className={styles.card__details} item xs={7}>
          <Typography>{data.label}</Typography>
          <Typography>{data?.content?.value}</Typography>
        </Grid>
        <Grid
          className={styles.card__actions}
          item
          xs={3}
          container
          alignItems="center"
        >
          <Checkbox
            size="large"
            checked={isSelected}
            onChange={(e) => handleCheckboxChange(e, data.id)}
          />
          <FadeMenu setFieldSelected={setFieldSelected} data={data} />
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default Card;

import { List } from "@mui/material";
import Card from "./Card";

const RegularFields = ({ data, fieldsSelected, setFieldSelected }: any) => {
  return (
    <List sx={{ gap: 2 }}>
      {data.map((item: any) => {
        return (
          <Card
            key={item.id}
            data={item}
            fieldsSelected={fieldsSelected}
            setFieldSelected={setFieldSelected}
          />
        );
      })}
    </List>
  );
};

export default RegularFields;

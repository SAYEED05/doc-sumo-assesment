import { List } from "@mui/material";
import Card from "./Card";
import { useData } from "../../../Provider/DataProvider";

const RegularFields = () => {
  const { filteredData } = useData();
  return (
    <List sx={{ gap: 2 }}>
      {filteredData.map((item: any) => {
        return <Card key={item.id} data={item} />;
      })}
    </List>
  );
};

export default RegularFields;

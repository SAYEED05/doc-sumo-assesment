import { Box } from "@mui/material";

const HighlightRectangle = ({ position }: any) => {
  const [y, width, x, height] = position?.position ?? [];
  console.log(position, "POS");
  const reducer = 0.3;
  if (!position?.position) return null;
  return (
    <Box
      position={"absolute"}
      sx={{
        top: `${y * reducer}px`,
        right: `${x * reducer}px`,
        height: `${height * reducer}px`,
        width: `${width * reducer}px`,
        backgroundColor: "#2d7d22",
        opacity: 0.4,
      }}
    />
  );
};

export default HighlightRectangle;

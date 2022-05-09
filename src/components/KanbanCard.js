import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const KanbanCard = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
      </Card>
    </div>
  );
};

export default KanbanCard;

import React from "react";
import KanbanCard from "./KanbanCard";

const KanbanList = ({ title }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      <KanbanCard />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ccc",
    boarderRadius: 3,
    width: 300,
    padding: 8,
  },
};

export default KanbanList;

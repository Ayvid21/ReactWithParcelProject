import React, { useState, useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Delete as DeleteIcon } from "@material-ui/icons";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./BalanceDetail.css";
import FieldCard from "./FieldCard";

const ResponsiveGridLayout = WidthProvider(Responsive);

const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480 };
const cols = { lg: 12, md: 10, sm: 8, xs: 6, xxs: 4 };

function deleteAndShiftLeft(matrix, row, col) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Ensure the index is within bounds
  if (row < 0 || row >= rows || col < 0 || col >= cols) {
    throw new Error("Index out of bounds");
  }

  // Flatten the 2D array into a 1D array
  let flatArray = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      flatArray.push(matrix[r][c]);
    }
  }

  // Remove the element at the specified index
  const indexToRemove = row * cols + col;
  flatArray.splice(indexToRemove, 1);

  // Rebuild the 2D array
  const newMatrix = [];
  let k = 0;
  for (let r = 0; r < rows; r++) {
    newMatrix[r] = [];
    for (let c = 0; c < cols; c++) {
      newMatrix[r][c] = flatArray[k++];
    }
  }

  return newMatrix;
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }

    return result;
}

const BalanceDetailResponsive = () => {
  const [layout, setLayout] = useState([]);
  const gridLayoutRef = useRef(null);

  const widgets = [
    { title: "Claim Status", subtitle: "In Progress" },
    { title: "First Name", subtitle: "Divya" },
    { title: "Last Name", subtitle: "Rajpoot" },
    { title: "Provider Name", subtitle: "Avizva" },
  ];

  const gridRef = useRef(null);

  const handleDrop = (widget) => {
    console.log(gridLayoutRef.current)
    const gridCols = 12; // Total number of columns in the grid
    const itemWidth = 2; // Width of the item in columns
    const rowHeight = 2; // Height of the item in rows

    // Calculate the next available position
    let nextX = 0;
    let nextY = 0;

    if (layout.length > 0) {
      // Sort the layout by y and x to find the last placed item in the current row
      const sortedLayout = [...layout].sort((a, b) =>
        a.y === b.y ? a.x - b.x : a.y - b.y
      );
      console.log("sortedLayout: ", sortedLayout);
      const lastItem = sortedLayout[sortedLayout.length - 1];

      // Calculate the next x position
      nextX = lastItem.x + lastItem.w;
      nextY = lastItem.y;

      // Check if the next position exceeds the grid width
      if (nextX + itemWidth > gridCols) {
        // Move to the next row if the current row is full or if there's not enough space for the new item
        nextX = 0;
        nextY += rowHeight;
      }
    }

    // Create a new item with the calculated position
    const newItem = {
      i: `${widget.title}_${generateRandomString(10)}`,
      x: nextX,
      y: nextY,
      w: itemWidth,
      h: rowHeight,
      minW: 2,
      maxW: 4,
      resizeHandles: ["e", "w"],
    };

    // Update the layout state with the new item
    setLayout((prevLayout) => {
      // Calculate available space in the current row for all elements
      const newLayout = prevLayout.map((item) => {
        if (
          item.y === newItem.y &&
          item.x >= newItem.x &&
          item.x < newItem.x + newItem.w
        ) {
          // Shift existing items to the right if they overlap with the new item
          return { ...item, x: item.x + newItem.w };
        }
        return item;
      });

      return [...newLayout, newItem];
    });
  };

  const handleResize = (layout, oldItem, newItem, placeholder, e, element) => {
    console.log(oldItem, newItem, layout);
  };

  const create2DArrayFromLayout = (layout) => {
    const array = [];

    for (let i = 0; i < layout.length; i++) {
      const item = layout[i];
      const col = item.x / 2;
      const row = item.y / 2;

      if (Array.isArray(array[row])) {
        array[row][col] = item;
      } else {
        array[row] = [];
        array[row][col] = item;
      }
    }

    console.log("create2DArrayFromLayout", array);
    return array;
  };

  const createLayoutFrom2DArray = (array) => {
    const layout = [];

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i]?.length; j++) {
        const item = array[i][j];

        if (item !== undefined && item !== null) {
          layout.push({
            ...item,
            x: j * 2,
            y: i * 2,
          });
        }
      }
    }
    console.log("createLayoutFrom2DArray", layout);
    return layout;
  };

  const deleteItem = (layout, item) => {
    const array = create2DArrayFromLayout(layout);
    const col = item.x / 2;
    const row = item.y / 2;
    const newArray = deleteAndShiftLeft(array, row, col);
    return createLayoutFrom2DArray(newArray);
  };

  const handleDelete = (i) => {
    setLayout((prevLayout) => {
      const deletedItem = prevLayout.find((item) => item.i === i);
      const layout = deleteItem(prevLayout, deletedItem);
      return layout;
    });
  };

  return (
    <div className="App">
      <div
        className="page"
        onDrop={(e) => {
          e.preventDefault();
          const widget = JSON.parse(e.dataTransfer.getData("widget"));
          handleDrop(widget);
        }}
        onDragOver={(e) => e.preventDefault()}
        ref={gridRef}
      >
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: layout }}
          breakpoints={breakpoints}
          cols={cols}
          rowHeight={30}
          onResizeStop={handleResize}
          isResizable={true}
          isDraggable={true}
          autoSize={true}
          measureBeforeMount={false}
          useCSSTransforms={true}
          preventCollision={false}
        >
          {layout.map((item) => {
            const widget = widgets.find((w) => item.i.startsWith(w.title));
            return (
              <div key={item.i} data-grid={item} className="grid-item">
                {widget ? (
                  <>
                    <FieldCard
                      title={widget.title}
                      subtitle={widget.subtitle}
                    />
                    <div
                      className="delete-icon"
                      onClick={() => handleDelete(item.i)}
                    >
                      <DeleteIcon />
                    </div>
                  </>
                ) : (
                  <div>Unknown Widget</div>
                )}
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </div>
      <div className="widgets">
        {widgets.map((widget) => (
          <div
            key={widget.title}
            className="widget"
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData("widget", JSON.stringify(widget))
            }
          >
            <FieldCard title={widget.title} subtitle={widget.subtitle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BalanceDetailResponsive;

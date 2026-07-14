const grid = Array.from({ length: 10 }, (_, __) => Array.from({ length: 10 }));

const Table = ({ row, col }: { row: number; col: number }) => {
    return (
        <div>
            {grid.map((item, rowIndex) => {
                return (
                    <div style={{ display: "flex" }} key={rowIndex}>
                        {item.map((_, colIndex) => {
                            const isSelected = rowIndex < row && colIndex < col;
                            return (
                                <div
                                    style={{
                                        height: "50px",
                                        width: "50px",
                                        border: "1px solid black",
                                        background: isSelected ? "green" : "",
                                    }}
                                    contentEditable={isSelected ? true : false}
                                    key={`${rowIndex}-${colIndex}`}
                                ></div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
 
export default Table;
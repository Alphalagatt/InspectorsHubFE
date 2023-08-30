function TableFrame(props){
    return(
        <div>
            <table className="tables">
                <thead>
                    {Object.keys(props.myData[0]).map((c,i)=>{
                      return  <th key={i}>{c}</th>
                    })}
                </thead>
                <tbody>
                    {Object.keys(props.myData).map((row,row_index)=>{
                        return<tr key={row_index}>
                        {Object.keys(props.myData[row_index]).map((cell_value,cell_index)=>{
                            return  <td key={cell_index}>{props.myData[row_index][cell_value]}</td>
                        })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TableFrame;
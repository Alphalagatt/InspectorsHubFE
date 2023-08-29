function TableFrame(props){
    return(
        <div>
            <table>
                <thead>
                    {props.header.forEach(element => {
                        <th>{element}</th>
                    })};
                </thead>
                <tbody>
                    <tr>
                        {props.row_item.forEach(item=>{
                            <td>{item}</td>
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableFrame;
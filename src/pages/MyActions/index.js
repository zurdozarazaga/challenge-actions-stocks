import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getStockAllAction } from "../../actions/createActions";
import { stockSelected } from "../../actions/createActions";

const MyActions = () => {
  const [stockSelectedValue, setStockSelectedValue] = useState([]);
  console.log(stockSelectedValue);
  const dispatch = useDispatch()
  const stocksAll = useSelector(state => state.stocks)
  const stockSelectedInput = useSelector(state => state.stock)
  console.log(stocksAll)
  console.log(stockSelectedInput)
  

  useEffect(() => {
    dispatch(getStockAllAction())
  }
  , [dispatch]);

  useEffect(() => {
    setStockSelectedValue(stockSelectedInput)
  },[ stockSelectedInput ])
    

  const handleChangeStocks = (e,newValue) => {
    dispatch(stockSelected(newValue))
    console.log('newValue',newValue)
    e.reset()
  };

  return (
    <div>
      <div className="flex m-3">
        <Autocomplete
          disablePortal
          onChange={(event, newValue) => {
            handleChangeStocks(event,newValue);
        }}
          id="combo-box-demo"
          options={stocksAll}

          getOptionLabel={(option) => option.name || ""}
          sx={{ width: 300 }}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.symbol}>
                {option.name}
              </li>
            );
          }}
          renderInput={(params) => <TextField {...params} label="Stocks" />}
        />
      </div>
      <table className="text-left w-full">
        <thead className="bg-black flex text-white w-full">
          <tr className="flex w-full mb-4">
            <th className="p-4 w-1/4">Simbolo</th>
            <th className="p-4 w-1/4">Nombre</th>
            <th className="p-4 w-1/4">Moneda</th>
            <th className="p-4 w-1/4">Acción</th>
          </tr>
        </thead>
        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full">
        { stockSelectedValue.map(stock => (
        <tr className="flex w-full mb-4" key={stock.symbol}>
        <td className="p-4 w-1/4">{ stock.symbol }</td>
            <td className="p-4 w-1/4">{ stock.name }</td>
            <td className="p-4 w-1/4">{ stock.currency }</td>
            <td className="p-4 w-1/4"></td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyActions;
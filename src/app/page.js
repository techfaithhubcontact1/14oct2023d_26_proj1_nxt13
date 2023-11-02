"use client"
//1. import Area
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";

// defination area  
export default function Home() {
  //2.1 hooks Area 
  const [stockName, setStockName] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [stockpr, setstockpr] = useState('');
  useEffect(()=>{
    setInterval(function(){
      console.log('OK')
      getStockPrice(stockName)  //follow DRY pricipal
    }, 10000);
  }, [stockName]);

  //2.2 function defination area
  const getStockPrice = (sn)=> {
    fetch(`/api/getStockPrice?stockName=${sn}`).then((res)=>{
      return res.json();
    }).then((data)=>{
        console.log(data); 
        console.log(data.price);
        setstockpr(data.price);

    }).catch((err)=>{
       console.log(err);
    }).finally(()=>{}); 
  }
  const handleChange = (e)=>{
     
    setStockName(e.target.value);
    console.log(e.target.value);
    getStockPrice(e.target.value);

    //Now call the api
    // this is called promised chain
    fetch(`/api/getStockPrice?stockName=${e.target.value}`).then((res)=>{
      return res.json();
    }).then((data)=>{
        console.log(data.price);
        setstockpr(data.price);

    }).catch((err)=>{
       console.log(err);
    }).finally(()=>{}); 
  }
  return (
    <React.Fragment>
      <main>
        <Box sx={{ minWidth: 120 }}>
          <h1>The Current Price of {stockName} Stock: {stockpr}</h1>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Stock</InputLabel>
            <Select value={selectedValue} onChange={handleChange} labelId="demo-simple-select-label" id="demo-simple-select" label="Select Stock">
              <MenuItem value="HDFC">HDFC</MenuItem>
              <MenuItem value="IDFC">IDFC</MenuItem>
              <MenuItem value="ICICI">ICICI</MenuItem>
              <MenuItem value="KOTAK">KOTAK</MenuItem>
              <MenuItem value="ARTEL">ARTEL</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </main>
    </React.Fragment>
  )
}

//3. export area
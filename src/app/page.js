"use client"
//1. import Area
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

// defination area 
export default function Home() {
  //2.1 hooks Area
  const [selectedValue, setSelectedValue] = useState('');
  const [stockpr, setstockpr] = useState('');

  //2.2 function defination area
  const handleChange = (e)=>{

    console.log(e.target.value);

    //Now call the api
    // this is called promised chain
    fetch('/api/getStockPrice').then((res)=>{
      return res.json();
    }).then((data)=>{
        console.log(data.price);
        setstockpr(data.price);

    }).catch((err)=>{

    }).finally(()=>{}); 
  }
  return (
    <main>
      <h1>Current price of blow stock is {stockpr}</h1>
      <Select value={selectedValue} onChange={handleChange}>
        <MenuItem value="hdfc">HDFC</MenuItem>
        <MenuItem value="idfc">IDFC</MenuItem>
        <MenuItem value="icici">ICICI</MenuItem>
      </Select>
    </main>
  )
}

//3. export area
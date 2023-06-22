'use client';


import React, { useState, useEffect, useMemo } from 'react';
import { commerce } from '../../lib/commerce';
import useStyles from './styles';
import { Grid, FormControl, MenuItem, InputLabel, Select, Checkbox, ListItemText, OutlinedInput, Chip, Box } from '@mui/material';
import { Product } from '../../components';


const Filter = ({ onAddToCart }) => {
    

    const classes = useStyles();


    const [products, setProducts] = useState([]);
    const [categ, setCateg] = useState([]);
    const [selectedCateg, setSelectedCateg] = useState();

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCategories = async () => {
        const { data } = await commerce.categories.list();
        setCateg(data);
    }

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    console.log(products);
    console.log(categ);


/* 
    function handleSelectedCateg(event) {
                 const {target: { value },} = event;
            setSelectedCateg( // On autofill we get a stringified value.
              typeof value === 'string' ? value.split(',') : value,);
    }; */
    
        function handleSelectedCateg(event){
        setSelectedCateg(event.target.value);
        }
        
 const filter=products.map(item => ({
     ...item, categories: item.categories.filter(item2 => item2.name === selectedCateg)
     }))
.filter(item => item.categories.length > 0);
    
    
    const filtered =
        (!selectedCateg) ? products : filter;
            
    
    console.log(filtered);
        

    


    const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


  return (
    <main className={classes.content}>
          <div className={classes.toolbar} />
     
          <Grid container justifyContent='center' spacing={1}>
              <Grid item xs={4}>
                  <FormControl sx={{ minWidth:200 }}>
  <InputLabel id="Select Categories">Categories</InputLabel>
  <Select 
    labelId="Categories"
   id="selectCategories"
/* renderValue={(selected) => (
<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
 {selected.map((value) => (
   <Chip key={value} label={value} />
  ))}
 </Box>
  )}  */
 value={selectedCateg}
  input={<OutlinedInput label="Select a category" />}
 onChange={handleSelectedCateg}
 MenuProps={MenuProps}
  >
 {categ.map((item) => (
     <MenuItem key={item.id} value={item.name}>
      {item.name}
     </MenuItem>
                                                        ))}

  </Select>
                  </FormControl>
              </Grid>
             
              <Grid container item spacing={1}>
                                
      {filtered.map((product)=> (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Product product={product} onAddToCart={onAddToCart} />
      
    </Grid>
      ))
              }
              </Grid>
      {/* adding an empty div with the height equal to the 
            height of the toolbar so the products are pushed a little bit down */}
     


</Grid>

  
  </main>
  )
}

export default Filter
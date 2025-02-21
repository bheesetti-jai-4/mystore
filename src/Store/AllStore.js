
import { configureStore, createSlice } from "@reduxjs/toolkit";
import mobiles from "./Mobilesdata";
import mensfashion from "./MensFashion";
import womensfashion from "./WomenFashion";
import kidsfashion from "./KidsFashion";
import furnitures from "./AllFurniters";
import electronics from "./AllElectronics";
import tops from "./TopHome";


const productslice =  createSlice({
    name:"products",
    initialState:{
         // seperate file maintaing to another file
        mobiles ,
        mensfashion,
        womensfashion,
        kidsfashion,
        electronics,
        furnitures,
        tops
    },
    reducers:{}
})

// cart slice 
    const cartslice = createSlice({
            name:"cart",
            initialState: JSON.parse(localStorage.getItem("cart")) || [],
            reducers:{
                addtocart:(state,action)=>{
                   const finddata = state.find((item) => item.name === action.payload.name )
 
                   if(finddata){
                    finddata.quantity += 1
                   }else{
                    state.push({...action.payload,quantity:1})
                   }
                   localStorage.setItem("cart", JSON.stringify(state));
            },

            // remove product form cart   # cant remove because redux is immutable 
            remove:(state,action) =>{
             const updatecart = state.filter((item) => item.name !== action.payload.name)
             localStorage.setItem("cart", JSON.stringify(updatecart));
             return updatecart;
                
            },

            // increse  products items
            increment:(state,action) => {
               const incresequantity =  state.find((item) => item.name === action.payload.name)

               if(incresequantity){
                incresequantity.quantity +=1;
               }
               localStorage.setItem("cart", JSON.stringify(state));
            },

            // decrese products items
            decrement:(state,action)=>{
               const decresequantity =  state.find((item) => item.name === action.payload.name)
               let updatecart;
               if(decresequantity && decresequantity.quantity > 1 ){
                decresequantity.quantity -= 1;
                updatecart = [...state];
               }else{
                updatecart = state.filter((item) => item.name !== action.payload.name)
               }
               localStorage.setItem("cart", JSON.stringify(updatecart));
               return updatecart
            },   
            // clear cart data 
            clearcartdata: () => {
                localStorage.removeItem("cart");
                return [];    // Reset cart state
            }   
            }
        })

        

        // purchesdetails 
        const purchesSlice = createSlice({
            name:"purchesdetails",
            initialState : JSON.parse(localStorage.getItem("purchesdetails")) || [], // Load from local storage
            reducers:{
                addpurchesdetails:(state,action)=>{
                    state.push(action.payload)
                    localStorage.setItem("purchesdetails", JSON.stringify(state)); // Save to local storage
    
                }
            }
        })

        // creatin authenication 
       const authslice = createSlice({
            name:"auth",
            initialState:{
                isauthenicate: JSON.parse(localStorage.getItem("isauthenicate")) || false,
                user: localStorage.getItem("username") || " ",
            },
            reducers : {
                login:(state,action) => {
                    state.isauthenicate = true;
                    state.user=action.payload;
                    localStorage.setItem("isauthenicate", JSON.stringify(true));
                    localStorage.setItem("username",action.payload)
                },
                logout:(state) => {
                    state.isauthenicate = false;
                    state.user = " ";
                    localStorage.removeItem("isauthenicate");
                    localStorage.removeItem("username")
                }
            }
        })



// configigure above  the detail 
const store =  configureStore({
    reducer:{products:productslice.reducer,
            cart:cartslice.reducer,
            auth:authslice.reducer,
            purchesdetails:purchesSlice.reducer
            
    }
})

export default store 

export const {addtocart} = cartslice.actions
export const {increment ,decrement , remove , clearcartdata} = cartslice.actions
export const {login , logout} = authslice.actions
export const {addpurchesdetails} = purchesSlice.actions


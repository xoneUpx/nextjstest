import axios from './axios-config.js';
export default async function(url)  { 

 const items = await axios.get(url); console.log(items); return  items.data
}

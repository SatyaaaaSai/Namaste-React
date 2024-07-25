// import { useEffect, useState } from "react";
// import { MENU_URL } from "./constants";
// const useResMenu = (resId) =>{
//     const[resInfo,setresInfo]=useState(null);

//     useEffect(()=>{
//         fetchData();
//     },[]);

//     const fetchData = async ()=>{
//         const data=await fetch(MENU_URL+resId);
//         const json=await data.json();
        
//         setresInfo(json.data);          
//     };

//     return resInfo;

// }

// export default useResMenu;

import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useResMenu = (resId) =>{
    const[resInfo,setresInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data=await fetch(MENU_URL+resId);
        const json=await data.json();
        
        setresInfo(json.data);          
    };

    return resInfo;

}

export default useResMenu;

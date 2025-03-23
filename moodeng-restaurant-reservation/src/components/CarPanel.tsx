'use client'

import Productcard from "./ProductCard"
import { useReducer ,useRef,useEffect, useState} from "react"
import Link from "next/link"
import { ClassNames } from "@emotion/react"
import getCars from "@/libs/getCars"

export default function CarPanel(){
    const[carResponse,setCarResponse]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            const cars=await getCars();
            setCarResponse(cars);
        }
        fetchData();
    },[])

    const countRef=useRef(0);
    const inputRef=useRef<HTMLInputElement>(null);

    const compareReducer=(compareList:Set<string>,action:{type:string,carName:string})=>{
        switch(action.type){
            case 'add':{
                return new Set(compareList.add(action.carName));
            }
            case 'remove':{
                compareList.delete(action.carName);
                return new Set(compareList)
            }
            default: return compareList
        }
    }
    const [compareList,dispachCompare]=useReducer(compareReducer,new Set<string>());
    // // mock data
    // const mockCarRepo=[
    //     {rid:"001",name:"Honda Civic",image:"/img/civic.jpg"},
    //     {rid:"002",name:"Honda Accord",image:"/img/accord.jpg"},
    //     {rid:"003",name:"Toyota Fortuner",image:"/img/fortuner.jpg"},
    //     {rid:"004",name:"Tesla Model 3",image:"/img/tesla.jpg"},
    // ]

    if(!carResponse)return(<p>car is loading...</p>)

    return( 
        <div >
            <div style={{margin:"20px", display:"flex",flexDirection:"row",
            flexWrap:"wrap",justifyContent:"space-around",
            alignContent:"space-around",padding:"10px"}}>
                {
                    carResponse.data.map((caritem:Object)=>(
                        <Link href={`/restaurant/${caritem.id}` }className="w-1/5"key={caritem.rid}>
                        <Productcard carName={caritem.model} imgSrc={caritem.picture}
                        onCompare={(car:string)=>dispachCompare({type:'add',carName:car})}/>
                        </Link>
                    ))
                }

            </div>
            <div>Compare List:{compareList.size}</div>
            {Array.from(compareList).map((car)=><div key={car} 
            onClick={()=>dispachCompare({type:'remove',carName:car})}>
                {car}</div>)}

            <button className="block rounded-md bg-sky-600  hover:bg-indigo-600 
            px-3 py-2 text-white shadow-sm"
            onClick={()=>{countRef.current=countRef.current+1;alert(countRef.current)}}>
                Count with ref val
            </button>
            <input type="text" placeholder="please fill" className="block text-gray-900
            text-sm rounded-lg p-2 m-2 bg-purple-50 ring-1 ring-inset ring-purple-400
            focus:outline-none focus:bg-purple-200 focus:ring-2"
            ref={inputRef}/>
            <button className="block rounded-md bg-sky-600  hover:bg-indigo-600 
            px-3 py-2 text-white shadow-sm"
            onClick={()=>{if(inputRef?.current)inputRef.current.focus()}}>
                Focus Input
            </button>
        </div>
    )
}
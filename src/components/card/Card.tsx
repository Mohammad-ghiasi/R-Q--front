import React from "react";
import { cardInfo } from "../../types/cardinfo";
import Drawer from '@mui/material/Drawer';
import { Box, Button } from "@mui/material";

const Card = (props: cardInfo) => {
    const { ad_type, description,image, price, title } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <div onClick={(): void => setOpen(true)} className="border border-black m-6 p-4">
                <h1 className="text-lg font-bold">{title}</h1>

                <div className="w-[100%] relative">
                    <img src={image} alt={title} />
                    <div className={`absolute font-bold top-3 left-4 ${ad_type === 'buy' ? 'bg-blue-500' : 'bg-red-500'} text-white px-4 py-1 rounded-2xl`}>{ad_type}</div>
                </div>
                <hr />
                <h3>{ad_type}</h3>
                <h4>{description}</h4>
                <p>price: {price}</p>
            </div>
            <Drawer open={open} onClose={(): void => setOpen(false)}>
               
                    <div className="w-[300px] h-[200px] m-4 flex flex-col space-y-5">
                        <img src={image} alt={title} />
                        <hr />
                        <p className="text-lg ">Name: {title}</p>
                        <p className="text-lg ">Type: {ad_type}</p>
                        <p className="text-lg ">description: {description}</p>
                        <p className="text-lg font-bold">price: {price}</p>
                        <hr />
                        <div className="flex space-x-4">
                            <Button variant="contained" color="warning" className="bg-gray-200 px-4  cursor-pointer mt-3" onClick={(): void => { setOpen(false) }}>close</Button>
                        </div>
                    </div>
                
            </Drawer>
        </>
    )
}

export default Card
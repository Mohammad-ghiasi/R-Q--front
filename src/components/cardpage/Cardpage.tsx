import React, { useState } from 'react'
import { useGet } from '../../hooks/useget'
import { cardInfo } from '../../types/cardinfo'
import Card from '../card/Card'
import { useForm } from 'react-hook-form'


type form = {
    key: string;
}
// export type arguments = {
//     type: null | 'buy' | 'sell';
//     pagenumber: number;
//     search: string | null
// }

const Cardpage = () => {
    const { register, handleSubmit, reset } = useForm<form>({
        defaultValues: {
            key: ''
        }
    })
    // const [type, setType] = useState<null | 'buy' | 'sell'>(null)
    // const [pagenumber, setPagenumber] = useState<number>(1);
    // const [search, setSearch] = useState<string | null>(null)

    // const { errors, isSubmitting, isSubmitted, isSubmitSuccessful } = formState;
    const onsubmit = (data: form) => {
        if (data.key.length > 3) {
            console.log(data);
            // setSearch(data.key)
            setDatas({ ...datas, search: data.key })
            reset()
        }
    }
    const [datas, setDatas] = useState<any>({
        type: null,
        pagenumber: 1,
        search: null
    })

    // services...
    const { data, isPending, all } = useGet("http://localhost:8000/ads/advertises/paged/?ad_type=&page=", datas)
    // --------------------

    if (isPending) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <h1>Cardpage components</h1>
            <p className='text-xl'>totall item: {all}</p>
            <div className="flex space-x-4">
                <span className="bg-gray-200 px-4  cursor-pointer" onClick={(): void => { setDatas({ ...datas, type: null }) }}>all</span>
                <span className="bg-gray-200 px-4  cursor-pointer" onClick={(): void => { setDatas({ ...datas, type: 'buy' }) }}>buy</span>
                <span className="bg-gray-200 px-4  cursor-pointer" onClick={(): void => { setDatas({ ...datas, type: 'sell' }) }}>sell</span>
            </div>
            <span onClick={(): void => setDatas({ ...datas, pagenumber: 2 })}>Next</span>
            {/* <span onClick={(): void => setDatas({...datas, pagenumber: pagenumber})}>Previous</span> */}
            <form onSubmit={handleSubmit(onsubmit)} noValidate>
                <input
                    className="border border-red-500"
                    type='text'
                    {...register("key")}

                />
                <button className="bg-blue-400 ms-5" type='submit'>submite</button>

            </form>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {data?.map((item: cardInfo) => <Card key={item.id} {...item} />)}
            </div>

        </>
    )
}

export default Cardpage
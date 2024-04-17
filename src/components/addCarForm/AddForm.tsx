import React from 'react'
import { useForm } from 'react-hook-form'

const AddForm = ({onSubmit}: any) => {
    const { register, handleSubmit } = useForm()
    return (
        <form onSubmit={(): void => {handleSubmit(onSubmit)}} className=''>
            Title <input type="text" {...register("title")} /> 
            <br />
            Decciption <textarea {...register("decciption")} />
            <br />
            Price <input type="number" {...register("price")} />
            <br />
            <div className="">
                type: 
                sell <input type="radio" value={"sell"} {...register("type")} />
                buy <input type="radio" value={"buy"} {...register("type")} />
            </div>
            image <input type="file" {...register("image")} />

            <input type="submit" />
        </form>
    )
}

export default AddForm
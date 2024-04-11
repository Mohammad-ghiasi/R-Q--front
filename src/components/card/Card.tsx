import { cardInfo } from "../../types/cardinfo";

const Card = (props: cardInfo) => {
    const { id, ad_type, description,image, price, title } = props
    return (
        <>
            <div className="border border-black m-6 p-4">
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
        </>
    )
}

export default Card
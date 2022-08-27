


const Total = ({formData}) => {

    return (
        <>
        <div className="flex flex-col gap-6">
            <p>{formData.tokenName}</p>
            <p>{formData.supply}</p>
            <p>{formData.decimal}</p>
        </div>

        </>
    )
}

export default Total;
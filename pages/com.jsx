import usePrice from "../hooks/usePrice";

// create component

const Com = () => {

    const { price, loading, error } = usePrice();

    console.log(price);

return (

<>

</>

);

};

// export component

export default Com;
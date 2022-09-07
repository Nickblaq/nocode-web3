import { useState, useEffect } from "react";


export default function usePrice() {
    const [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function swapPrice(price) {
        return 250 / price;
    }

    function getprice() {

        try {
            fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
                .then(res => res.json())
                .then(data => {
                    setPrice(swapPrice(data.ethereum.usd));
                    setLoading(false);
                })
            
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
            
        }
    }


    // swap price calculator from coingecko api





    useEffect(() => {
        getprice();
    }, [price]);

    return { price, loading, error };


}
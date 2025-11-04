import {ProductCard} from "../../../entitites/product";
import {useEffect, useState} from "react";
import type {ProductCardProps} from "../../../entitites/product/model/types/product-card.ts";

const CatalogPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        ( async () => {
            const res = await fetch("http://localhost:3000/api/browse/products")
            const data = await res.json()
            console.log(data)
            setProducts(data.data)
        })()
    }, []);

    return (
        <section className={"mt-9 mb-10"}>
            <div className={"container"}>
                <div className={"grid grid-cols-3 gap-12.5"}>
                    {
                        products.map((product: ProductCardProps) => (
                            <ProductCard {...product} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CatalogPage;
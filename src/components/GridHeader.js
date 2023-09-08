import { useEffect, useState } from "react";

function GridHeader(props) {

    const [page, setPage] = useState("");

    useEffect(
        () => {
            if(props.page === 'mens products'){
                setPage("men's products")
            }else{
                setPage("women's products")
            }
        },
        [props.page]
    )

    return (
        <>
            <section className="product_header">
                <p className="product_path">Home / {page}</p>
                <p className="product_count">
                    {page}
                    <span>
                        &nbsp; {props.productsCount} items
                    </span>
                </p>
                <h3>Filters</h3>
                <select name="bundle" id="bundle">
                    <option value="none">Bundles</option>
                </select>
                <select name="country" id="countryorigin">
                    <option value="none" default>Country of Origin</option>
                </select>
                <select name="size" id="size">
                    <option value="none">Size</option>
                </select>

            </section>
        </>
    )
}

export { GridHeader };
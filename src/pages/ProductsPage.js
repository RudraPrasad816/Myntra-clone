import { useEffect, useState } from "react";
import { GridHeader, Sidebar, ProductContainer } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import data from '../data/data';

function ProductsPage() {

    const page = useParams().page;

    const navigate = useNavigate();

    const [productdata, setProductData] = useState([]);

    const [brands, setBrands] = useState([]);

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (page === 'mens products') {
            sessionStorage.setItem('page', "mens products");
            const filterData = data.filter((ele) => { return ele.gender === 'M' })
            setProductData(filterData);
        }
        else if (page === 'womens products') {
            sessionStorage.setItem('page', "womens products");
            const filterData = data.filter((ele) => { return ele.gender === 'F' })
            setProductData(filterData);
        }
        else {
            showError();
        }
    }, [page])

    useEffect(
        () => {
            let brandList = [];
            productdata.forEach(
                (ele) => {
                    brandList.push(ele.name);
                }
            )

            let set = new Set();
            brandList.forEach(
                (ele)=>{
                    set.add(ele)
                }
            )
            brandList = Array.from(set);
            setBrands(brandList);
        },
        [productdata]
    )

    function showError(){
        navigate("/pagenotfound");
    }

    function showProductByBrands(brand){
        let filteredProducts = productdata.filter((ele) =>{
            return ele.name === brand;
        })
        setFilteredData(filteredData.concat(filteredProducts));
    }

    function removeProductFromBrand(brand){
        let filteredProducts = filteredData.filter((ele)=>{
            return ele.name !== brand;
        })
        setFilteredData(filteredProducts);
    }

    return (
        <div className="container">
            <GridHeader productsCount={productdata.length} />
            <Sidebar brands={brands} setProduct={showProductByBrands} removeProduct={removeProductFromBrand} />
            <ProductContainer products={filteredData.length == 0 ? productdata : filteredData} />
        </div>
    )
}

export { ProductsPage };
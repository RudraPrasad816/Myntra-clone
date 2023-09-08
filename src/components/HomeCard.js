export default function HomeCard(props){
    return (
        <div className="product-card">
            <img src={props.data.otherImages[0]} alt="" />
        </div>
    )
}
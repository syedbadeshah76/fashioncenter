
const Restaurant = (props) => {
 const {resData} = props;
 
  return (
    <div className="container">
        <div className="biryani-list">
        <div className="biryani-1">
        <img src={resData.images[0].url}  style={{ width: '280px', height: 'auto' }} />
        <h3>{resData.name}</h3>
        <h4>{resData.type} </h4>
        <h4>{resData.price} </h4>
        <h4>{resData.color} </h4>
        <h4>{resData.rating}</h4>


        </div> 
        </div>
    </div>  
  )
}

export default Restaurant
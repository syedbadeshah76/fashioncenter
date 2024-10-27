
import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import resObj from "./mockData";


const Body = () => {
  //State variables - super powerful variables
  const [badshah, setListOfRestraunt] = useState(resObj);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.jsonbin.io/v3/b/6715def3ad19ca34f8bbf580"

      );
      const json = await data.json();
      { console.log(json)};
      setListOfRestraunt(json.record.clothing_item[0])
  };

  return (
    <div className="body">
      <h1>CLOTH </h1>
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          // filter logic here 
          const filter = badshah.filter((e) => e.rating > 4);
          setListOfRestraunt(filter);
        }}>
          Top Rated </button>
      </div>
      <div className="image-biryani">
        {
          badshah.map(props => (<Restaurant key={props.id} resData={props} />
          ))};


      </div>
    </div>
  )
}

export default Body;

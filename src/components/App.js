import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {
  async function getData() {
    const response = await axios.get("https://vtxapi.herokuapp.com/api/all");
    return response.data;
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then(data => setData(data));
  }, []);

  function Card(props) {
    return (
      <div className="card">
        <img className="card-img" src={props.thumb_nail} alt="Thumbnail" />
        <h4 className="card-info">{props.name}</h4>
        <a href={'https://trug.is-a.dev/HTML-CSS-JS-Editor/?id='+props.id}>
          <div className="overlay">
            <h4>
              VIEW CODE
            </h4>
            <p style={{ fontSize: "12px" }}>- HCJE -</p>
          </div>
        </a>
      </div>
    )
  }

  return (
    <>
      <div className="content">
        <p style={{ fontWeight: "700", fontSize: "36px", background: "black", padding: "20px" }}>
          BasicWeb Portfolio
        </p>
        <p>Here are the mini-projects that I want to share with you. Thanks for your visit.</p>

        <div className="grid-container">

          {data.map(item => (
            <Card
              key={item.id}
              id={item._id}
              name={item.name}
              thumb_nail={item.thumb_nail}
            />
          ))}

        </div>
      </div>
    </>
  );
}

export default App;

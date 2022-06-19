import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {
  async function getData() {
    const response = await axios.get("https://vtxapi.herokuapp.com/api/allid");
    return response.data.reserve();
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then(data => {
      setData(data);
      document.getElementsByClassName("mainn")[0].style.display = "none";
    });
  }, []);
  useEffect(() => {
    var meter = document.getElementById("meter");
    meter.addEventListener("animationend", function () {
      document.getElementsByClassName("dashboard")[0].style.display = "none";
      document.getElementsByClassName("content")[0].style.display = "block";
    });
  }, []);
  function Card(props) {
    return (
      <div className="card">
        <a href={'https://trug.is-a.dev/HTML-CSS-JS-Editor/?id=' + props.id}>
          <img className="card-img" src={props.thumb_nail} alt="Thumbnail" />
          <h4 className="card-info">{props.name}</h4>
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
      <div className="dashboard">
        <svg>
          <circle className="bg" cx="57" cy="57" r="52" />
          <circle id="meter" className="meter" cx="57" cy="57" r="52" />
        </svg>
      </div>
      <div className="mainn">
        <div className="a">
          <div></div>
          <div></div>
        </div>
      </div>

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

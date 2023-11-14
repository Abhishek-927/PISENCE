import React from "react";
import data from "../../config/data.json";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h2>HELLO! {data.NAME}</h2>
        <p style={{ textAlign: "center", marginBottom: "5px" }}>Attendance</p>
        <div className="grid-container">
          <div className="item1">
            <div className="grid-header">
              <div
                className="flex-in"
                style={{ flexDirection: "column-reverse" }}
              >
                <span></span>
                <div>AN</div>
                <div>FN</div>
              </div>
              {Object.keys(data.ATTENDANCE).map((ele) => {
                return (
                  <div>
                    <p>{ele}</p>
                    <span>{data.ATTENDANCE[ele].date}</span>
                    <div className="flex-in">
                      <div
                        className="fn"
                        style={{
                          backgroundColor:
                            data.ATTENDANCE[ele].fn === "present"
                              ? "green"
                              : "red",
                        }}
                      ></div>
                      <div
                        className="fn"
                        style={{
                          backgroundColor:
                            data.ATTENDANCE[ele].an === "present"
                              ? "green"
                              : "red",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="item2">
            <p>Homeworks</p>
            <div className="grid-homework">
              {data.homework.map((h, i) => {
                return (
                  <div key={i} style={{ marginBlock: "10px" }}>
                    {h}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="item3">
            <p>Behavioral Analytics</p>
            <div className="d-flex">
              <div className="circle"></div>
              <div className="col">
                <div className="row">
                  <p className="good" style={{ backgroundColor: "green" }}></p>
                  GOOD
                </div>
                <div className="row">
                  <p className="good" style={{ backgroundColor: "red" }}></p>
                  BAD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

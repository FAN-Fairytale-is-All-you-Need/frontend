import React, { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState("");
  const [keyword, setKeyword] = useState("");
  const [character, setCharacter] = useState("");
  const [scene_text1, setScene_text1] = useState("");
  const [scene_text2, setScene_text2] = useState("");
  const [scene_text3, setScene_text3] = useState("");
  const [scene_text4, setScene_text4] = useState("");
  const [scene_image1, setScene_image1] = useState("");
  const [scene_image2, setScene_image2] = useState("");
  const [scene_image3, setScene_image3] = useState("");
  const [scene_image4, setScene_image4] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      age: age,
      keyword: keyword,
      character: character,
    }; // 키워드나 캐릭터는 텍스트 형태로 보내야함 여러개 보낼땐 , 붙여서 보내도 가능 예시) 곰돌이, 토끼

    try {
      const response = await fetch("http://127.0.0.1:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setScene_text1(responseData.scene1_text);
      setScene_image1(responseData.scene1_image_url);
      setScene_text2(responseData.scene2_text);
      setScene_image2(responseData.scene2_image_url);
      setScene_text3(responseData.scene3_text);
      setScene_image3(responseData.scene3_image_url);
      setScene_text4(responseData.scene4_text);
      setScene_image4(responseData.scene4_image_url);
      // 이후에 장면1 -> 장면2 -> .. 이 방법 고려해서 다 따로 만듦
      // 장면은 딱 4개까지만 생성하도록 ai서버 쪽에서 설정
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Character"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="message-container">{scene_text1}</div>
      {scene_image1 && (
        <div className="scene-image">
          <img src={scene_image1} alt="Scene" />
        </div>
      )}
      <div className="message-container">{scene_text2}</div>
      {scene_image1 && (
        <div className="scene-image">
          <img src={scene_image2} alt="Scene" />
        </div>
      )}
      <div className="message-container">{scene_text3}</div>
      {scene_image1 && (
        <div className="scene-image">
          <img src={scene_image3} alt="Scene" />
        </div>
      )}
      <div className="message-container">{scene_text4}</div>
      {scene_image1 && (
        <div className="scene-image">
          <img src={scene_image4} alt="Scene" />
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./Project1.css"; // Import the CSS file for Project1

const Project1 = ({ onGoBack }) => {
  const [activeTab, setActiveTab] = useState("tasks");
  const [showChatMenu, setShowChatMenu] = useState(false);
  const [chats, setChats] = useState([]);
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleChatMenu = () => {
    setShowChatMenu((prevState) => !prevState);
  };

  const addSampleChats = () => {
    setChats([
      { id: 1, message: "Sample message 1" },
      { id: 2, message: "Sample message 2" },
      { id: 3, message: "Sample message 3" },
    ]);
  };

  // Add a function to handle sending a chat message
  const sendChatMessage = (message) => {
    setInputText(message);
    sendQuery();
  };

  const sendQuery = () => {
    // Perform the API call and update the output state accordingly
    // Replace <my api token> with your actual API token

    fetch(
      "https://api-inference.huggingface.co/models/SEBIS/code_trans_t5_large_code_comment_generation_java_multitask_finetune",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify({ inputs: inputText }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        const summaryText = result[0]?.summary_text;
        setOutput(summaryText || "No response");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="project1-container">
      <div className="title-bar">
        <div className="hamburger-menu">
          <button>Account</button>
          <button>Settings</button>
          <button onClick={onGoBack}>Go back</button>
        </div>
      </div>
      <h2 className="homepage-heading">Project 1 Page</h2>
      <div className="task-bar">
        <button
          className={activeTab === "tasks" ? "active" : ""}
          onClick={() => handleTabClick("tasks")}
        >
          Tasks
        </button>
        <button
          className={activeTab === "files" ? "active" : ""}
          onClick={() => handleTabClick("files")}
        >
          Files
        </button>
        <button
          className={activeTab === "schedule" ? "active" : ""}
          onClick={() => handleTabClick("schedule")}
        >
          Schedule
        </button>
        <button
          className={activeTab === "chat" ? "active" : ""}
          onClick={() => {
            handleTabClick("chat");
            toggleChatMenu();
          }}
        >
          Chat
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "tasks" && <div>Tasks content</div>}
        {activeTab === "files" && <div>Files content</div>}
        {activeTab === "schedule" && <div>Schedule content</div>}
        {activeTab === "chat" && (
  <div className={`chat-menu ${showChatMenu ? "open" : ""}`}>
    {chats.length === 0 ? (
      <div className="no-chats-message">No chats available</div>
    ) : (
      <ul className="chat-list">
        {chats.map((chat) => (
          <li key={chat.id} className="chat-item">
            {chat.message}
          </li>
        ))}
      </ul>
    )}
   <div>
  <textarea
    id="inputText"
    placeholder="Enter your code"
    value={inputText}
    onChange={(e) => setInputText(e.target.value)}
  />
  <button onClick={sendQuery}>Send</button>
</div>

    <div id="output">{output}</div>
  </div>
)}

      </div>
    </div>
  );
};

export default Project1;

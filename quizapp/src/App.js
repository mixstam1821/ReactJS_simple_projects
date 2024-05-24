// add question basanda object yarat hamisi icinde olsun
// add question basanda yeni question object yarat quiz arrayine push ele
// add quiz eleyende quiz arrayini consola cixar

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import Home from "./pages/Home/Home";
import CreateQuiz from "./pages/CreateQuiz/CreateQuiz";
import Profile from "./pages/Profile/Profile";
import Favorites from "./pages/Favorites/Favorites";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Settings from "./pages/Settings/Settings";

function App() {
  const [openNav, setOpenNav] = useState(false);
  const [quizData, setQuizData] = useState([
    {
      id: 1,
      question: "What is the capital of Greece?",
      answers: [
        { id: 1, text: "Ioannina" },
        { id: 2, text: "Thessaloniki" },
        { id: 3, text: "Patras" },
        { id: 4, text: "Athens" },
      ],
      correctAnswerId: 4,
    },
    {
      id: 2,
      question: "Which color doesn't include in Rigas Feraios's flag?",
      answers: [
        { id: 1, text: "Red" },
        { id: 2, text: "Green" },
        { id: 3, text: "Black" },
        { id: 4, text: "White" },
      ],
      correctAnswerId: 2,
    },
    {
      id: 3,
      question: "Which country doesn't have border with Greece?",
      answers: [
        { id: 1, text: "Turkey" },
        { id: 2, text: "Bulgaria" },
        { id: 3, text: "Ukraine" },
        { id: 4, text: "FYROM" },
      ],
      correctAnswerId: 3,
    },
    {
      id: 4,
      question: "What is the currency of Greece?",
      answers: [
        { id: 1, text: "Lira" },
        { id: 2, text: "Manat" },
        { id: 3, text: "Ruble" },
        { id: 4, text: "Euro" },
      ],
      correctAnswerId: 4,
    },
    {
      id: 5,
      question:
        "What mountain range covers north and western parts of Greece?",
      answers: [
        { id: 1, text: "Pindos" },
        { id: 2, text: "Rodopi" },
        { id: 3, text: "Helmos" },
        { id: 4, text: "Caucasus" },
      ],
      correctAnswerId: 1,
    },
  ]);
  const [theme, setTheme] = useState("light");
  const [timerValue, setTimerValue] = useState(10);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, [theme]);

  const toggleNavHandler = () => {
    setOpenNav((prevState) => {
      return !prevState;
    });
  };

  const addNewQuestionHandler = (newQuestion) => {
    setQuizData((prevState) => {
      return [...prevState, newQuestion];
    });
  };

  const addQuizHandler = () => {
    console.log(quizData);
  };

  const changeThemeHandler = () => {
    setTheme((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });

    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  const changeTimerValueHandler = (e) => {
    setTimerValue(e.target.value);
  };

  return (
    <div className={theme}>
      <Header
        onToggleNav={toggleNavHandler}
        onChangeTheme={changeThemeHandler}
        theme={theme}
      />
      <Nav openNav={openNav} onToggleNav={toggleNavHandler} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home quizData={quizData} timerValue={timerValue} />}
          ></Route>
          <Route
            path="create-quiz"
            element={
              <CreateQuiz
                onAddNewQuestion={addNewQuestionHandler}
                onAddQuiz={addQuizHandler}
              />
            }
          ></Route>

          <Route
            path="settings"
            element={
              <Settings
                onChangeTimerValue={changeTimerValueHandler}
                timerValue={timerValue}
              />
            }
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

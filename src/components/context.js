import React, { Component } from 'react'

const QuestionContext = React.createContext();

export default class QuestionProvider extends Component {
  state = {
    name: "Akila",
    question: "",
    id: 0,
    speaker: "",
    time: "",
    speakingnow: "",
    questions: [],
    questiontodisplay: 0,
    Editquestion: false,
  };

  handleChange = (event) => {
    this.setState({
      question: event.target.value,
    });
  };

  handleSpeakerChange = (event) => {
    this.setState({
      speaker: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //var newID = 1;
    var newID = this.state.id + 1;
    const newQuestion = { title: this.state.question, id: newID };

    const updatedQuestions = [...this.state.questions, newQuestion];
    this.setState({
      questions: updatedQuestions,
      question: "",
      id: newID,
      Editquestion: false,
    });
    console.log(this.state);
  };

  handleSpeakerSubmit = (event) => {
    event.preventDefault();
    const currentspeaker = this.state.speaker;
    const elementsIndex = this.state.questiontodisplay - 1;
    let newArray = [...this.state.questions];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      speaker: currentspeaker,
    };
    this.setState({
      questions: newArray,
      speaker: "",
    });
  };

  Deleteitem = (id) => {
    const filteredItems = this.state.questions.filter((item) => item.id !== id);
    this.setState({
      questions: filteredItems,
    });
  };

  Edititem = (id) => {
    const filteredItems = this.state.questions.filter((item) => item.id !== id);
    const selectedItem = this.state.questions.find((item) => item.id === id);
    this.setState({
      questions: filteredItems,
      question: selectedItem.title,
      //id: id,
      Editquestion: true,
    });
    console.log(this.state);
  };

  showlog = () => {
    console.log(this.state.questions[this.id]);
  };

  handleUpdateQuestion = (id) => {
    const newqtd = this.state.questions.find((question) => question.id === id);
    this.setState({
      questiontodisplay: newqtd.id,
    });
    console.log(this.state);
  };

  handleResetQuestion = () => {
    //const newqtd = this.state.questions.find((question) => question.id === id);
    this.setState({
      questiontodisplay: 0,
    });
    console.log(this.state);
  };

  render() {
    return (
      <QuestionContext.Provider
        value={{
          ...this.state,
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange,
          handleUpdateQuestion: this.handleUpdateQuestion,
          handleResetQuestion: this.handleResetQuestion,
          showlog: this.showlog,
          handleSpeakerSubmit: this.handleSpeakerSubmit,
          handleSpeakerChange: this.handleSpeakerChange,
          Deleteitem: this.Deleteitem,
          Edititem: this.Edititem,
        }}
      >
        {this.props.children}
      </QuestionContext.Provider>
    );
  }
}

const QuestionConsumer = QuestionContext.Consumer;

export { QuestionProvider, QuestionConsumer, QuestionContext}
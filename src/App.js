import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      reviews:[
        {
          id:1,
          text:'This film sucked'
        },
        {
          id:2,
          text:'It was aight'
        },
        {
          id:3,
          text:'It was pretty good'
        },
        {
          id:4,
          text:'Twas amazing'
        }
      ],
      reviewInputValue:''
    };
  }

  handleReviewInputChange = (e) => {
    this.setState({reviewInputValue:e.target.value});
  }

  handleReviewAddClick = (e) => {
    e.preventDefault();
    var newReview = {
      id:Date.now(),
      text:this.state.reviewInputValue
    };
    var currentList = this.state.reviews;
    var newList = [...currentList,newReview];
    this.setState({
      reviews:newList,
      reviewInputValue:''
    });
  }

  removeReviewPost = (e) => {}



  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="nav">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </header>
        <div className="heading">FILM REVIEWS</div>
        <div className="reviews">
          {this.state.reviews.map(function(review){
            return(
              <div className="review"  key={review.id}>
                <div className="review-body">
                  <div className="review-text">
                      {review.text}
                  </div>
                </div>
              </div>
            )
          })}
          <div className="review new-review" >
              <div className="review-body">
                <form>
                  Add Review
                  <input type="text" id="review-input" onChange={this.handleReviewInputChange}/>
                  <input type="submit" id="review-add" value="Add" onClick={this.handleReviewAddClick}/>
                </form>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
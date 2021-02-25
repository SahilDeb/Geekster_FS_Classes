import React, {Component} from 'react';

export default class Contact extends Component {
  state = {
    name: "Sahil",
    posts: []
  }

  changeName = () => {
    console.clear();
    this.setState({ name: "Geekster" });
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
    .then(res => res.json())
    .then(articles => this.setState(prevState => {
      return ({
        posts: articles
      })
    }))
    .catch(err => console.error(err));
  }

  render() {
    console.log(this.state.posts);
    this.state.posts.map(post => console.log(post.id));
    return (
      <div>
        <p>Hello, My name is {this.state.name}</p>
        <button onClick={this.changeName}>Click to Change</button>
        <hr/>
        <div>
          {/* {
            this.state.posts.map(singlePost => {
              <div>
                <p>This is post number {singlePost.id}</p>
                <hr/>
                <p>This is post title {singlePost.title}</p>
              </div>
            })
          } */}
        </div>
        <hr/>
      </div>
    );
  }
}
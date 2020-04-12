 
import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'


class App extends Component {

   componentDidMount() {
      // fetch('http://jsonplaceholder.typicode.com/users')
      //    .then(res => res.json())
      //    .then((data) => {
      //       this.setState({ contacts: data })
      //    })
      //    .catch(console.log)
       fetch('http://api.khanaservice.ir/user', { 
          method: 'get', 
          mode: 'no-cors',
          headers: new Headers({
            'token': 'N8fLOnkat7l/k0mkT1k0A6umMoayZcwSNw/7Ul22TQdMOSLzWZRYsxgavBe1YzHvgksJybiseYIs7WatTNtN4g=='
          }), 
        })
      // fetch('http://localhost/nigje/index.php?order_id=10', { 
      //    method: 'get', 
      //    mode: 'no-cors',
      //    headers: new Headers({
      //      'token': 'N8fLOnkat7l/k0mkT1k0A6umMoayZcwSNw/7Ul22TQdMOSLzWZRYsxgavBe1YzHvgksJybiseYIs7WatTNtN4g=='
      //    }), 
      //  })
         .then(res => res.json())
         .then((data) => {
            this.setState({ contacts: data })
         })
         .catch(console.log)
   }
   render() {
      var a = 1 + 1;

      return (
         <div className='App '>
            <p className="txt1" >Hello word {a}</p>

         </div>


      )
   }

}



export default App

 




/* 
import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'


class App extends Component {
   constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  





   componentDidMount() {
      // fetch('http://jsonplaceholder.typicode.com/users')
      //    .then(res => res.json())
      //    .then((data) => {
      //       this.setState({ contacts: data })
      //    })
      //    .catch(console.log)
   

        const requestOptions = {
         method: 'POST',
         mode: 'no-cors',
         headers: new Headers({
            'Content-Type': 'application/json'
          }),
         body: JSON.stringify({method:"insertregister",param:{username:"testnew"}})
     };
 
   fetch('http://127.0.0.1/HamideRegister/index.php', requestOptions)





      // fetch('http://localhost/nigje/index.php?order_id=10', { 
      //    method: 'get', 
      //    mode: 'no-cors',
      //    headers: new Headers({
      //      'token': 'N8fLOnkat7l/k0mkT1k0A6umMoayZcwSNw/7Ul22TQdMOSLzWZRYsxgavBe1YzHvgksJybiseYIs7WatTNtN4g=='
      //    }), 
      //  })
         .then(res => res.json())
         .then((data) => {
            this.setState({ contacts: data })
         })
         .catch(console.log)
   }

   

   render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text"  name="username"  value={this.state.value} onChange={this.handleChange} />        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }


}



export default App */
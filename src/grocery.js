import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Button from "react-bootstrap/es/Button";
import Modal from "react-bootstrap/es/Modal";


class Grocery extends React.Component {
    value;
    constructor(){
        super();
        this.state = {
            groceries : [],
            grocerie_items: [],
            isLoaded: false

        }
        this.handleChange = this.handleChange.bind(this)
    }

    deleteRow(id, e) {
        fetch('https://stefanbode.nl/api/grocery/update.php?family_id=' + id)
            .then(results => {
                this.getAllTask();
            })
    }
    componentDidMount(){
        // Github fetch library : https://github.com/github/fetch
        // Call the API page
        fetch('https://stefanbode.nl/api/grocerie/read_by_family.php?family_id=1')
        .then((result) => {
          // Get the result
          // If we want text, call result.text()

          return result.json();
        },
        (error) =>{
            this.setState ({
                isLoaded: true,
                error
            });
            console.log('error');
        }
        ).then((jsonResult) => {
          // Do something with the result
         
          this.setState({
            isLoaded: true,
            groceries : jsonResult.records[0],
            
          });
          
          this.getGrocerylist(jsonResult.records[0].grocerie_item);
        })

  }

    saveTask(event) {
        event.preventDefault();
        this.setState({show: false});

        fetch('https://stefanbode.nl/api/task/create.php?task=' + this.state.value)
            .then(results => {
                this.getAllTask();
            })
    }


    getGrocerylist(groceries){
      
        const items = JSON.parse('{"grocery_item": {"item": [{"name": "New", "amount": "3"},{"name": "Second", "amount": "2"}]}}');   
       
        this.setState({
            grocerie_items: items,
        });
          console.log(items);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const { error, isLoaded, groceries , grocerie_items } = this.state;

        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            
            return (
           
          
                <div>
               <div>
                <h2>Groceries</h2>,  
             
                {groceries.family_id}
            </div>
            <div>
          
          
            </div>
            </div>

      );
    }
  }
}
export default Grocery;
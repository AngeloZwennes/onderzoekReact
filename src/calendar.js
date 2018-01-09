import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';



class Calendar extends React.Component {
    
    constructor(){
        super();
        this.state = {
            calendarItems : [],
            date : new Date(),
            viewableDate : new Date().toDateString()
        }
    }

    previousDay(e) {
        this.state.date.setDate(this.state.date.getDate() -1)
        this.setState({viewableDate: this.state.date.toDateString()})
    }

    nextDay(e) {
        this.state.date.setDate(this.state.date.getDate() +1)
        this.setState({viewableDate: this.state.date.toDateString()})
    }

    today(e) {
        this.state.date = new Date();   
        this.setState({viewableDate: this.state.date.toDateString()})
    }

    render() {
        return (
            <div>
                <div id="skipbar" className="row" >
                    <div className="col-sm-4" onClick={(e) => this.previousDay(e)}>
                    <span><h4><i className="fa fa-arrow-left"></i> Yesterday</h4></span>
                </div>
                <div className="col-sm-4 center" onClick={(e) => this.today(e)}>
                    <span><h4>Today</h4></span>
                </div>
                <div className="col-sm-4 right" onClick={(e) => this.nextDay(e)}>
                    <span><h4>Tommorow <i class="fa fa-arrow-right"></i></h4></span>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 center">
                <h1>Welcome</h1>
            </div>  
            </div>
            <div className="row">
                <div className="col-sm-12 center">
                <h3> {this.state.viewableDate}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                <button class="btn btn-success" data-toggle="modal" data-target="#create-calendar-item"><i class="fa fa-plus-circle"></i> Add item</button>
                </div>
            </div>
            <div id="create-calendar-item" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Create an Calendar Item</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            </div>
        );
    }
}
export default Calendar;
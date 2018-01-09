import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Button from "react-bootstrap/es/Button";
import Modal from "react-bootstrap/es/Modal";

class Photo extends React.Component {
    constructor(){
        super();
        this.state = {
            photos : [],
        }
        this.getAllPhoto();
    }

    getAllPhoto(){
        fetch('https://stefanbode.nl/api/photo/read.php')
            .then(results => {
                return results.json();
            }).then(data => {
            if(data.records) {
                let photos = data.records.map((photo) => {
                    return (
                        <div className="col-lg-3 col-md-4 col-xs-6" key={photo.photo_id}>
                            <a href={photo.photo_url} className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src={photo.photo_url} alt="Photo" />
                            </a>
                        </div>
                    )
                });
                this.setState({photos: photos});
            } else {
                this.setState({photos: "No photo found"});
            }

        })
    }

    savePhoto(event) {
        event.preventDefault();
        this.setState({show: false});

        fetch('https://stefanbode.nl/api/photo/create.php?photo_url=' + this.state.value)
            .then(results => {
                this.getAllPhoto();
            })
    }

    handleChange(event) {
        //File name
    }

    render() {
        let close = () => this.setState({ show: false });

        return (
            <div>
                <h3 className="my-4 text-center text-lg-left">Picture</h3>
                <div className="row text-center text-lg-left">
                    <div>{this.state.photos}</div>
                </div>

                <Button onClick={() => this.setState({ show: true })}>
                    Add item
                </Button>

                <div className="static-modal">
                    <Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
                        <form onSubmit={this.saveTask}>
                            <Modal.Header>
                                <Modal.Title>Add photo</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>

                                <div className="modal-body">
                                    <input type="file" value={this.value} onChange={this.handleChange} className="form-control" />
                                </div>

                            </Modal.Body>

                            <Modal.Footer>
                                <Button onClick={close}>Close</Button>
                                <Button type="submit" bsStyle="primary" onClick={(e) => this.savePhoto(e)}>Save Task</Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </div>
            </div>
        );
    }
}
export default Photo;
import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';

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
                        <div className="col-lg-3 col-md-4 col-xs-6" key={photo.task_id}>
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

    render() {
        return (
            <div>
                <h3 className="my-4 text-center text-lg-left">Picture</h3>
                <div className="row text-center text-lg-left">
                    <div>{this.state.photos}</div>
                </div>
            </div>
        );
    }
}
export default Photo;
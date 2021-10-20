import React, {Component} from "react";
import {Media} from 'reactstrap'


class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    render(){

        const nhanVien = this.props.STAFFS.map((staffs) =>{
            return(
                <div key={staffs.id} className="col-6 mt-5">
                    <Media tag="li">
                        <h3>{staffs.name}</h3>
                    </Media>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    <Media liststaffs>
                            {nhanVien}
                    </Media>
                </div>
            </div>
        );
    }
}


export default List;
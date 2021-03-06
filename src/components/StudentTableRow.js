import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:8070/students/delete-student/' + this.props.obj._id)
            .then((res) => {
                alert("Student Deleted!")
            }).catch((error) => {
                console.log(error)
                alert(error)
            })
    }

    render() {
        return (
            <tr >
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.age}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.contact}</td>
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>

                    <Button size="sm" variant="danger" onClick={this.deleteStudent}>
                        Delete
                    </Button>
                </td>

            </tr >
        )
    }
}
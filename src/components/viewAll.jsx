import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";

class viewAll extends Component {
  state = {
    posts: []
  };

  deleteRow(id) {
    console.log(id);
    axios
      .delete(
        "http://localhost:8086/all/" + id
      )
      .then(response => {
        console.log(response.data);
        const url =
          "http://localhost:8086/all/";

        fetch(url, {
          method: "GET"
        })
          .then(response => response.json())
          .then(posts => {
            this.setState({ posts: posts });
          });
      })
      .catch(response => {
        console.log(response);
      });
  }

  componentDidMount() {
    const url =
      "http://localhost:8086/all/";

    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }
  render() {
    const columns = [
      {
        Header: "Username",
        accessor: "username"
      },
      {
        Header: "Password",
        accessor: "password"
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Actions",
        Cell: props => {
          return (
            <button
              className="btn btn-danger m-2"
              onClick={() => {
                this.deleteRow(props.original.id);
                console.log("props", props);
              }}
            >
              Delete
            </button>
          );
        },
        sortable: false,
        filterable: false,
        maxWidth: 100,
        minWidth: 100
      }
    ];
    return (
      <div>
        <ReactTable
          columns={columns}
          data={this.state.posts}
          defaultPageSize={5}
          noDataText={"Please wait ..."}
        />
      </div>
    );
  }
}

export default viewAll;

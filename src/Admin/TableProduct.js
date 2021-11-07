import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { addProduct } from "../store/actions/action";
import { MenuItem, InputLabel, Select } from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ProductTable(props) {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  // const getProductData = async () => {
  //   try {
  //     const data = await axios.get("/getProducts");
  //     console.log(data.data);
  //     setProduct(data.data);
  //     if(data.data.length===0){
  //       props.history.push("/");

  //     }else{
  //       setProduct(data.data);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const deleteProductData = async () => {
    try {
      const data = await axios.delete("/deleteProduct/:id");
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    deleteProductData();
    if (props.tableData) {
      setProduct(props.tableData);
    }
  }, []);
  useEffect(() => {
    if (props.tableData) {
      setProduct(props.tableData);
    }
  }, [props.tableData]);

  useEffect(() => {
    const productCopy = [...product];
    if (
      props.filterOptions.columnName != "" &&
      props.filterOptions.value != ""
    ) {
      const filterData = productCopy.filter((productData) => {
        if (props.filterOptions.columnName === "category") {
          return productData.category === props.filterOptions.value;
        } else if (props.filterOptions.columnName === "status") {
          return productData.productStatus === props.filterOptions.value;
        }
      });
      setFilterProduct(filterData);
    }
  }, [props.filterOptions]);

  useEffect(() => {
    if (props.addedProduct) {
      const productCopy = [...product];
      productCopy.push(props.addedProduct);
      setProduct(productCopy);
    }
  }, [props.addedProduct]);

  const tableEventHandler = async (event, type, id) => {
    if (type === "deleteIcon") {
      await axios
        .delete(`/deleteProduct/${id}`)
        .then((success) => {
          const productcopy = [...product];

          const index = productcopy.findIndex((productData) => {
            return productData._id == id;
          });
          productcopy.splice(index, 1);
          setProduct(productcopy);
          console.log(success);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(id);
    } else if (type === "editIcon") {
      const getProductById = await axios
        .get(`/getProductById/${id}`)
        .then((succesData) => {
          console.log(succesData);
          props.parentFunction("edit", succesData.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getTableBody = (Pdata) => {
    const content = [];
    props.tableHeader.tableheader.map((thead) => {
      // content.push(<td>{Pdata[thead.key]}</td>);
      if (thead.type === "delete") {
        content.push(
          <td>
            <DeleteIcon
              style={{ color: "Highlight" }}
              onClick={(event) => {
                tableEventHandler(event, "deleteIcon", Pdata._id);
              }}
            />
          </td>
        );
      } else if (thead.type === "edit") {
        content.push(
          <td>
            <EditIcon
              onClick={(event) => {
                tableEventHandler(event, "editIcon", Pdata._id);
              }}
            />
          </td>
        );
      } else {
        content.push(<td>{Pdata[thead.key]}</td>);
      }
    });
    return <tr>{content}</tr>;
  };

  return (
    <div
      style={{ textAlign: "center", width: "800px", alignContent: "center" }}
    >
      <h1 style={{ marginLeft: "-500px", color: "blue", paddingTop: "40px" }}>
        Product Table
      </h1>

      <TableContainer style={{ marginLeft: "-200px" }} component={Paper}>
        <h1>hweeee</h1>

        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {props.tableHeader.tableheader.map((thead, theadindex) => {
                return <th>{thead.columnName}</th>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {filterProduct.length > 0
              ? filterProduct.map((Pdata) => {
                  return getTableBody(Pdata);
                })
              : product &&
                product.length > 0 &&
                product.map((Pdata) => {
                  return getTableBody(Pdata);
                })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
const mapStateToProps = (reduxstate) => {
  return {
    isAuthenticated: reduxstate.loggedIn,
    articles: reduxstate.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return (dispatch) => {
    return axios.get("/getProducts");
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductTable));

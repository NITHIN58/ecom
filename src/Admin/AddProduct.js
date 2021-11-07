import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { addProduct } from "../store/actions/action";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { green } from "@material-ui/core/colors";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Tableproduct from "./TableProduct";
import { FormLabel, Radio, RadioGroup } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function AddProduct(props) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [title, setTitle] = useState("");
  const [subheading, setSubheading] = useState("");
  const [brand, setBrand] = useState("");
  const [skuId, setSkuId] = useState("");
  const [href, setHref] = useState("");
  const [productCount, setProductCount] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [delivery, setDelivery] = useState("");
  const [productStatus, setProductStatus] = useState("");
  const [productType, setProductType] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const [addedProduct, setAddProduct] = useState({});
  const [cat, setCat] = useState("category");
  const [pro, setPro] = useState(10);
  const [editProduct, setEditProduct] = useState(false);
  const [product, setProduct] = useState([]);
  const [filterProduct,setFilterProduct]= useState([])
  const getProductData = async () => {
    try {
      const data = await axios.get("/getProducts");
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    getProductData();
  }, []);


  const handleChangeCat = (event) => {
    setCat(event.target.value);
  };


  const handlechangeSelect = (event) => {
    setCat(event.target.value);
  };

  const tableEventHandler = (type, data) => {
    //console.log("This to table child")
    data.title && setTitle(data.title);
    data.category && setCategory(data.category);
    data.skuId && setSkuId(data.skuId);
    if (data) {
      setEditProduct(true);
    }
  };

  const PRODUCT_TABLE_DATA = {
    tableheader: [
      {
        columnName: "Category",
        key: "category",
      },
      {
        columnName: "Product Name",
        key: "title",
      },
      {
        columnName: "Brand",
        key: "brands",
      },
      {
        columnName: "Price",
        key: "productPrice",
      },
      {
        columnName: "Delivery Date",
        key: "deliveryDate",
      },
      {
        columnName: "Action",
        key: "action",
      },
      {
        columnName: "Product Status",
        key: "productStatus",
      },
    ],
  };

  const PRODUCT_STATUS = [
    {
      key: "available",
      value: "Available",
    },
    {
      key: "outofstock",
      value: "OOS",
    },
    {
      key: "featuredproduct",
      value: "Featued Product",
    },
  ];

  const PRODUCT_TYPE = [
    {
      key: "premium",
      value: "Premium",
    },
    {
      key: "gold",
      value: "Gold",
    },
    {
      key: "silver",
      value: "Silver",
    },
    {
      key: "general",
      value: "General",
    },
  ];

  const CATEGORY_LIST = [
    {
      key: "appliances",
      value: "Appliances",
    },
    {
      key: "electronics",
      value: "Electronics",
    },
    {
      key: "kitchen",
      value: "Kitchen",
    },
  ];

  const BRAND_LIST = [
    {
      category: "appliances",
      options: [
        {
          key: "samsung",
          value: "Samsung",
        },
        {
          key: "whirlpool",
          value: "Whirlpool",
        },
        {
          key: "lg",
          value: "LG",
        },
      ],
    },
    {
      category: "electronics",
      options: [
        {
          key: "samsung",
          value: "Samsung",
        },
        {
          key: "onida",
          value: "Onida",
        },
        {
          key: "sony",
          value: "Sony",
        },
      ],
    },
    {
      category: "kitchen",
      options: [
        {
          key: "butterfly",
          value: "Butterfly",
        },
        {
          key: "pegion",
          value: "Pegion",
        },
        {
          key: "preethi",
          value: "Preethi",
        },
      ],
    },
  ];

  const getBrand = () => {
    const content = [];
    BRAND_LIST.map((brand, index) => {
      if (brand.category === category) {
        brand.options.map((opt) => {
          content.push(<MenuItem value={opt.key}>{opt.value}</MenuItem>);
        });
      }
    });
    return content;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const products = {
  //     title: title,
  //     subheading: subheading,
  //     category: category,
  //     brand: brand,
  //     skuId: skuId,
  //     href: href,
  //     deliveryDate: selectedDate,
  //     productCount: productCount,
  //     productPrice: productPrice,
  //     delivery: delivery,
  //     productStatus: productStatus,
  //     productType: productType,
  //     description: description,
  //     imgUrl: imgUrl,
  //     type: "product",
  //   };

  //   if (editProduct) {
  //     axios
  //       .post("/admin/updateProduct", { data: products, id: "" })
  //       .then((recieveData) => {
  //         alert("success");
  //         const insertedRow = JSON.parse(recieveData.config.data);
  //         insertedRow._id = recieveData.data.insertedId;
  //         console.log(insertedRow);
  //         setAddProduct(insertedRow);
  //         //setShowAlertBox(true);
  //       })
  //       .catch((error) => {
  //         alert("error");
  //       });
  //   } else {
  //     axios
  //       .post("/admin/addProduct", products)
  //       .then((recieveData) => {
  //         alert("success");
  //         const insertedRow = JSON.parse(recieveData.config.data);
  //         insertedRow._id = recieveData.data.insertedId;
  //         console.log(insertedRow);
  //         setAddProduct(insertedRow);
  //         //setShowAlertBox(true);
  //       })
  //       .catch((error) => {
  //         alert("error");
  //       });
  //   }
  // };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    //props.addProductProps()
    dispatch(addProduct({title: title,
      subheading: subheading,
      category: category,
      subCategory: category,
      brand: brand,
      skuId: skuId,
      href: href,
      deliveryDate: selectedDate,
      productCount: productCount,
      productPrice: productPrice,
      delivery: delivery,
      productStatus: productStatus,
      productType: productType,
      description: description,
      imgUrl: imgUrl,
      type: "product"}));
      
    if (editProduct) {
      axios
        .post("/admin/editProduct", { data: props.addProductData, id: "" })
        .then((recieveData) => {
          alert("success");
        })
        .catch((error) => {
          alert("error");
        });
    } else {
      axios
        .post("/admin/addProduct", props.addProductData)
        .then((recieveData) => {
          alert("success");
          const insertedRow= JSON.parse(recieveData.config.data);
          insertedRow._id = recieveData.data.insertedId;
          setAddProduct(insertedRow);
          console.log(insertedRow);
        })
        .catch((error) => {
          alert("error");
        });
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddCircleOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New Product
        </Typography>
        <form method="POST" className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="title"
                variant="outlined"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                fullWidth
                id="title"
                label="Product Title"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                value={subheading}
                onChange={(e) => {
                  setSubheading(e.target.value);
                }}
                fullWidth
                id="subheading"
                label="Sub-Heading"
                name="subheading"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label1">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label1"
                  id="productStatus"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  {CATEGORY_LIST.map((category, index) => {
                    return (
                      <MenuItem value={category.key}>{category.value}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label1">Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label1"
                  id="productStatus"
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                  disabled={category === ""}
                >
                  {getBrand()}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                value={skuId}
                onChange={(e) => {
                  setSkuId(e.target.value);
                }}
                fullWidth
                name="skuId"
                label="SKU ID"
                id="skuId"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                value={href}
                onChange={(e) => {
                  setHref(e.target.value);
                }}
                fullWidth
                id="href"
                label="Href"
                name="href"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={productPrice}
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
                fullWidth
                type="number"
                name="productPrice"
                label="Product Price"
                id="productPrice"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={productCount}
                onChange={(e) => {
                  setProductCount(e.target.value);
                }}
                fullWidth
                type="number"
                name="productCount"
                label="Product Count"
                id="productCount"
              />
            </Grid>

            <TextField
              id="date"
              label="date of birth"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    label="Yes"
                    value="freeDelivery"
                    color="primary"
                    onChange={(e) => {
                      setDelivery(e.target.value);
                    }}
                  />
                }
                label="Free Delivery"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="noFreeDelivery"
                    color="primary"
                    onChange={(e) => {
                      setDelivery(e.target.value);
                    }}
                  />
                }
                label="No Free Delivery"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label1">
                  Product Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label1"
                  id="productStatus"
                  disabled={editProduct}
                  onChange={(e) => {
                    setProductStatus(e.target.value);
                  }}
                >
                  {PRODUCT_STATUS.map((productstatus, index) => {
                    return (
                      <MenuItem value={productstatus.key}>
                        {productstatus.value}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label2">
                  Product Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label2"
                  id="productType"
                  onChange={(e) => {
                    setProductType(e.target.value);
                  }}
                >
                  {PRODUCT_TYPE.map((producttype, index) => {
                    return (
                      <MenuItem value={producttype.key}>
                        {producttype.value}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
              <label>Description</label>
              {"  "}
              <TextareaAutosize
                aria-label="Enter Description"
                minRows={3}
                placeholder="Enter Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <label>Image URL</label>
              {"  "}
              <TextareaAutosize
                aria-label="Enter Description"
                minRows={3}
                placeholder="Enter Image Url"
                value={imgUrl}
                onChange={(e) => {
                  setImgUrl(e.target.value);
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Confirmed Details"
                required
              />
            </Grid>
          </Grid>
          <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={
              !title ||
              !subheading ||
              !brand ||
              !skuId ||
              !href ||
              !productCount ||
              !productPrice
            }
            className={classes.submit}
          >
            {editProduct ? "UpdateProduct" : "Save Product"}
          </ColorButton>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/admin">BACK</Link>
            </Grid>
          </Grid>
        </form>
      </div>
{/* table */}
      <Tableproduct
        addedProduct={addedProduct}
        filterOptions={{
          columnName: cat,
          value: cat === "category" ? category : productStatus,
        }}
        tableHeader={PRODUCT_TABLE_DATA}
        tableData={product}
     
      
      />


      <hr/>
      <hr/>
      
      <Box mt={5}></Box>
      {/* Radio and select */}
      <FormControl component="fieldset">
        <FormLabel component="legend">Choose</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={cat}
          onChange={handleChangeCat}
        >
          <FormControlLabel
            value="category"
            control={<Radio />}
            label="Category"
          />
          <FormControlLabel
            value="status"
            control={<Radio />}
            label="Product status"
          />
        </RadioGroup>
      </FormControl>
      {cat === "category" ? (
        <FormControl>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label1"
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {CATEGORY_LIST.map((category, index) => {
              return <MenuItem value={category.key}>{category.value}</MenuItem>;
            })}
          </Select>
        </FormControl>
      ) : (
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label1">Product Status</InputLabel>
          <Select
            labelId="demo-simple-select-label1"
            id="productStatus"
            onChange={(e) => {
              setProductStatus(e.target.value);
            }}
          >
            {PRODUCT_STATUS.map((productstatus, index) => {
              return (
                <MenuItem value={productstatus.key}>
                  {productstatus.value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    addProductData: state.addProductData
  
  };

}
const mapDispatchToProps=(dispatch)=>{
  return {
    addproductProp: (payload)=>{
      dispatch(addProduct(payload))
    }
  }
}
export default connect(mapStateToProps, null)(withRouter(AddProduct));
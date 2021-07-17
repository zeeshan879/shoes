import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import logo from "./../../../img/logo/logo.PNG";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./adminlogin.module.css";
import { Form, FormGroup } from "react-bootstrap";
import companyName from "./logo.png";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import { ShoeContext } from "../../../context/filter.context";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  cardroot: {
    minWidth: "100%",
    backgroundColor: "rgb(17 28 39 / 50%)",
    boxShadow: "2px 2px 2px 2px grey",
    padding: "20px 10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: "150px",
    width: "300px",
    display: "inline-block",
    // paddingTop: '56.25%', // 16:9
  },
}));

const AdminLogin = () => {
  const contextType = useContext(ShoeContext);
  const classes = useStyles();
  const [form, setForm] = React.useState({});
  const [redirect, setRedirect] = React.useState(false);

  const LoginAuthenticate = async () => {
    console.log("in login authenticate");
    if (form.email && form.password) {
      try {
        let res = await axios.post("/admin/login", {
          email: form.email,
          password: form.password,
        });
        await localStorage.setItem("token", JSON.stringify(res.data.token));
        contextType.handletoken1(res.data.token);

        // toast("Logged in!", {
        //   position: toast.POSITION.TOP_CENTER,
        //   autoClose: 1500,
        // });
        alert("Logged in");
        window.location.href = "/admindashboard";
      } catch (error) {
        console.log(error);
        alert("login fail");
      }
    } else {
      alert("Enter email and pass");
    }
  };

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fleldVal = event.target.value;
    console.log(fieldName, fleldVal);
    setForm({ ...form, [fieldName]: fleldVal });
    console.log(form);
  };

  if (redirect) {
    return <Redirect to="/admindashboard" />;
  }
  return (
    <div className={classes.root}>
      <Grid
        container
        xs={12}
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid
          item
          container
          xl={6}
          lg={6}
          md={6}
          sm={8}
          xs={10}
          style={{
            backgroundColor: "aliceblue",
            height: "auto",
            width: "auto",
          }}
        >
          <Card className={classes.cardroot}>
            <CardContent>
              <CardMedia
                className={classes.media}
                image={companyName}
                title="Logo"
              />
              <Typography
                className={styles.adminloginText}
                color="textSecondary"
                gutterBottom
              >
                Sign into your account
              </Typography>
              <Form className={styles.form}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className={styles.formLabel}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    className={styles.formFields}
                    name="email"
                    type="email"
                    placeholder="Enter email"
                  />
                  {/* <Form.Text className="text-muted">
                                  We'll never share your email with anyone else.
                                </Form.Text> */}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className={styles.formLabel}>Password</Form.Label>
                  <Form.Control
                    className={styles.formFields}
                    onChange={(e) => handleChange(e)}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                              </Form.Group> */}
                <Button
                  onClick={() => {
                    LoginAuthenticate();
                  }}
                  className={styles.formBtn}
                  variant="primary"
                >
                  Submit
                </Button>
              </Form>
            </CardContent>
            {/* <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminLogin;

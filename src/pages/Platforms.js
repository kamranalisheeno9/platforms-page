import React from 'react'
import Header from "../components/Header";
import styles from "assets/jss/pages/landingPage.js";
import { makeStyles } from "@material-ui/styles";
import { Container, Grid } from "@material-ui/core";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Bg from '../assets/img/Background.png'
import chart from '../assets/img/chart.png'
import dummy from '../assets/img/dummy.png'
import { GoPrimitiveDot } from 'react-icons/go';
import './platform.css'
const useStyles = makeStyles(styles);
export default function PlatformPage(props) {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className="main-img-container">
        <img className="bg-img" src={Bg} alt="" />
        <div className="grammerly-background">
          <img width="80px" src="https://www.grammarly.com/press/media-resources/docs/icon-grammarly.png" />
        </div>
        <div className="grammarly-text">
          <h1>  Grammarly</h1>
        </div>
      </div>
      <Container className="prada-container">
        <Grid container
          justifyContent="center"
          spacing={2}>
          <Grid item xs={2}>
            <h6 className="prada-rank" >
              Prada Rank
            </h6>
            <h1 className="rank-number">12
              <span>/38504</span>
            </h1>
          </Grid>
          <Grid item xs={4}>
            <h6 className="prada-chart">
              Prada Radar Chart
            </h6>
          </Grid>
          <Grid item xs={3}>
            <img width="180px" style={{ float: "right" }} src={chart} alt="" />
          </Grid>

        </Grid>
      </Container>
      <div className="prada-tabs">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList className="tabs-container" onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Overvier" value="2" />
                <Tab label="Platform" value="1" />
                <Tab label="Researchers" value="3" />
                <Tab label="Algorithm" value="4" />
                <Tab label="Data" value="5" />
                <Tab label="Application" value="6" />
              </TabList>
            </Box>
            <TabPanel value="2"></TabPanel>
            <TabPanel className="platform-container" value="1">
              <Container className="platform-contaniers">
                <h6>Short_Description</h6>
                <hr className="hr-line" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </Container>

              <Container className="platform-contaniers">
                <h6>Industry</h6>
                <hr className="hr-line" />
                <div className="industry-container">
                  <Grid container
                    justifyContent="space-around"
                    spacing={2}>
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "black", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      Mobile
                    </Grid>
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "orange", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      Education
                    </Grid>
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "black", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      SaaS
                    </Grid>

                  </Grid>
                </div>
                <div className="industry-container">
                  <Grid container
                    justifyContent="space-around"
                    spacing={2}>
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "blue", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      Machine Learning
                    </Grid>
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "orange", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      Business Productivity
                    </Grid>
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "blue", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      Artificial Intelligence
                    </Grid>

                  </Grid>
                </div>
                <div className="industry-container">
                  <Grid container
                    justifyContent="space-around"
                    spacing={2}

                  >
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "black", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      Languages Learning
                    </Grid>
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "orange", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      Blogging Platforms
                    </Grid>
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "black", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      Apps
                    </Grid>

                  </Grid>
                </div>
                <div className="industry-container">
                  <Grid container
                    justifyContent="space-around"
                    spacing={2}>
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "black", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      Software
                    </Grid>
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "blue", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      Assistive Technology
                    </Grid>
                    <Grid className="capsule-skill" item xs={2}>
                      <span style={{ width: "20px", color: "orange", paddingRight: "20px" }}><GoPrimitiveDot /></span>
                      Edtech
                    </Grid>

                  </Grid>
                </div>
              </Container>

              <Container className="platform-contaniers">
                <h6>Specialities</h6>
                <hr className="hr-line" />
                <div className="industry-container">
                  <Grid container
                    justifyContent="flex-start"
                    spacing={2}>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>Python<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Languages </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>TensorFlow<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Frameworks </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>TypeScript<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Languages </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>Node.js<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Frameworks </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>Scala<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Languages </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>Spark<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Frameworks </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>Swift<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Languages </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>React<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Libraries </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>Scala<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Libraries </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>Redux<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Libraries </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>AWS RDS<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Databases </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>MobX<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Libraries </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>RxJava2<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Libraries </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>Lottie<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Libraries </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>Mockito<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Frameworks </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>UI Automator<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Libraries </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>Open NLP<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Libraries </div>
                      </p>
                     </p>
                    </Grid>
                    <Grid  item xs={3}>
                     <p style={{display:"flex"}}>
                      <span style={{ width: "20px", color: "black", paddingRight: "10px" }}><img src={dummy} width="28px" /></span>
                     <p style={{fontSize:"15px"}}>Espresso<br />
                      <div style={{color:"gainsboro",textTransform:"uppercase",fontSize:"11px"}}> Frameworks </div>
                      </p>
                     </p>
                    </Grid>
                    
                    
                  </Grid>
                </div>
              </Container>

              <Container className="platform-contaniers full-description">
                <h6>Full_Description</h6>
                <hr className="hr-line" />
              </Container>

            </TabPanel>
            <TabPanel value="3"></TabPanel>
            <TabPanel value="4"></TabPanel>
            <TabPanel value="5"></TabPanel>
            <TabPanel value="6"></TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}

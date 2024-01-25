import { useState } from "react";
import githubLogo from "../img/github-mark.png";
import web from "../img/web.png";
import list from "../json/projectlist.json";
// import logos from "../json/logos.json";
import styles from "../css/projects.module.css";
import "../css/styles.css";


function Projects() {
    const [currentTab, setTab] = useState(0);
    // const mainlink = "https://letsummer.github.io/public/";
      
    function handlingTab(index){
        setTab(index);
    }

    function onMouseover(){
        // console.log(`over!`);
    }

    function onMouseleave(){
        // console.log(`leave!`);
    }


    return (
        <div className={styles.contents}>
            <div className={styles.projects}>
                {list.map((item,index) => (
                    <div key={index} className={currentTab === index? `submenu focused`: 'submenu'}
                        onClick={() => handlingTab(index)}>
                        <div className={styles.description} key={index} 
                            onMouseOver={onMouseover} onMouseLeave={onMouseleave}>
                                <p>{item.thumbnail}</p>
                                <p>{item.title}</p>
                                <p>{item.leadtime}</p>
                                <p className={styles.timeDetail}>{item.timeDetail}</p>
                                <span>{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.details}>
                <a href={list[currentTab].link.github} target="_blank"><img className="icon" src={githubLogo} alt={list[currentTab].link.github} /></a>
                <a href={list[currentTab].link.demo} target="_blank"><img className="icon" src={web} alt="" /></a>
                <br/>
                <div className={styles.stackList}>
                    기술스택: {list[currentTab].techstack.map((item)=>(
                        <div>{item}</div>
                    ))}
                </div>
                <br/>
                기능 <div className={styles.functions}>
                    {list[currentTab].detail.map((item)=>(
                        <div className={styles.function}>
                            <p>{item.function}</p>
                            <img className={styles.previewImg} src={item.preview} alt={item.preview} />
                            {/* {console.log(mainlink+item.preview)} */}
                        </div>
                    ))}
                </div>
            </div>
            {/* <p></p> */}
        </div>
    );
  };


export default Projects;
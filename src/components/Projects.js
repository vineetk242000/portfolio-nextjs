import { Container, Typography, Button } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/LinkRounded';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styles from '../../styles/Projects.module.css';
import { projects } from '../data/projects';

const Projects = () => {
    const router = useRouter()

    return (
        <Container maxWidth="lg" className={styles.parent_container}>
            <Typography variant="h4" align="center">Projects</Typography>
            <div className={styles.projects_section}>
                {projects.map(project=>(
                    <div className={styles.card} key={project.key}>
                    <p className={styles.card_title}>{project.title}</p>
                    <div className={styles.card_image_container}>
                        <img src={project.image} alt="Insta" className={styles.card_image} />
                    </div>
                    <div className={styles.card_description_container}>
                        <p className={styles.card_description}>{project.description}</p>
                        <div className={styles.action_buttons_container}>
                            <Button 
                                variant="outlined" color="secondary" className={styles.button} style={{ marginBottom: "5px",fontWeight:"500" }} 
                                  onClick={()=>router.push(project.github_link)}>
                                <GitHubIcon style={{ marginRight: "5px" }} />
                                GitHub
                            </Button>
                            <Button 
                                variant="contained" disableElevation color="primary" className={styles.button} style={{ marginTop: "5px",fontWeight:"500"  }}
                                onClick={()=>router.push(project.project_link)}>
                                <LinkIcon style={{ marginRight: "5px" }} />
                                Live Preview
                            </Button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </Container>
    )
}

export default Projects

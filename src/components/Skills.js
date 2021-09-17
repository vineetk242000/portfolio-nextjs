import { Container, Typography } from '@material-ui/core';
import React from 'react';
import styles from '../../styles/Skills.module.css';
import { skills } from '../data/skills';

const Skills = () => {
    return (
        <div style={{ backgroundColor: "#F9F9F9" }}>
            <Container maxWidth="lg" className={styles.parent_container}>
                <Typography variant="h4" align="center">Skills</Typography>
                <div className={styles.skills_section}>
                    {skills.map(skill=>(
                        <div className={styles.skill_box} key={skill.key}>
                        <img src={skill.icon} alt="icon" className={styles.icon} sizes="small" />
                        <p className={styles.icon_text}>{skill.title}</p>
                    </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Skills

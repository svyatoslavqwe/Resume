import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Link,
} from "@mui/material";

function Projects() {
  const projects = [
    {
      title: "Lamoda",
      description:
        "Реализация интернет-магазина с возможностью фильтрации и сортировки продуктов",
      technologies: "React, CSS",
      githubLink: "https://github.com/svyatoslavqwe/Lamoda",
    },
    {
      title: "Notion",
      description:
        "Реализация многопользовательского приложения для ведения заметок",
      technologies: "React, Vite, Tailwind CSS, Material UI, API",
      githubLink: "https://github.com/svyatoslavqwe/Notion-redone",
    },
  ];

  return (
    <section>
      <Typography variant="h4" align="center">
        Проекты
      </Typography>
      {projects.map((project, index) => (
        <Card key={index} sx={{ maxWidth: 800, margin: "1rem 0" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Технологии: {project.technologies}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link href={project.githubLink}>GitHub</Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </section>
  );
}

export default Projects;

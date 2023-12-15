import React from "react";
import { Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

function PersonalInfo() {
  return (
    <section>
      <Typography variant="h4">Лазовский Святослав Вячеславович</Typography>
      <Typography paragraph variant="h6">
        <strong>
          Занимаюсь фрилансом и выполняю различные проекты на удалённой основе
        </strong>
      </Typography>
      <Typography paragraph>
        <strong>Образование:</strong> с 2011 года по 2022 год я учился в
        Белорусской государственной гимназии №4, а в настоящее время я обучаюсь
        на Механико-Математическом факультете по специальности "Программное
        обеспечение мобильных устройств"
      </Typography>
      <Typography paragraph>
        В основном я веду разработку интернет-магазинов, многопользовательских
        приложений и других веб-проектов. Я обладаю навыками в работе с
        фреймворками и библиотеками, такими как React, Material UI, Tailwind
        CSS, Vite и другими.
      </Typography>
      <Typography paragraph>
        <strong>Любимые хобби</strong>: чтение технической литературы,
        разработка персональных проектов
      </Typography>
      <Typography paragraph>
        <strong>Уровень владения английским языком</strong>: B1
      </Typography>
      <Typography paragraph>
        <strong>Изученные технологии:</strong> React, HTML, CSS, SQL,
        JavaScript, C++
      </Typography>
      <Typography paragraph>
        Помимо разработки, я также обладаю хорошими коммуникативными навыками и
        способностью работать в команде
      </Typography>
      <Typography paragraph>
        Я всегда открыт для новых вызовов и готов учиться и развиваться в
        области программирования. Готов рассмотреть интересные проекты и
        возможности для сотрудничества. Свяжитесь со мной, чтобы обсудить
        дальнейшие детали.
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <EmailIcon />
          <span style={{ marginLeft: "10px" }}>
            <a href="mailto:svyatoslav@gmail.com">svyatoslav@gmail.com</a>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TelegramIcon />
          <span style={{ marginLeft: "10px" }}>
            <a href="https://t.me/svyatqwe">@svyatqwe</a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;

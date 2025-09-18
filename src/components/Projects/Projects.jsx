import React from "react";
import ProjectCard from "./ProjectCard";
import calc from "../../assets/calc.png"
import tictac from "../../assets/tictac.png"
import todo from "../../assets/todo.png"
import Ecommerce from "../../assets/ecommerce.png"
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="WearIt - An Ecommerce Website"
          main="WearIt enables product browsing, search, add to cart, checkout, order management, and a fully responsive design for seamless
                shopping"
            link="https://enchanting-biscochitos-8f5289.netlify.app/"
            source = "https://github.com/vani-max/EcommerceWebsite"
            image={Ecommerce}

        />
        <ProjectCard
          title="TO-DO APP"
          main="A task management application built with HTML, CSS, and JavaScript to add, track, and organize daily tasks efficiently."

          link="https://vani-max.github.io/to-do-list/"
          source="https://github.com/vani-max/to-do-list"
          image={todo}
        />
        <ProjectCard
          title="TIC-TAC-TOE GAME"
          main="Enjoy the timeless game of Tic-Tac-Toe brought to life using HTML, CSS, and JavaScript. Play against friends or family in this simple yet engaging web-based rendition."
          link="https://vani-max.github.io/game/"
          source="https://github.com/vani-max/game"
          image={tictac}
        />
        <ProjectCard
          title="Calculator"
          main="A simple and interactive calculator built using HTML, CSS, and JavaScript for performing basic arithmetic operations."
          link=" https://vani-max.github.io/calculator/"
          source="https://github.com/vani-max/calculator"
          image={calc}
        />
      </div>
    </div>
  );
};

export default Projects;
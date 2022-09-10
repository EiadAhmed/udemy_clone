import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import CoursesContainer from "../components/HomePage/CoursesContainer";
import Categories from "../components/HomePage/Categories";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { dataContext } from "../App";
import clock from "../images/clock.jpg";

function HomePage() {
  const { data } = useContext(dataContext);
  let courses = data ? data.courses : [];
  const [searchParams, setSearchParams] = useSearchParams();
  let searchText = searchParams.get("search") || "";
  const coursesFiltered = courses.filter((course) =>
    course.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const title = "Expand your career opportunities with Python";
  const description =
    "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.";
  return (
    <div className="home-page">
      <NavBar />
      <main>
        <header className="billboard">
          <div className="billboard">
            <div className="billboard-banner-image-container">
              <img src={clock} alt="Clock" width="100%" height="100%" />
            </div>
            <div className="billboard-content-box">
              <div>
                <article>
                  <h2>New to Udemy? Lucky you.</h2>
                  <p>
                    Courses start at E£169.99. Get your new-student offer before
                    it expires.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </header>
        <section className="headline">
          <article>
            <h2>A broad selection of courses</h2>
            <p>
              Choose from 10 online video courses with new additions published
              every month
            </p>
          </article>
        </section>
        <CoursesContainer
          courses={coursesFiltered}
          title={title}
          description={description}
        />
      </main>
      <Categories />
      <Footer />
    </div>
  );
}
export default HomePage;

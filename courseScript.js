let products = {
    data: [
      {
        courseName: "CST 8118",
        category: "Fall_2023",
        title: "Computer Essentials",
        des: "The essentials of computer software, hardware, and laptop management form the foundation for building further technical programming skills.",
        image: "./img/courseImg.jpeg",
      },
      {
        courseName: "CST 8116",
        category: "Fall_2023",
        title: "Introduction to Computer Programming",
        des: "Possessing the fundamentals of logic, problem-solving and programming language structure.",
        image: "./img/courseImg.jpeg",
      },
      {
        courseName: "CST 8125",
        category: "Fall_2023",
        title: "Introduction to Database",
        des: "Databases are used to store data and are a core component of many information technology systems.",
        image: "./img/courseImg.jpeg",
      },
      {
        courseName: "CST 2355",
        category: "Winter_2024",
        title: "Databases Systems",
        des: "Database systems can automate data processing tasks as well as tie into the security of information technology systems.",
        image: "./img/courseImg.jpeg",
      },
      {
        courseName: "CST 8285",
        category: "Winter_2024",
        title: "Web Programming",
        des: "The World Wide Web (WWW) has become an integrated part of everyday life. Students develop basic skills of web programming, website design and implementation.",
        image: "./img/courseImg.jpeg",
      },
      {
        courseName: "CST 8284",
        category: "Winter_2024",
        title: "Object Oriented Programming (OOP)",
        des: "Working in the field of information technology as a programmer requires a firm understanding of Object-Oriented Programming (OOP) concepts.",
        image: "./img/courseImg.jpeg",
      },
      {
        courseName: "CST 8102",
        category: "Winter_2024",
        title: "Operating System Fundamentals (GNU/Linux)",
        des: "Operating systems form the backbone of information technology systems coordinating the interaction between hardware and software.",
        image: "./img/courseImg.jpeg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("course-name");
    name.innerText = i.courseName.toUpperCase();
    container.appendChild(name);
    //title
    let title = document.createElement("h6");
    title.innerText = i.title;
    container.appendChild(title);
    //description
    let des = document.createElement("h7");
    des.innerText = i.des;
    container.appendChild(des);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".course-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
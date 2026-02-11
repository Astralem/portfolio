  /* Every Constants */
  

    const title = document.querySelector(".title"); 

    const optionsSelf = document.querySelector(".optionsSelf");
    const optionsAttained = document.querySelector(".optionsAttained");
    const optionsSkillTree = document.querySelector(".optionsSkillTree");

    const scrollPrompt = document.querySelector(".scrollPrompt");
    const arrow = document.querySelector(".arrow");

    const gradientbackground = document.querySelector(".gradientbackground");

  
  /* For the MAIN TITLE*/ 
  
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    if (scrollY > 250) {
      title.style.opacity = 1;
    } else {
      title.style.opacity = 0;
    }
  
    if (scrollY > 1000) {
      title.style.top = "40%";
      title.style.color = "#FFD700";
    } else {
      title.style.top = "50%";
      title.style.color = "#000000";
    }
  
  });
  
  /* For the option of THE SELF*/ 
  
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    if (scrollY > 1000) {
      optionsSelf.style.opacity = 0.6;
    } else {
      optionsSelf.style.opacity = 0;
    }
  
    if (scrollY > 1000) {
      optionsSelf.style.left = "30%";
    } else {
      optionsSelf.style.left = "10%";
    }
  });
  
  /* For the option of THE ATTAINED*/ 
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    if (scrollY > 1000) {
      optionsAttained.style.opacity = 0.6;
    } else {
      optionsAttained.style.opacity = 0;
    }
  
    if (scrollY > 1000) {
      optionsAttained.style.top = "80%";
    } else {
      optionsAttained.style.top = "100%";
    }
  });
  
  /* For the option of THE SKILL TREE*/
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    if (scrollY > 1000) {
      optionsSkillTree.style.opacity = 0.6;
    } else {
      optionsSkillTree.style.opacity = 0;
    }
  
    if (scrollY > 1000) {
      optionsSkillTree.style.left = "72%";
    } else {
      optionsSkillTree.style.left = "100%";
    }
  
  });
  
  /*For the ARROW IMAGE*/   
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    if (scrollY <= 250) {
      arrow.style.opacity = 1;
    } else {
      arrow.style.opacity = 0;
    }
  });
  
  /* For the SCROLL PROMPT*/ 
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    if (scrollY <= 250) {
      scrollPrompt.style.opacity = 0.6;
    } else {
      scrollPrompt.style.opacity = 0;
    }
  });
  
  /* For the GRADIENT BACKGROUND*/
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; 
  
    if (scrollY > 1000) {
      gradientbackground.style.opacity = 1;
    } else {
      gradientbackground.style.opacity = 0;
    }
  });
  
  /*To refresh the page when refreshing */ 
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
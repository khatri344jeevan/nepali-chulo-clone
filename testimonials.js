
    /* Initialize slide index */
    let TslideIndex = 0;

    /* Call the function to show slides automatically */
    TshowSlides();

    /* Function to display slides automatically */
    function TshowSlides() {
      let i;
      let Tslides = document.getElementsByClassName("TmySlides");
      let Tdots = document.getElementsByClassName("Tdot");
      for (i = 0; i < Tslides.length; i++) {
        Tslides[i].style.display = "none";
      }
      TslideIndex++;
      if (TslideIndex > Tslides.length) {
        TslideIndex = 1;
      }
      for (i = 0; i < Tdots.length; i++) {
        Tdots[i].className = Tdots[i].className.replace(" Tactive", "");
      }
      Tslides[TslideIndex - 1].style.display = "block";
      Tdots[TslideIndex - 1].className += " Tactive";
      setTimeout(TshowSlides, 5000); // Change image every 5 seconds
    }

    /* Function to show next/previous slide */
    function TplusSlides(n) {
      TshowManualSlides((TslideIndex += n));
    }

    /* Function to show specific slide */
    function TcurrentSlide(n) {
      TshowManualSlides((TslideIndex = n));
    }

    /* Function to display the slide based on manual control */
    function TshowManualSlides(n) {
      let i;
      let Tslides = document.getElementsByClassName("TmySlides");
      let Tdots = document.getElementsByClassName("Tdot");
      if (n > Tslides.length) {
        TslideIndex = 1;
      }
      if (n < 1) {
        TslideIndex = Tslides.length;
      }
      for (i = 0; i < Tslides.length; i++) {
        Tslides[i].style.display = "none";
      }
      for (i = 0; i < Tdots.length; i++) {
        Tdots[i].className = Tdots[i].className.replace(" Tactive", "");
      }
      Tslides[TslideIndex - 1].style.display = "block";
      Tdots[TslideIndex - 1].className += " Tactive";
    }
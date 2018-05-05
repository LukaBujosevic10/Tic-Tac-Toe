$( document ).ready(function() {
  var polja = $(".polja");
  var odrediti = 1;
  var textj;
  var textd;
  var textt;
  var textc;
  var textp;
  var texts;
  var textsd;
  var texto;
  var textdd;
  $(".polja").on("click", function() {
    if ($(this).text() === "") {
      if (odrediti === 1) {
        $(this).text("x");
        odrediti++;
        provera();
      }else{
      $(this).text("o");
      odrediti = 1
      provera();
      }
    }
  })
  function provera() {
    textj = $(polja[0]).text();
    textd = $(polja[1]).text();
    textt = $(polja[2]).text();
    textc = $(polja[3]).text();
    textp = $(polja[4]).text();
    texts = $(polja[5]).text();
    textsd = $(polja[6]).text();
    texto = $(polja[7]).text();
    textdd = $(polja[8]).text();

    if (textj =="x") {
      if (textd == "x") {
        if (textt == "x") {
          $("#winer").text("X is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textj =="o") {
      if (textd == "o") {
        if (textt == "o") {
          $("#winer").text("O is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textc =="x") {
      if (textp == "x") {
        if (texts == "x") {
          $("#winer").text("X is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textc =="o") {
      if (textp == "o") {
        if (texts == "o") {
          $("#winer").text("O is winer");
          $(".polja").off("click");
        }

      }
    }
    if (textsd =="x") {
      if (texto == "x") {
        if (textdd == "x") {
          $("#winer").text("X is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textsd =="o") {
      if (texto == "o") {
        if (textdd == "o") {
          $("#winer").text("O is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textj == "x") {
      if (textc == "x") {
        if (textsd == "x") {
          $("#winer").text("X is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textd == "x") {
      if (textp == "x") {
        if (texto == "x") {
          $("#winer").text("X is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textj == "o") {
      if (textc == "o") {
        if (textsd == "o") {
          $("#winer").text("O is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textd == "o") {
      if (textp == "o") {
        if (texto == "o") {
          $("#winer").text("O is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textt == "x") {
      if (texts == "x") {
        if (textdd == "x") {
          $("#winer").text("X is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textt == "o") {
      if (texts == "o") {
        if (textdd == "o") {
          $("#winer").text("O is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textj == "x") {
      if (textp == "x") {
        if (textdd == "x") {
          $("#winer").text("X is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textj == "o") {
      if (textp == "o") {
        if (textdd == "o") {
          $("#winer").text("O is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textt == "x") {
      if (textp == "x") {
        if (textsd == "x") {
          $("#winer").text("X is winer");
          $(".polja").off("click");
        }
      }
    }
    if (textt == "o") {
      if (textp == "o") {
        if (textsd == "o") {
          $("#winer").text("O is winer");
          $(".polja").off("click");
        }
      }
    }


  }
});

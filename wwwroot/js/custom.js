// next prev
var divs = $(".show-section fieldset");
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first

function next() {
  divs.eq(now).hide();
  now = now + 1 < divs.length ? now + 1 : 0;
  divs.eq(now).show(); // show next
  console.log(now);
}
$(".prev").on("click", function () {
  divs.eq(now).hide();
  now = now > 0 ? now - 1 : divs.length - 1;
  divs.eq(now).show(); // show previous
  console.log(now);

  $(".option").addClass("animate");
  $(".option").removeClass("animateReverse");
});

// quiz validation
var checkedradio = false;

function radiovalidate(stepnumber) {
  var checkradio = $("#step" + stepnumber + " input")
    .map(function () {
      if ($(this).is(":checked")) {
        return true;
      } else {
        return false;
      }
    })
    .get();

  checkedradio = checkradio.some(Boolean);
}

$(document).ready(function () {
  // check step1
  $("#step1btn").on("click", function () {
    radiovalidate(1);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(1);
    } else {
      $("#step1 .option").removeClass("animate");
      $("#step1 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(1);
    }
  });
  // check step2
  $("#step2btn").on("click", function () {
    radiovalidate(2);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(2);
    } else {
      $("#step2 .option").removeClass("animate");
      $("#step2 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(2);
    }
  });
  // check step3
  $("#step3btn").on("click", function () {
    radiovalidate(3);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(3);
    } else {
      $("#step3 .option").removeClass("animate");
      $("#step3 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(3);
    }
  });
  // check step4

  $("#step4btn").on("click", function () {
    radiovalidate(4);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(3);
    } else {
      $("#step4 .option").removeClass("animate");
      $("#step4 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(4);
    }
  });
  // check step5

  $("#step5btn").on("click", function () {
    radiovalidate(5);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(5);
    } else {
      $("#step5 .option").removeClass("animate");
      $("#step5 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(5);
    }
  });
  // check step6

  $("#step6btn").on("click", function () {
    radiovalidate(6);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(6);
    } else {
      $("#step6 .option").removeClass("animate");
      $("#step6 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(6);
    }
  });
  // check step7

  $("#step7btn").on("click", function () {
    radiovalidate(7);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(7);
    } else {
      $("#step7 .option").removeClass("animate");
      $("#step7 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(7);
    }
  });

  // check step8

  $("#step8btn").on("click", function () {
    radiovalidate(8);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(8);
    } else {
      $("#step8 .option").removeClass("animate");
      $("#step8 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(8);
    }
  });
  // check step9

  $("#step9btn").on("click", function () {
    radiovalidate(9);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(9);
    } else {
      $("#step9 .option").removeClass("animate");
      $("#step9 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(9);
    }
  });
  // check step9

  $("#step9btn").on("click", function () {
    radiovalidate(9);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(9);
    } else {
      $("#step9 .option").removeClass("animate");
      $("#step9 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(9);
    }
  });

  // check step10

  $("#step10btn").on("click", function () {
    radiovalidate(10);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(10);
    } else {
      $("#step10 .option").removeClass("animate");
      $("#step10 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(10);
    }
  });
  // check step11

  $("#step11btn").on("click", function () {
    radiovalidate(11);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(11);
    } else {
      $("#step11 .option").removeClass("animate");
      $("#step11 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(11);
    }
  });
  // check step12

  $("#step12btn").on("click", function () {
    radiovalidate(12);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(12);
    } else {
      $("#step12 .option").removeClass("animate");
      $("#step12 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(12);
    }
  });
  // check step13

  $("#step13btn").on("click", function () {
    radiovalidate(13);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(13);
    } else {
      $("#step13 .option").removeClass("animate");
      $("#step13 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(13);
    }
  });
  // check step14

  $("#step14btn").on("click", function () {
    radiovalidate(14);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(14);
    } else {
      $("#step14 .option").removeClass("animate");
      $("#step14 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(14);
    }
  });
  // check step15

  $("#step15btn").on("click", function () {
    radiovalidate(15);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(15);
    } else {
      $("#step15 .option").removeClass("animate");
      $("#step15 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(15);
    }
  });
   // check step16

   $("#step16btn").on("click", function () {
    radiovalidate(16);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(16);
    } else {
      $("#step16 .option").removeClass("animate");
      $("#step16 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(16);
    }
  });
   // check step17

   $("#step17btn").on("click", function () {
    radiovalidate(17);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
        )
      );

      radiovalidate(17);
    } else {
      $("#step17 .option").removeClass("animate");
      $("#step17 .option").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      countresult(17);
    }
  });
 // check step18

 $("#step18btn").on("click", function () {
  radiovalidate(18);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(18);
  } else {
    $("#step18 .option").removeClass("animate");
    $("#step18 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(18);
  }
});

 // check step19

 $("#step19btn").on("click", function () {
  radiovalidate(19);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(19);
  } else {
    $("#step19 .option").removeClass("animate");
    $("#step19 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(19);
  }
});
 // check step20

 $("#step20btn").on("click", function () {
  radiovalidate(20);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(20);
  } else {
    $("#step20 .option").removeClass("animate");
    $("#step20 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(20);
  }
});

 // check step21

 $("#step21btn").on("click", function () {
  radiovalidate(21);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(21);
  } else {
    $("#step21 .option").removeClass("animate");
    $("#step21 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(21);
  }
});
 // check step22

 $("#step22btn").on("click", function () {
  radiovalidate(22);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(22);
  } else {
    $("#step22 .option").removeClass("animate");
    $("#step22 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(22);
  }
});
 // check step23

 $("#step23btn").on("click", function () {
  radiovalidate(23);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(23);
  } else {
    $("#step23 .option").removeClass("animate");
    $("#step23 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(23);
  }
});
 // check step24

 $("#step24btn").on("click", function () {
  radiovalidate(24);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(24);
  } else {
    $("#step24 .option").removeClass("animate");
    $("#step24 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(24);
  }
});
 // check step25

 $("#step25btn").on("click", function () {
  radiovalidate(25);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(25);
  } else {
    $("#step25 .option").removeClass("animate");
    $("#step25 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(25);
  }
});
 // check step26

 $("#step26btn").on("click", function () {
  radiovalidate(26);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(26);
  } else {
    $("#step26 .option").removeClass("animate");
    $("#step26 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(26);
  }
});
 // check step27

 $("#step27btn").on("click", function () {
  radiovalidate(27);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(27);
  } else {
    $("#step27 .option").removeClass("animate");
    $("#step27 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(27);
  }
});
 // check step28

 $("#step28btn").on("click", function () {
  radiovalidate(28);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(28);
  } else {
    $("#step28 .option").removeClass("animate");
    $("#step28 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(28);
  }
});
 // check step29

 $("#step29btn").on("click", function () {
  radiovalidate(29);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(29);
  } else {
    $("#step29 .option").removeClass("animate");
    $("#step29 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(29);
  }
});
 // check step30

 $("#step30btn").on("click", function () {
  radiovalidate(30);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(30);
  } else {
    $("#step30 .option").removeClass("animate");
    $("#step30 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(30);
  }
});
 // check step31

 $("#step31btn").on("click", function () {
  radiovalidate(31);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(31);
  } else {
    $("#step31 .option").removeClass("animate");
    $("#step31 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(31);
  }
});
 // check step32

 $("#step32btn").on("click", function () {
  radiovalidate(32);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(32);
  } else {
    $("#step32 .option").removeClass("animate");
    $("#step32 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(32);
  }
});
 // check step33

 $("#step33btn").on("click", function () {
  radiovalidate(33);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(33);
  } else {
    $("#step33 .option").removeClass("animate");
    $("#step33 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(33);
  }
});
 // check step34

 $("#step34btn").on("click", function () {
  radiovalidate(34);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(34);
  } else {
    $("#step34 .option").removeClass("animate");
    $("#step34 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(34);
  }
});
 // check step35

 $("#step35btn").on("click", function () {
  radiovalidate(35);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(35);
  } else {
    $("#step35 .option").removeClass("animate");
    $("#step35 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(35);
  }
});
 // check step36

 $("#step36btn").on("click", function () {
  radiovalidate(36);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(36);
  } else {
    $("#step36 .option").removeClass("animate");
    $("#step36 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(36);
  }
});
 // check step37

 $("#step37btn").on("click", function () {
  radiovalidate(37);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(37);
  } else {
    $("#step37 .option").removeClass("animate");
    $("#step37 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(37);
  }
});
 // check step38

 $("#step38btn").on("click", function () {
  radiovalidate(38);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(38);
  } else {
    $("#step38 .option").removeClass("animate");
    $("#step38 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(38);
  }
});
 // check step39

 $("#step39btn").on("click", function () {
  radiovalidate(39);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(39);
  } else {
    $("#step39 .option").removeClass("animate");
    $("#step39 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(39);
  }
});
 // check step40

 $("#step40btn").on("click", function () {
  radiovalidate(40);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(40);
  } else {
    $("#step40 .option").removeClass("animate");
    $("#step40 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(40);
  }
});
 // check step41

 $("#step41btn").on("click", function () {
  radiovalidate(41);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(41);
  } else {
    $("#step41 .option").removeClass("animate");
    $("#step41 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(41);
  }
});
 // check step42

 $("#step42btn").on("click", function () {
  radiovalidate(42);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(42);
  } else {
    $("#step42 .option").removeClass("animate");
    $("#step42 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(42);
  }
});
 // check step43

 $("#step43btn").on("click", function () {
  radiovalidate(43);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(43);
  } else {
    $("#step43 .option").removeClass("animate");
    $("#step43 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(43);
  }
});
 // check step44

 $("#step44btn").on("click", function () {
  radiovalidate(44);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(44);
  } else {
    $("#step44 .option").removeClass("animate");
    $("#step44 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(44);
  }
});
 // check step45

 $("#step45btn").on("click", function () {
  radiovalidate(45);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(45);
  } else {
    $("#step45 .option").removeClass("animate");
    $("#step45 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(45);
  }
});

 // check step46

 $("#step46btn").on("click", function () {
  radiovalidate(46);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(46);
  } else {
    $("#step46 .option").removeClass("animate");
    $("#step46 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(46);
  }
});
 // check step47

 $("#step47btn").on("click", function () {
  radiovalidate(47);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(47);
  } else {
    $("#step47 .option").removeClass("animate");
    $("#step47 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(47);
  }
});
 // check step48

 $("#step48btn").on("click", function () {
  radiovalidate(48);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(48);
  } else {
    $("#step48 .option").removeClass("animate");
    $("#step48 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(48);
  }
});
 // check step49

 $("#step49btn").on("click", function () {
  radiovalidate(49);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(49);
  } else {
    $("#step49 .option").removeClass("animate");
    $("#step49 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(49);
  }
});
 // check step50

 $("#step50btn").on("click", function () {
  radiovalidate(50);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">من فضلك اختر اجابة </div>'
      )
    );

    radiovalidate(50);
  } else {
    $("#step50 .option").removeClass("animate");
    $("#step50 .option").addClass("animateReverse");
    setTimeout(function () {
      next();
    }, 900);
    countresult(50);
  }
});


// end 
});

window.onscroll = function () {
  scrollFunction1()
  scrollFunction2()
  scrollFunction3()
  scrollFunction4()
}

function scrollFunction1() {
  if (
    document.body.scrollTop > 1 ||
    document.documentElement.scrollTop > 1
  ) {
    document.getElementById("scroll").style.opacity = "0"

  } else {
    document.getElementById("scroll").style.opacity = "1"
  }
}

function scrollFunction2() {
  if (
    document.body.scrollTop > (window.innerHeight) * 0.5 ||
    document.documentElement.scrollTop > (window.innerHeight) * 0.5
  ) {
    document.getElementById("a2").classList = "a2"
    document.getElementById("a3").classList = "child3"
    document.getElementById("a4").classList = "child4"

  } else {
    document.getElementById("a2").classList = "child2"
  }
}


function scrollFunction3() {
  if (
    document.body.scrollTop > (window.innerHeight) * 1.5 ||
    document.documentElement.scrollTop > (window.innerHeight) * 1.5
  ) {
    document.getElementById("a3").classList = "a3"
    document.getElementById("a2").classList = "child2"
    document.getElementById("a4").classList = "child4"

  } else {
    document.getElementById("a3").classList = "child3"
  }
}

function scrollFunction4() {
  if (
    document.body.scrollTop > (window.innerHeight) * 2.5 ||
    document.documentElement.scrollTop > (window.innerHeight) * 2.5
  ) {
    document.getElementById("a4").classList = "a4"
    document.getElementById("a2").classList = "child2"
    document.getElementById("a3").classList = "child3"

  } else {
    document.getElementById("a4").classList = "child4"
  }
}
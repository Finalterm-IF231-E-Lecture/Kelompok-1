import $ from "jquery";

export function inputgenders() {
  if (document.getElementById("character-1").style.display === "none") {
    document.getElementById("genders").value = "girl";
  } else if (document.getElementById("character-2").style.display === "none") {
    document.getElementById("genders").value = "boy";
  }

  if (document.getElementById("jurusan").innerHTML === "Informatika") {
    document.getElementById("jurusans").innerHTML = "Informatika";
    document.getElementById("jurusanss").innerHTML = "Informatika";

    document.getElementById("namaMatkul-1").innerHTML = "Dasar-Dasar Pemrograman";
    document.getElementById("namaMatkul-2").innerHTML = "Matematika Diskret";
    document.getElementById("namaMatkul-3").innerHTML = "Sistem Digital";
  } else if (document.getElementById("jurusan").innerHTML === "Komputer") {
    document.getElementById("jurusans").innerHTML = "Teknik Komputer";
    document.getElementById("jurusanss").innerHTML = "Teknik Komputer";

    document.getElementById("namaMatkul-1").innerHTML = "Dasar-Dasar Pemrograman";
    document.getElementById("namaMatkul-2").innerHTML = "Matematika Diskret";
    document.getElementById("namaMatkul-3").innerHTML = "Aljabar Linear";
  } else if (document.getElementById("jurusan").innerHTML === "Elektro") {
    document.getElementById("jurusans").innerHTML = "Teknik Elektro";
    document.getElementById("jurusanss").innerHTML = "Teknik Elektro";

    document.getElementById("namaMatkul-1").innerHTML = "Aljabar Linear";
    document.getElementById("namaMatkul-2").innerHTML = "Matematika Diskrit";
    document.getElementById("namaMatkul-3").innerHTML = "Fisika Dasar";
  } else if (document.getElementById("jurusan").innerHTML === "Fisika") {
    document.getElementById("jurusans").innerHTML = "Teknik Fisika";
    document.getElementById("jurusanss").innerHTML = "Teknik Fisika";

    document.getElementById("namaMatkul-1").innerHTML = "Fisika Dasar";
    document.getElementById("namaMatkul-2").innerHTML = "Konsep Rekayasa & Desain";
    document.getElementById("namaMatkul-3").innerHTML = "Kalkulus";
  } else if (document.getElementById("jurusan").innerHTML === "Informasi") {
    document.getElementById("jurusans").innerHTML = "Sistem Informasi";
    document.getElementById("jurusanss").innerHTML = "Sistem Informasi";

    document.getElementById("namaMatkul-1").innerHTML = "Management Information System";
    document.getElementById("namaMatkul-2").innerHTML = "Corporate Business Process ";
    document.getElementById("namaMatkul-3").innerHTML = "Accounting";
  }
}

export function firstClick() {
  var genderValue = document.getElementById("genders").value;
  if(document.getElementById("player-character").style.display == "none") {
    if (genderValue === "boy") {
      document.getElementById("player-character").src = "image/boy.png";
      unhideAllButton();
      startTime();
      playerHome();  
      document.getElementById("player-character").style.display = "inline-block";
    } else if (genderValue === "girl") {
      document.getElementById("player-character").src = "image/girl.png";
      unhideAllButton();
      startTime();
      playerHome();
      document.getElementById("player-character").style.display = "inline-block";
    }
  }
  document.getElementById("btn-first").innerHTML = "Peraturan & About us";
}

export function defaultCharacter() {
  var genderValue = document.getElementById("genders").value;
  if (genderValue === "boy") {
    document.getElementById("player-character").src = "image/boy.png";
  } else if (genderValue === "girl") {
    document.getElementById("player-character").src = "image/girl.png";
  }
}

var getTime = new Date();
var hour = getTime.getHours();
var minute = getTime.getMinutes();
var day = 1;

export function startTime() {
  minute = parseInt(minute, 10);
  hour = parseInt(hour, 10);

  minute = minute + 1;

  if (minute === 60) {
    hour = hour + 1;
    minute = 0;
  }

  if (minute < 10 || minute === 0) {
    minute = "0" + minute;
  }

  if (hour < 10 || hour === 0) {
    hour = "0" + hour;
  }

  if (hour > 23) {
    hour = "00";
    day += 1;
  }

  if (day === 1) {
    $("#player-hari").html(" (Senin)");
  } else if (day === 2) {
    $("#player-hari").html(" (Selasa)");
  } else if (day === 3) {
    $("#player-hari").html(" (Rabu)");
  } else if (day === 4) {
    $("#player-hari").html(" (Kamis)");
  } else if (day === 5) {
    $("#player-hari").html(" (Jumat)");
  } else if (day === 6) {
    $("#player-hari").html(" (Sabtu)");
  } else if (day === 7) {
    $("#player-hari").html(" (Minggu)");
  }

  if (day > 7) {
    gameSummary();
    window.$("#summaryModal").modal({backdrop: "static", keyboard: false});
    window.$("#summaryModal").modal("show");
  }

  if (day <= 7) {
    if (hour >= 8 && hour < 17) {
      document.getElementById("btn-go-2").disabled = false;
      document.getElementById("jam-kampus").style.display = "none";
    } else {
      document.getElementById("btn-go-2").disabled = true;
      document.getElementById("jam-kampus").style.display = "inline-block";
    }

    if (hour >= 10 && hour < 23) {
      document.getElementById("btn-go-3").disabled = false;
      document.getElementById("jam-supermarket").style.display = "none";
      if(document.getElementById("btn-go-3").disabled == true) {
          document.getElementById("jam-supermarket").style.display = "inline-block";
          btnDisabled();     
      }
    } else {
      document.getElementById("btn-go-3").disabled = true;
      document.getElementById("jam-supermarket").style.display = "inline-block";
    }
  }

  $("#time").html(hour + ":" + minute);
  $("#player-day").html(day);
  setTimeout(startTime, 1000);
}

$(document).ready(function () {
  function playerGreet() {
    if (hour < 5) {
      $("#playerGreet").html("Selamat Malam, ");
      $("body").css("box-shadow","inset 0px 0px 0 2000px rgba(3, 3, 3, 0.7)");
    } else if (hour < 10) {
      $("#playerGreet").html("Selamat Pagi, ");
      $("body").css("box-shadow","inset 0px 0px 0 2000px rgba(252, 221, 176, 0.5)");
    } else if (hour < 15) {
      $("#playerGreet").html("Selamat Siang, ");
      $("body").css("box-shadow","inset 0px 0px 0 2000px rgba(191, 239, 249, 0.5)");
    } else if (hour < 19) {
      $("#playerGreet").html("Selamat Sore, ");
      $("body").css("box-shadow","inset 0px 0px 0 2000px rgba(251, 147, 128, 0.5)");
    } else {
      $("#playerGreet").html("Selamat Malam, ");
      $("body").css("box-shadow","inset 0px 0px 0 2000px rgba(3, 3, 3, 0.7)");
    }
  }
  setInterval(playerGreet, 0);

  $("select.prodi").change(function () {
    var selectedProdi = $(this).children("option:selected").val();
    $("#jurusan").html(selectedProdi);
  });
});

// Makan 1 - nasi + lauk
var makanan1 = 8; //nasi + lauk
var makanan2 = 5; //snack
var makanan3 = 5; //buah

export function totalMakanan() {
  if (makanan1 !== 0) {
    document.getElementById("jlhMakanan1").innerHTML = makanan1;
    document.getElementById("btn-1menu").disabled = false;
  } else {
    document.getElementById("btn-1menu").disabled = true;
  }

  if (makanan2 !== 0) {
    document.getElementById("jlhMakanan2").innerHTML = makanan2;
    document.getElementById("btn-2menu").disabled = false;
  } else {
    document.getElementById("btn-2menu").disabled = true;
  }

  if (makanan3 !== 0) {
    document.getElementById("jlhMakanan3").innerHTML = makanan3;
    document.getElementById("btn-3menu").disabled = false;
  } else {
    document.getElementById("btn-3menu").disabled = true;
  }
}

export function playerEat1() {
  document.getElementById("progress-eat").value += 5;
  document.getElementById("progress-sleep").value -= 0.2;
  document.getElementById("progress-play").value -= 0.2;
  document.getElementById("progress-study").value -= 0.2;
  document.getElementById("progress-drink").value -= 0.2;
  document.getElementById("progress-healthy").value += 1;

  sum_eat1 += 1;
  makanan1 -= 1;
  if (makanan1 === 0) {
    alert("Makanan habis, segera belanja!");
  }

  btnEnabled();
  defaultCharacter();
}

// Makan 2 = snack
export function playerEat2() {
  document.getElementById("progress-eat").value += 2.5;
  document.getElementById("progress-sleep").value -= 0.1;
  document.getElementById("progress-play").value -= 0.1;
  document.getElementById("progress-study").value -= 0.1;
  document.getElementById("progress-drink").value -= 0.1;
  document.getElementById("progress-healthy").value += 1;

  sum_eat2 += 1;
  makanan2 -= 1;
  if (makanan2 === 0) {
    alert("Makanan habis, segera belanja!");
  }

  btnEnabled();
  defaultCharacter();
}

// Makan 3 = buah
export function playerEat3() {
  document.getElementById("progress-eat").value += 3.7;
  document.getElementById("progress-sleep").value -= 0.1;
  document.getElementById("progress-play").value -= 0.1;
  document.getElementById("progress-study").value -= 0.1;
  document.getElementById("progress-drink").value -= 0.1;
  document.getElementById("progress-healthy").value += 1.3;

  sum_eat3 += 1;
  makanan3 -= 1;
  if (makanan3 === 0) {
    alert("Makanan habis, segera belanja!");
  }

  btnEnabled();
  defaultCharacter();
}

export function eating() {
  var genderValue = document.getElementById("genders").value;
  if (genderValue === "boy") {
    document.getElementById("player-character").src = "image/eating-boy.png";
  } else if (genderValue === "girl") {
    document.getElementById("player-character").src = "image/eating-girl.png";
  }
}

setInterval(needEat, 15000);
export function needEat() {
  document.getElementById("progress-eat").value -= 0.37;

  if (
    document.getElementById("progress-eat").value > 0 &&
    document.getElementById("progress-eat").value <= 1
  ) {
    sum_lapar += 1;
    window.alert("Lapar ya? Makan yuk!");
  } else if (document.getElementById("progress-eat").value === 0) {
    window.location.reload();
    alert("Game Over! Karakter anda mati karena kelaparan :(");
  }
}

export function playerSleep() {
  document.getElementById("progress-eat").value -= 0.3;
  document.getElementById("progress-sleep").value += 5;
  document.getElementById("progress-play").value -= 0.3;
  document.getElementById("progress-study").value -= 0.3;
  document.getElementById("progress-drink").value -= 0.3;
  document.getElementById("progress-healthy").value += 2;

  sum_sleep += 1;

  btnEnabled();
  defaultCharacter();
}

export function sleeping() {
  var genderValue = document.getElementById("genders").value;
  if (genderValue === "boy") {
    document.getElementById("player-character").src = "image/sleeping-boy.png";
  } else if (genderValue === "girl") {
    document.getElementById("player-character").src = "image/sleeping-girl.png";
  }
}

setInterval(needSleep, 20000);
function needSleep() {
  document.getElementById("progress-sleep").value -= 0.4;

  if (
    document.getElementById("progress-sleep").value > 0 &&
    document.getElementById("progress-sleep").value <= 1
  ) {
    window.alert("Capek? Istirahat dulu yahhh!");
  } else if (document.getElementById("progress-sleep").value === 0) {
    sum_tertidur += 1;
    alert("Kamu terlalu capek hingga tertidur!");
    sleeping();
    setTimeout(playerSleep, 6300);
    btnDisabled();
  }
}

export function playerStudy() {
  document.getElementById("progress-eat").value -= 0.3;
  document.getElementById("progress-sleep").value -= 0.3;
  document.getElementById("progress-play").value -= 0.3;
  document.getElementById("progress-study").value += 2.5;
  document.getElementById("progress-drink").value -= 0.3;
  document.getElementById("progress-healthy").value -= 0.3;

  sum_study += 1;
  btnEnabled();
  defaultCharacter();
}

export function studying() {
  var genderValue = document.getElementById("genders").value;
  if (genderValue === "boy") {
    document.getElementById("player-character").src = "image/studying-boy.png";
  } else if (genderValue === "girl") {
    document.getElementById("player-character").src = "image/studying-girl.png";
  }
}

setInterval(needStudy, 60000);
function needStudy() {
  document.getElementById("progress-study").value -= 0.35;

  if (document.getElementById("progress-study").value <= 1) {
    window.alert("Udah lama gak belajar nih, belajar yuk!");
  }
}

export function playerPlay() {
  document.getElementById("progress-eat").value -= 0.3;
  document.getElementById("progress-sleep").value -= 0.3;
  document.getElementById("progress-play").value += 5;
  document.getElementById("progress-study").value -= 0.3;
  document.getElementById("progress-drink").value -= 0.3;
  document.getElementById("progress-healthy").value -= 1;

  sum_play += 1;
  btnEnabled();
  defaultCharacter();
}

export function playing() {
  var genderValue = document.getElementById("genders").value;
  if (genderValue === "boy") {
    document.getElementById("player-character").src = "image/playing-boy.png";
  } else if (genderValue === "girl") {
    document.getElementById("player-character").src = "image/playing-girl.png";
  }
}

setInterval(needPlay, 12000);
function needPlay() {
  document.getElementById("progress-play").value -= 0.3;

  if (document.getElementById("progress-play").value <= 1) {
    window.alert("Bosan? Main dulu yuk!");
  }
}

export function playerDrink() {
  document.getElementById("progress-play").value -= 0.3;
  document.getElementById("progress-study").value -= 0.3;
  document.getElementById("progress-healthy").value += 0.5;
  document.getElementById("progress-drink").value += 4;

  btnEnabled();
  defaultCharacter();
}

export function drinking() {
  var genderValue = document.getElementById("genders").value;
  if (genderValue === "boy") {
    document.getElementById("player-character").src = "image/drinking-boy.png";
  } else if (genderValue === "girl") {
    document.getElementById("player-character").src = "image/drinking-girl.png";
  }
}

setInterval(needDrink, 11000);
export function needDrink() {
  function needDrink() {
    document.getElementById("progress-drink").value -= 0.4;
    document.getElementById("progress-healthy").value -= 0.3;
    document.getElementById("progress-study").value -= 0.2;

    if (document.getElementById("progress-drink").value <= 1) {
      window.alert("Minum dulu yuk biar tidak dehidrasi!");
    }
  }
}

export function playerOlahraga() {
  document.getElementById("progress-eat").value -= 1;
  document.getElementById("progress-sleep").value -= 0.5;
  document.getElementById("progress-play").value -= 0.5;
  document.getElementById("progress-study").value -= 0.5;
  document.getElementById("progress-healthy").value += 2;
  document.getElementById("progress-drink").value -= 1;

  sum_olahraga += 1;
  btnEnabled();
  defaultCharacter();
}

export function olahraga() {
  var genderValue = document.getElementById("genders").value;
  if (genderValue === "boy") {
    document.getElementById("player-character").src = "image/olahraga-boy.png";
  } else if (genderValue === "girl") {
    document.getElementById("player-character").src = "image/olahraga-girl.png";
  }
}

setInterval(needOlahraga, 1440000)
export function needOlahraga() {
  document.getElementById("progress-healthy").value -= 3;

  if (document.getElementById("progress-healthy").value <= 1) {
    window.alert("Kamu kurang olahraga, yuk olahraga!");
  }
}

export function playerBelanja() {
  document.getElementById("progress-eat").value -= 0.5;
  document.getElementById("progress-sleep").value -= 0.5;
  document.getElementById("progress-play").value -= 0.5;
  document.getElementById("progress-study").value -= 1;
  document.getElementById("progress-healthy").value -= 0.5;
  document.getElementById("progress-drink").value -= 0.5;

  makanan1 += 5;
  makanan2 += 3;
  makanan3 += 3;

  btnEnabled();
  defaultCharacter();
}

export function belanja() {
  var genderValue = document.getElementById("genders").value;
  if (genderValue === "boy") {
    document.getElementById("player-character").src = "image/belanja-boy.png";
  } else if (genderValue === "girl") {
    document.getElementById("player-character").src = "image/belanja-girl.png";
  }
}

// export function butuhBelanja() {}

export function playerKonsultasi() {
  document.getElementById("progress-eat").value -= 0.3;
  document.getElementById("progress-sleep").value -= 0.3;
  document.getElementById("progress-play").value -= 0.3;
  document.getElementById("progress-study").value -= 0.3;
  document.getElementById("progress-healthy").value += 3;
  document.getElementById("progress-drink").value -= 0.3;

  btnEnabled();
  defaultCharacter();
}

export function konsultasi() {
  var genderValue = document.getElementById("genders").value;
  if (genderValue === "boy") {
    document.getElementById("player-character").src = "image/visiting-boy.png";
  } else if (genderValue === "girl") {
    document.getElementById("player-character").src = "image/visiting-girl.png";
  }
}

setInterval(needKonsultasi, 60000)
export function needKonsultasi() {
  document.getElementById("progress-healthy").value -= 0.5;

  if (
    document.getElementById("progress-healthy").value > 0 &&
    document.getElementById("progress-healthy").value <= 1
  ) {
    window.alert("Kamu sakit! Segera konsultasi kepada dokter!");
  } else if (document.getElementById("progress-healthy").value === 0) {
    window.location.reload();
    alert("Game Over! Karakter anda mati karena sakit :(");
  }
}

export function playerHome() {
  sum_rumah += 1;
  document.getElementById("progress-eat").value -= 0.5;
  document.getElementById("progress-sleep").value -= 0.5;
  document.getElementById("progress-play").value -= 0.5;

  if (hour < 5) {
      document.body.style.background = "url(image/kamar-malam.jpg) no-repeat center";
  } else if (hour < 10) {
      document.body.style.background = "url(image/kamar-pagi.jpg) no-repeat center";
  } else if (hour < 15) {
      document.body.style.background = "url(image/kamar-pagi.jpg) no-repeat center";
  } else if (hour < 19) {
      document.body.style.background = "url(image/kamar-pagi.jpg) no-repeat center";
  } else {
      document.body.style.background = "url(image/kamar-malam.jpg) no-repeat center";
  }
  document.getElementById("player-location").innerHTML = "Rumah";
  document.getElementById("prodjur").style.display = "inline-block";
  document.getElementById("btn-act-1").style.display = "inline-block";
  document.getElementById("btn-act-2").style.display = "inline-block";
  document.getElementById("btn-act-3").style.display = "inline-block";
  document.getElementById("btn-act-4").style.display = "inline-block";
  document.getElementById("btn-act-5").style.display = "inline-block";
  document.getElementById("btn-act-6").style.display = "inline-block";
  document.getElementById("btn-act-7").style.display = "none";
  document.getElementById("btn-act-8").style.display = "none";

  btnEnabled();
}

export function playerKampus() {
  sum_kampus += 1;  
  document.getElementById("progress-eat").value -= 0.5;
  document.getElementById("progress-sleep").value -= 0.5;
  document.getElementById("progress-play").value -= 0.5;

  if (hour < 5) {
      document.body.style.background = "url(image/kampus.jpg) no-repeat center";
  } else if (hour < 10) {
      document.body.style.background = "url(image/kampus.jpg) no-repeat center";
  } else if (hour < 15) {
      document.body.style.background = "url(image/kampus.jpg) no-repeat center";
  } else if (hour < 19) {
      document.body.style.background = "url(image/kampus.jpg) no-repeat center";
  } else {
      document.body.style.background = "url(image/kampus.jpg) no-repeat center";
  }
  document.getElementById("player-location").innerHTML = "Kampus";
  document.getElementById("prodjur").style.display = "inline-block";
  document.getElementById("btn-act-1").style.display = "inline-block";
  document.getElementById("btn-act-2").style.display = "none";
  document.getElementById("btn-act-3").style.display = "inline-block";
  document.getElementById("btn-act-4").style.display = "none";
  document.getElementById("btn-act-5").style.display = "inline-block";
  document.getElementById("btn-act-6").style.display = "none";
  document.getElementById("btn-act-7").style.display = "none";
  document.getElementById("btn-act-8").style.display = "none";

  btnEnabled();
}

export function playerMall() {
  sum_mall += 1;  
  document.getElementById("progress-eat").value -= 0.5;
  document.getElementById("progress-sleep").value -= 0.5;
  document.getElementById("progress-play").value -= 0.5;

  if (hour < 5) {
      document.body.style.background = "url(image/supermarket.jpg) no-repeat center";
  } else if (hour < 10) {
      document.body.style.background = "url(image/supermarket.jpg) no-repeat center";
  } else if (hour < 15) {
      document.body.style.background = "url(image/supermarket.jpg) no-repeat center";
  } else if (hour < 19) {
      document.body.style.background = "url(image/supermarket.jpg) no-repeat center";
  } else {
      document.body.style.background = "url(image/supermarket.jpg) no-repeat center";
  }

  document.getElementById("player-location").innerHTML = "Mall";
  document.getElementById("prodjur").style.display = "none";
  document.getElementById("btn-act-1").style.display = "inline-block";
  document.getElementById("btn-act-2").style.display = "none";
  document.getElementById("btn-act-3").style.display = "none";
  document.getElementById("btn-act-4").style.display = "none";
  document.getElementById("btn-act-5").style.display = "inline-block";
  document.getElementById("btn-act-6").style.display = "none";
  document.getElementById("btn-act-7").style.display = "inline-block";
  document.getElementById("btn-act-8").style.display = "none";
  
  btnEnabled();
}

export function playerRS() {
  sum_rs += 1;
    document.getElementById("progress-eat").value -= 0.5;
    document.getElementById("progress-sleep").value -= 0.5;
    document.getElementById("progress-play").value -= 0.5;
    if (hour < 5) {
        document.body.style.background = "url(image/rs.jpg) no-repeat bottom";
    } else if (hour < 10) {
        document.body.style.background = "url(image/rs.jpg) no-repeat bottom";
    } else if (hour < 15) {
        document.body.style.background = "url(image/rs.jpg) no-repeat bottom";
    } else if (hour < 19) {
        document.body.style.background = "url(image/rs.jpg) no-repeat bottom";
    } else {
        document.body.style.background = "url(image/rs.jpg) no-repeat bottom";
    } 
  document.getElementById("player-location").innerHTML = "Rumah Sakit";
  document.getElementById("prodjur").style.display = "none";
  document.getElementById("btn-act-1").style.display = "none";
  document.getElementById("btn-act-2").style.display = "none";
  document.getElementById("btn-act-3").style.display = "none";
  document.getElementById("btn-act-4").style.display = "none";
  document.getElementById("btn-act-5").style.display = "none";
  document.getElementById("btn-act-6").style.display = "none";
  document.getElementById("btn-act-7").style.display = "none";
  document.getElementById("btn-act-8").style.display = "inline-block";

  btnEnabled();
}

export function btnEnabled() {
  document.getElementById("btn-act-1").disabled = false;
  document.getElementById("btn-act-2").disabled = false;
  document.getElementById("btn-act-3").disabled = false;
  document.getElementById("btn-act-4").disabled = false;
  document.getElementById("btn-act-5").disabled = false;
  document.getElementById("btn-act-6").disabled = false;
  document.getElementById("btn-act-7").disabled = false;
  document.getElementById("btn-act-8").disabled = false;

  document.getElementById("btn-go-1").disabled = false;
  document.getElementById("btn-go-2").disabled = false;
  document.getElementById("btn-go-3").disabled = false;
  document.getElementById("btn-go-4").disabled = false;
}

export function btnDisabled() {
  document.getElementById("btn-act-1").disabled = true;
  document.getElementById("btn-act-2").disabled = true;
  document.getElementById("btn-act-3").disabled = true;
  document.getElementById("btn-act-4").disabled = true;
  document.getElementById("btn-act-5").disabled = true;
  document.getElementById("btn-act-6").disabled = true;
  document.getElementById("btn-act-7").disabled = true;
  document.getElementById("btn-act-8").disabled = true;

  document.getElementById("btn-go-1").disabled = true;
  document.getElementById("btn-go-2").disabled = true;
  document.getElementById("btn-go-3").disabled = true;
  document.getElementById("btn-go-4").disabled = true;
}

function unhideAllButton() {
  document.getElementById("btn-act-1").style.display = "inline-block";
  document.getElementById("btn-act-2").style.display = "inline-block";
  document.getElementById("btn-act-3").style.display = "inline-block";
  document.getElementById("btn-act-4").style.display = "inline-block";
  document.getElementById("btn-act-5").style.display = "inline-block";
  document.getElementById("btn-act-6").style.display = "inline-block";
  document.getElementById("btn-act-7").style.display = "inline-block";
  document.getElementById("btn-act-8").style.display = "inline-block";

  document.getElementById("btn-go-1").style.display = "inline-block";
  document.getElementById("btn-go-2").style.display = "inline-block";
  document.getElementById("btn-go-3").style.display = "inline-block";
  document.getElementById("btn-go-4").style.display = "inline-block";
}

function hideButton() {
    document.getElementById("btn-act-1").style.display = "inline-block";
    document.getElementById("btn-act-2").style.display = "inline-block";
    document.getElementById("btn-act-3").style.display = "inline-block";
    document.getElementById("btn-act-4").style.display = "inline-block";
    document.getElementById("btn-act-5").style.display = "inline-block";
    document.getElementById("btn-act-6").style.display = "inline-block";
    document.getElementById("btn-act-7").style.display = "inline-block";
    document.getElementById("btn-act-8").style.display = "inline-block";
  }

// Summarry
var sum_eat1 = 0;
var sum_eat2 = 0;
var sum_eat3 = 0;
var sum_sleep = 0;
var sum_play = 0;
var sum_study = 0;
var sum_olahraga = 0;

var sum_kampus = 0;
var sum_rumah = 0;
var sum_mall = 0;
var sum_rs = 0;

var sum_lapar = 0;
var sum_tertidur = 0;

export function gameSummary() {
  // eat1 2 3
  if (sum_eat1 >= sum_eat2 && sum_eat1 >= sum_eat3) {
    document.getElementById("result_eat").innerHTML =
      "Kamu telah memakan nasi sebanyak " + sum_eat1 + ", enak banget yaaa~";
  } else if (sum_eat2 >= sum_eat1 && sum_eat2 >= sum_eat3) {
    document.getElementById("result_eat").innerHTML =
      "Ada " +
      sum_eat2 +
      "bungkus snack yang kamu makan. Kamu pasti sering ngemil-ngemil yaaa~";
  } else if (sum_eat3 >= sum_eat1 && sum_eat3 >= sum_eat2) {
    document.getElementById("result_eat").innerHTML =
      "Sebanyak " +
      sum_eat3 +
      "apel yang kamu makan. Pasti kamu sehat banget! Jangan lupa makan nasi juga ya ~";
  }

  // sleep
  if (sum_sleep >= 50) {
    document.getElementById("result_sleep").innerHTML =
      "(Good: "+ sum_sleep + ") Jam tidur kamu terjaga dengan baik!";
  } else if (sum_sleep >= 25) {
    document.getElementById("result_sleep").innerHTML =
      "(Ok: "+ sum_sleep + ") Jam tidur kamu cukup baik, jangan sampai telat ya lain kali~";
  } else {
    document.getElementById("result_sleep").innerHTML =
      "(Bad: "+ sum_sleep + ") Kamu kurang tidur, jangan sampai telat atau bahkan tidak tidur ya! Tidak sehat lohhh~";
  }

  // play
  if (sum_play >= 50) {
    document.getElementById("result_play").innerHTML =
      "(Good: "+ sum_play + ") Kamu sering bermain game, main bareng lagi yuk lain kali?";
  } else if (sum_play >= 25) {
    document.getElementById("result_play").innerHTML =
      "(Ok: "+ sum_play + ") Kamu jarang bermain game ya? Sibuk kerja tugas ya?";
  } else {
    document.getElementById("result_play").innerHTML =
      "(Bad: "+ sum_play + ") Kamu kurang atau bahkan tidak tertarik dengan game sama sekali";
  }

  // study
  if (sum_study >= 30) {
    document.getElementById("result_study").innerHTML =
      "(Good: "+ sum_study + ") Kamu rajin banget!";
  } else if (sum_study >= 15) {
    document.getElementById("result_study").innerHTML =
      "(Ok: "+ sum_study + ") Kamu rajin, tapi masih sering malas-malasan yaa?~";
  } else {
    document.getElementById("result_study").innerHTML =
      "(Bad: "+ sum_study + ") Belajar lebih giat lagi ya! Semangattt!";
  }

  // olahraga
  if (sum_olahraga >= 10) {
    document.getElementById("result_olahraga").innerHTML =
      "(Good: "+ sum_olahraga + ") Otot kawat, tulang besi!";
  } else if (sum_olahraga >= 5) {
    document.getElementById("result_olahraga").innerHTML =
      "(Ok: "+ sum_olahraga + ") Jangan lupa olahraga ya! Awalnya skip 1 hari, tapi nanti keterusan loh";
  } else {
    document.getElementById("result_olahraga").innerHTML =
      "(Bad: "+ sum_olahraga + ") Olahraga itu penting bagi tubuh kita supaya tetap sehat";
  }

  // -----------------------------------------------------------------------------------------

  // kampus
  if (sum_kampus >= 30) {
    document.getElementById("result_kampus").innerHTML =
      "(Good: "+ sum_kampus + ") Kamu mahasiswa yang rajin banget! Kamu sudah pergi ke kampus sebanyak " + sum_kampus + "kali";
  } else if (sum_kampus >= 15) {
    document.getElementById("result_kampus").innerHTML =
      "(Ok: "+ sum_kampus + ") Kamu ada bolos ya? Jangan lupa ke kampus lagi yaa~";
  } else {
    document.getElementById("result_kampus").innerHTML =
      "(Bad: "+ sum_kampus + ") Sepertinya kamu jarang ke kampus. Mungkin pertimbangkan pindah program studi supaya lebih semangat!~";
  }

  // rumah
  if (sum_rumah >= 50) {
    document.getElementById("result_rumah").innerHTML =
      "Home sweet home!";
  } else if (sum_mall >= 25) {
    document.getElementById("result_rumah").innerHTML =
      "Jangan lupa pulang ke rumah ya!";
  } else {
    document.getElementById("result_rumah").innerHTML =
      "Kamu jarang sekali berada di rumah, apakah kamu masih ingat dengan yang namanya rumah?";
  }

  // mall
  if (sum_mall >= 30) {
    document.getElementById("result_mall").innerHTML =
      "Kamu sering banget ke supermarket. Cari makanan atau numpang AC nih? XD";
  } else if (sum_mall >= 15) {
    document.getElementById("result_mall").innerHTML =
      "Jangan lupa beli persediaan makanannya ya!";
  } else {
    document.getElementById("result_mall").innerHTML =
      "Jarang banget deh kamu ke supermarket? Persediaan makanan aman?";
  }

  // rs
  if (sum_rs >= 30) {
    document.getElementById("result_kampus").innerHTML =
      "(Good: "+ sum_rs + ") Kamu sering ke Rumah Sakit. Apakah kamu baik-baik saja? Jangan lupa jaga kesehatan ya";
  } else if (sum_rs >= 15) {
    document.getElementById("result_kampus").innerHTML =
      "(Ok: "+ sum_rs + ") Jaga kesehatan terus ya!";
  } else {
    document.getElementById("result_kampus").innerHTML =
      "(Bad: "+ sum_rs + ") Hebat! Kamu bisa menjaga kesehatanmu tetap baik.";
  }

  // ------------------------------------------------------------------------------

  // lapar
  if (sum_lapar >= 20) {
    document.getElementById("result_lapar").innerHTML =
      "(Bad: "+ sum_lapar + ") Kamu sering lupa dengan jadwal makan mu :(";
  } else if (sum_lapar >= 10) {
    document.getElementById("result_lapar").innerHTML =
      "(Ok: "+ sum_lapar + ") Lain kali jangan terlambat makan yaa, kalau lapar jadi kurang fokus untuk belajar~";
  } else {
    document.getElementById("result_lapar").innerHTML =
      "(Good: "+ sum_lapar + ") Hebat! Kamu selalu konsisten dengan jadwal makanmu!";
  }

  // tertidur
  if (sum_tertidur >= 10) {
    document.getElementById("result_tertidur").innerHTML =
      "(Bad: "+ sum_tertidur + ") Luangkan lebih banyak waktu tidur lain kali karena kamu sering tidur larut malam!";
  } else if (sum_tertidur >= 5) {
    document.getElementById("result_tertidur").innerHTML =
      "(Ok: "+ sum_tertidur + ") Apabila lelah, segera tidur ya~";
  } else {
    document.getElementById("result_tertidur").innerHTML =
      "(Good: "+ sum_tertidur + ") Hebat! Kamu bisa menjaga waktu tidurmu dengan baik!";
  }
}

export function showDetailedResult() {
  document.getElementById("btn-detailed-result").style.display = "none";
  document.getElementById("detailed-result").style.display = "inline-block";
}

var elem = document.documentElement;
export function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
        elem.msRequestFullscreen();
    }
}

export function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
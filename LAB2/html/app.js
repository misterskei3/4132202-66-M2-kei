
    var num=10;
    let name="nimbus";
    age =20;
    const year =1990;

    console.log(year)

    fruit = ["banana","apple","orange"];

    console.log(fruit[1])

    plant = {fruit:"banana",car:"toyota",colour:"orange"};

    console.log(plant[0])

    dataJson = {
employee:[{name:"nimbus"},{age:"20"},{year:"1990"}],

    };
    console.log(dataJson.employee[0].name)
    let msg = name + year;

    console.log(msg);

    document.getElementById('title').innerHTML = msg;

    $(function(){
    $("#title")
    .html(msg + " jQuery");
    });

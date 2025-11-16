let array05_graph = [];
let array04_graph = [];
let array03 = [];
let array02 = [];
let array01 = [];
let count_hit = 0;
let count_hit2 = 0;
let count_money = 0;
let count_money_investment = 0;
let count_money_return = 0;
let odds = 1;
let times = 1;
let count_1prize = 0;
let count_2prize = 0;
let count_3prize = 0;
let count_4prize = 0;
let count_5prize = 0;
let count_6prize = 0;
const wrapper = document.getElementById('AAA');
let outcome = "";
let ctx = document.getElementById('myChart');
let Line = "";

//シャッフルアルゴリズム くじ入力
function getValue0(){
    const t0 = Number(document.getElementById("num0").value);
    const t1 = Number(document.getElementById("num1").value);
    const t2 = Number(document.getElementById("num2").value);
    const t3 = Number(document.getElementById("num3").value);
    const t4 = Number(document.getElementById("num4").value);
    const t5 = Number(document.getElementById("num5").value);
    array01 = [t0, t1, t2, t3, t4, t5];
    array01.sort((a,b) => a-b);

// くじ入力番号を確認
    // document.getElementById("self0").textContent = array01[0];
    // document.getElementById("self1").textContent = array01[1];
    // document.getElementById("self2").textContent = array01[2];
    // document.getElementById("self3").textContent = array01[3];
    // document.getElementById("self4").textContent = array01[4];
    // document.getElementById("self5").textContent = array01[5];
    // console.dir(array01);
}

//シャッフルアルゴリズム くじ結果
function shuffle_check(){
    times = Number(document.getElementById("num6").value);
    for (let n = 0 ; n < times ; n++){
        odds = Number(document.getElementById("num7").value);
        count_hit = 0;
        count_hit2 = 0;
        count_money_investment -= 200 * odds;
        count_money -= 200 * odds;
        var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30,
                31,32,33,34,35,36,37,38,39,40,
                41,42,43];
        var a = arr.length;
        while (a) {
            var j = Math.floor( Math.random() * a );
            var t = arr[--a];
            arr[a] = arr[j];
            arr[j] = t;
        }
        array02 = arr.slice(0,6);
        array02.sort(function(a,b) {
            return a-b;
        });

        array03 = arr.slice(6,7);
        // array03 = [6];
        // 当選番号を確認
        // document.getElementById("view0").textContent = array02[0];
        // document.getElementById("view1").textContent = array02[1];
        // document.getElementById("view2").textContent = array02[2];
        // document.getElementById("view3").textContent = array02[3];
        // document.getElementById("view4").textContent = array02[4];
        // document.getElementById("view5").textContent = array02[5];
        // document.getElementById("view6").textContent = array03[0];

        // 当選番号を保存
        for (let p = 0; p < 6 ; p++){
            wrapper.insertAdjacentHTML('beforeend', String(array02[p]).padStart(2,'0') + ' ');
            }
        for (let i = 0; i < 6 ; i++){
            if (array01.includes(array02[i])){
                count_hit += 1;
            }}
        if (array01.includes(array03[0])){
            count_hit2 += 1;
        }
        
        if (count_hit === 6){
            count_money += 200000000 * odds;
            outcome = "１等賞";
            count_1prize += 1;
        } else if (count_hit === 5 && count_hit2 === 1){
            count_money += 10000000 * odds;  
            outcome = "２等賞";  
            count_2prize += 1;
        } else if (count_hit === 5){
            count_money += 300000 * odds;
            outcome = "３等賞";
            count_3prize += 1;
        } else if (count_hit === 4){
            count_money += 68000 * odds;
            outcome = "４等賞";
            count_4prize += 1;
        } else if (count_hit === 3){
            count_money += 1000 * odds;
            outcome = "５等賞";
            count_5prize += 1;
        } else {
            count_money += 0;
            outcome = "はずれ";
            count_6prize += 1;
        }
        wrapper.insertAdjacentHTML('beforeend', ' ボーナス数字: ' + String(array03[0]).padStart(2,'0') + '　当選結果: ' + outcome + '</br>')
        outcome ="";
        document.getElementById("answer1").textContent = count_money;
        document.getElementById("answer2").textContent = count_money_investment;
        count_money_return = count_money - count_money_investment;
        document.getElementById("answer3").textContent = count_money_return;
        document.getElementById("answer4").textContent = count_1prize;
        document.getElementById("answer5").textContent = count_2prize;
        document.getElementById("answer6").textContent = count_3prize;
        document.getElementById("answer7").textContent = count_4prize;
        document.getElementById("answer8").textContent = count_5prize;
        document.getElementById("answer9").textContent = count_6prize;
        array04_graph.push(count_money);
        array05_graph.push("");
        
    }
    if(Line){
        Line.destroy();
    }
    Line = new Chart(ctx, {
        type: 'line',
        data: {
            labels: array05_graph,
            datasets: [
                {
                label: 'リターンの推移',
                data: array04_graph,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                }
            ]
        },
        options : {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

    //削除
    function reset(){
    array05_graph = [];
    array04_graph = [];
    count_1prize = 0;
    count_2prize = 0;
    count_3prize = 0;
    count_4prize = 0;
    count_5prize = 0;
    count_6prize = 0;
    count_money = 0;
    count_money_investment = 0;
    document.getElementById("answer1").textContent = count_money;
    document.getElementById("answer2").textContent = count_money_investment;
    count_money_return = count_money - count_money_investment;
    document.getElementById("answer3").textContent = count_money_return;
    document.getElementById("answer4").textContent = count_1prize;
    document.getElementById("answer5").textContent = count_2prize;
    document.getElementById("answer6").textContent = count_3prize;
    document.getElementById("answer7").textContent = count_4prize;
    document.getElementById("answer8").textContent = count_5prize;
    document.getElementById("answer9").textContent = count_6prize;
    wrapper.innerHTML = '<p>【当選番号および当選結果】</p>';
    Line.destroy()
    };
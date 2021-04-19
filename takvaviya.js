let list = document.getElementById('list');
var a;

let anamolyStraight = document.getElementById("anamolyStraight").getContext('2d')
let anamolyHorizontal = document.getElementById("anamolyHorizontal").getContext('2d')
let anamolyPie = document.getElementById("anamolyPie").getContext('2d')
Chart.defaults.font.size = 26;

let powerStraight = document.getElementById("powerStraight").getContext('2d')
let powerHorizontal = document.getElementById("powerHorizontal").getContext('2d')
let powerPie = document.getElementById("powerPie").getContext('2d')

let interStraight = document.getElementById("interStraight").getContext('2d')
let interHorizontal = document.getElementById("interHorizontal").getContext('2d')
let interPie = document.getElementById("interPie").getContext('2d')

let powerButton = document.getElementById("powerButton");
let anamolyButton = document.getElementById("anamolyButton");
let inverterButton = document.getElementById("inverterButton");
let healthButton = document.getElementById("healthButton");

let anamolyStatus = document.getElementById("anamolyStatus");
let powerStatus = document.getElementById("powerStatus");
let interStatus = document.getElementById("interStatus");
let healthStatus = document.getElementById("healthStatus");

powerButton.addEventListener("click", function() {
    powerStatus.classList.remove("d-none")
    anamolyStatus.classList.add("d-none")
    interStatus.classList.add("d-none")
    healthStatus.classList.add("d-none")
    anamolyButton.classList.remove("button-background")
    healthButton.classList.remove("button-background")
    inverterButton.classList.remove("button-background")
    powerButton.classList.add("button-background")
})
anamolyButton.addEventListener("click", function() {
    powerStatus.classList.add("d-none")
    anamolyStatus.classList.remove("d-none")
    interStatus.classList.add("d-none")
    healthStatus.classList.add("d-none")
    healthButton.classList.remove("button-background")
    anamolyButton.classList.add("button-background")
    inverterButton.classList.remove("button-background")
    powerButton.classList.remove("button-background")
})
inverterButton.addEventListener("click", function() {
    interStatus.classList.remove("d-none")
    powerStatus.classList.add("d-none")
    anamolyStatus.classList.add("d-none")
    healthStatus.classList.add("d-none")
    anamolyButton.classList.remove("button-background")
    powerButton.classList.remove("button-background")
    healthButton.classList.remove("button-background")
    inverterButton.classList.add("button-background")

})
healthButton.addEventListener("click", function() {
    healthStatus.classList.remove("d-none")
    interStatus.classList.add("d-none")
    powerStatus.classList.add("d-none")
    anamolyStatus.classList.add("d-none")
    healthButton.classList.add("button-background")
    anamolyButton.classList.remove("button-background")
    inverterButton.classList.remove("button-background")
    powerButton.classList.remove("button-background")
})

function lables(a) {
    const data = {
        labels: [a.Hotspot.defect_type, a["Short Circuit"].defect_type, a["Open Circuit"].defect_type, a["Panel Failure"].defect_type, a.PID.defect_type],
        datasets: [{
            indexAxis: 'x',
            data: [a.Hotspot.Count, a["Short Circuit"].Count + 2000, a["Open Circuit"].Count + 3000, a["Panel Failure"].Count + 2000, a.PID.Count + 1000],
            fill: false,
            backgroundColor: [
                'rgba(55, 177, 222)'
            ],

            tension: 0.1
        }]
    };
    const myAnamolyStraight = new Chart(anamolyStraight, {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Anamoly Classification'
                }
            }
        }
    });
    const myPowerStraight = new Chart(powerStraight, {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Power Loss Metrices'
                }
            }
        }
    });
    const myInterStraight = new Chart(interStraight, {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Inverter-wise Analysis'
                }
            }
        }
    });
    const myHealthStraight = new Chart(healthStraight, {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Health History'
                }
            }
        }
    });
}

function horizontal(a) {
    const data = {
        labels: [a.Hotspot.sub_group["By Pass Diode Issues"].criticality, a.Hotspot.sub_group["Dirt / Vegetation"].criticality, a.Hotspot.sub_group["Broken Glass"].criticality, a.Hotspot.sub_group.Others.criticality],
        datasets: [{
            indexAxis: 'y',
            data: [a.Hotspot.sub_group["By Pass Diode Issues"].Count, a.Hotspot.sub_group["Dirt / Vegetation"].Count - 4000, a.Hotspot.sub_group["Broken Glass"].Count, a.Hotspot.sub_group.Others.Count - 300],
            fill: false,
            backgroundColor: [
                'rgba(22, 43, 224)',
                'rgba(4, 201, 93)',
                'rgba(252, 246, 58)',
                'rgba(255, 13, 17)'
            ],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };
    const myAnamolyStraight = new Chart(anamolyHorizontal, {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Anamoly Classification'
                }
            }
        }
    });
    const myPowerStraight = new Chart(powerHorizontal, {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Power Loss Metrices'
                }
            }
        }
    });
    const myInterStraight = new Chart(interHorizontal, {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Inverter-wise Analysis'
                }
            }
        }
    });
    const myHealthStraight = new Chart(healthHorizontal, {
        type: 'pie',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Health History'
                }
            }
        }
    });
}

function pie(a) {
    const data = {
        labels: [a.Hotspot.defect_type, a["Short Circuit"].defect_type, a["Open Circuit"].defect_type, a["Panel Failure"].defect_type, a.PID.defect_type],
        datasets: [{
            data: [a.Hotspot.Count, a["Short Circuit"].Count - 4000, a["Open Circuit"].Count, a["Panel Failure"].Count + 600, a.PID.Count + 800],
            fill: false,
            backgroundColor: [
                "#f2de02",
                a["Short Circuit"].color,
                a["Open Circuit"].color,
                a["Panel Failure"].color,
                'rgba(55, 177, 222)'
            ],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };
    const myAnamolyStraight = new Chart(anamolyPie, {
        type: 'doughnut',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Anamoly Classification'
                }
            }
        }
    });
    const myPowerStraight = new Chart(powerPie, {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Power Loss Metrices'
                }
            }
        }
    });
    const myInterStraight = new Chart(interPie, {
        type: 'radar',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Inverter-wise Analysis'
                }
            }
        }
    });
    const myHealthStraight = new Chart(healthPie, {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Health History'
                }
            }
        }
    });
}


function display(data) {
    //hotspot
    let hotspotItem = document.createElement("div")
    hotspotItem.classList.add("d-flex", "flex-row", "jusify-content-end")
    list.appendChild(hotspotItem)

    let hotspotName = document.createElement("p")
    hotspotName.textContent = data.Hotspot.defect_type
    hotspotName.classList.add("mr-5", "main-names")
    hotspotItem.appendChild(hotspotName)

    let hotspotCount = document.createElement("p")
    hotspotCount.textContent = data.Hotspot.Count
    hotspotCount.classList.add("ml-auto")
    hotspotItem.appendChild(hotspotCount)

    //diode
    let diodeItem = document.createElement("div");
    diodeItem.classList.add("d-flex", "flex-row", "jusify-content-between")
    list.appendChild(diodeItem)

    let diodeSpan = document.createElement("span")
    diodeSpan.classList.add("mr-3", "fas", "fa-info-circle")
    diodeItem.appendChild(diodeSpan)

    let diodeName = document.createElement("p")
    diodeName.textContent = data.Hotspot.sub_group["By Pass Diode Issues"].criticality
    diodeName.classList.add("mr-5")
    diodeItem.appendChild(diodeName)


    let diodeCount = document.createElement("p")
    diodeCount.textContent = data.Hotspot.sub_group["By Pass Diode Issues"].Count
    diodeCount.classList.add("ml-auto")
    diodeItem.appendChild(diodeCount)
    //dirt   
    let dirtItem = document.createElement("div");
    dirtItem.classList.add("d-flex", "flex-row", "jusify-content-between")
    list.appendChild(dirtItem)

    let dirtSpan = document.createElement("span")
    dirtSpan.classList.add("mr-3", "fas", "fa-info-circle")
    dirtItem.appendChild(dirtSpan)

    let dirtName = document.createElement("p")
    dirtName.textContent = data.Hotspot.sub_group["Dirt / Vegetation"].criticality
    dirtName.classList.add("mr-5")
    dirtItem.appendChild(dirtName)

    let dirtCount = document.createElement("p")
    dirtCount.textContent = data.Hotspot.sub_group["Dirt / Vegetation"].Count
    dirtCount.classList.add("ml-auto")
    dirtItem.appendChild(dirtCount)

    //glass   
    let glassItem = document.createElement("div");
    glassItem.classList.add("d-flex", "flex-row", "jusify-content-between")
    list.appendChild(glassItem)

    let glassSpan = document.createElement("span")
    glassSpan.classList.add("mr-3", "fas", "fa-info-circle")
    glassItem.appendChild(glassSpan)

    let glassName = document.createElement("p")
    glassName.textContent = data.Hotspot.sub_group["Broken Glass"].criticality
    glassName.classList.add("mr-5")
    glassItem.appendChild(glassName)

    let glassCount = document.createElement("p")
    glassCount.textContent = data.Hotspot.sub_group["Broken Glass"].Count
    glassCount.classList.add("ml-auto")
    glassItem.appendChild(glassCount)

    //others   
    let othersItem = document.createElement("div");
    othersItem.classList.add("d-flex", "flex-row", "jusify-content-between")
    list.appendChild(othersItem)

    let othersSpan = document.createElement("span")
    othersSpan.classList.add("mr-3", "fas", "fa-info-circle")
    othersItem.appendChild(othersSpan)

    let othersName = document.createElement("p")
    othersName.textContent = data.Hotspot.sub_group.Others.criticality
    othersName.classList.add("mr-5")
    othersItem.appendChild(othersName)

    let othersCount = document.createElement("p")
    othersCount.textContent = data.Hotspot.sub_group.Others.Count
    othersCount.classList.add("ml-auto")
    othersItem.appendChild(othersCount)


    //short circuit  
    let shortItem = document.createElement("div");
    shortItem.classList.add("d-flex", "flex-row", "jusify-content-between")
    list.appendChild(shortItem)

    let shortName = document.createElement("p")
    shortName.textContent = data["Short Circuit"].defect_type
    shortName.classList.add("mr-5", "main-names")
    shortItem.appendChild(shortName)

    let shortCount = document.createElement("p")
    shortCount.textContent = data["Short Circuit"].Count
    shortCount.classList.add("ml-auto")
    shortItem.appendChild(shortCount)

    //open circuit  
    let openItem = document.createElement("div");
    openItem.classList.add("d-flex", "flex-row", "jusify-content-between")
    list.appendChild(openItem)

    let openName = document.createElement("p")
    openName.textContent = data["Open Circuit"].defect_type
    openName.classList.add("mr-5", "main-names")
    openItem.appendChild(openName)

    let openCount = document.createElement("p")
    openCount.textContent = data["Open Circuit"].Count
    openCount.classList.add("ml-auto")
    openItem.appendChild(openCount)

    //panel failure  
    let panelItem = document.createElement("div");
    panelItem.classList.add("d-flex", "flex-row", "jusify-content-between")
    list.appendChild(panelItem)

    let panelName = document.createElement("p")
    panelName.textContent = data["Panel Failure"].defect_type
    panelName.classList.add("mr-5", "main-names")
    panelItem.appendChild(panelName)

    let panelCount = document.createElement("p")
    panelCount.textContent = data["Panel Failure"].Count
    panelCount.classList.add("ml-auto")
    panelItem.appendChild(panelCount)

    //module 
    let moduleItem = document.createElement("div");
    moduleItem.classList.add("d-flex", "flex-row", "jusify-content-between")
    list.appendChild(moduleItem)

    let moduleSpan = document.createElement("span")
    moduleSpan.classList.add("mr-3", "fas", "fa-info-circle")
    moduleItem.appendChild(moduleSpan)

    let moduleName = document.createElement("p")
    moduleName.textContent = data["Panel Failure"].sub_group.Module.criticality
    moduleName.classList.add("mr-5")
    moduleItem.appendChild(moduleName)

    let moduleCount = document.createElement("p")
    moduleCount.textContent = data["Panel Failure"].sub_group.Module.Count
    moduleCount.classList.add("ml-auto")
    moduleItem.appendChild(moduleCount)

    //table
    let tableItem = document.createElement("div");
    tableItem.classList.add("d-flex", "flex-row", "jusify-content-between")
    list.appendChild(tableItem)

    let tableSpan = document.createElement("span")
    tableSpan.classList.add("mr-3", "fas", "fa-info-circle")
    tableItem.appendChild(tableSpan)

    let tableName = document.createElement("p")
    tableName.textContent = data["Panel Failure"].sub_group.Table.criticality
    tableName.classList.add("mr-5")
    tableItem.appendChild(tableName)

    let tableCount = document.createElement("p")
    tableCount.textContent = data["Panel Failure"].sub_group.Table.Count
    tableCount.classList.add("ml-auto")
    tableItem.appendChild(tableCount)

    //pid
    let pidItem = document.createElement("div")
    pidItem.classList.add("d-flex", "flex-row", "jusify-content-between")
    list.appendChild(pidItem)

    let pidName = document.createElement("p")
    pidName.textContent = data.PID.defect_type
    pidName.classList.add("mr-5", "main-names")
    pidItem.appendChild(pidName)

    let pidCount = document.createElement("p")
    pidCount.textContent = data.PID.Count
    pidCount.classList.add("ml-auto")
    pidItem.appendChild(pidCount)
}


fetch("https://www.takvaviya.in/thermal/thermal/project/data/hero_ichawar")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        a = data[6]["2019-10-06"]["layers"]
        display(a)
        lables(a)
        horizontal(a)
        pie(a)
    })
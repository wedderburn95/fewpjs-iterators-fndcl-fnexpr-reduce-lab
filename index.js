const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const batteryReducer = () => {
    let total = 0
    for ( let x of batteryBatches) {
       total += x
    }
    return total

}

const totalBatteries = batteryReducer()


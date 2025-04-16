function startWashing(callback) {
    setTimeout(() => {
        console.log("Mesin cuci dimulai");
        callback();
    }, 1000);
}

function dryClothes(callback) {
    setTimeout(() => {
        console.log("Baju sedang dikeringkan");
        callback();
    }, 1000);
}

function foldClothes(callback) {
    setTimeout(() => {
        console.log("Baju dilipat rapi");
        callback();
    }, 1000);
}

// Callback hell (nested callbacks)
startWashing(() => {
    dryClothes(() => {
        foldClothes(() => {
            console.log("Semua proses selesai!");
        });
    });
});

var getSomething2 = function (something) {
    return "".concat(something, "\uC744 \uC5BB\uC5C8\uC2B5\uB2C8\uB2E4.");
};
var test1 = {
    first: "치킨",
    second: false,
};
var subwayMorningSet = {
    first: {
        name: "아메리카노",
        price: 1500,
    },
    second: {
        name: " 화이트 쿠키",
        price: 2500,
    },
};
var bigmac = {
    main: {
        name: "빅맥",
        price: 3000,
    },
    side: {
        name: "감튀",
        price: 2000,
    },
    drinks: {
        name: "콜라",
        price: 1500,
        kcal: 200,
    },
};
var getResponse_ = function (res) {
    if (res.type === "success") {
        res.value.forEach(function (v) { return console.log(v); });
    }
    else {
        console.log(res.value.toUpperCase());
    }
};
getResponse_({
    type: "success",
    value: ["자바", "파이썬", "코틀린", "타입스크립트"],
});
var shampoo = "100\uC5D4";
var choi = "\uCD5C\uB2D8";

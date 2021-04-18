var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "43710",
        "ok": "35465",
        "ko": "8245"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "17"
    },
    "maxResponseTime": {
        "total": "1236",
        "ok": "1058",
        "ko": "1236"
    },
    "meanResponseTime": {
        "total": "23",
        "ok": "19",
        "ko": "37"
    },
    "standardDeviation": {
        "total": "41",
        "ok": "43",
        "ko": "27"
    },
    "percentiles1": {
        "total": "13",
        "ok": "12",
        "ko": "33"
    },
    "percentiles2": {
        "total": "23",
        "ok": "15",
        "ko": "42"
    },
    "percentiles3": {
        "total": "48",
        "ok": "32",
        "ko": "61"
    },
    "percentiles4": {
        "total": "227",
        "ok": "244",
        "ko": "87"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 35457,
    "percentage": 81
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8245,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "432.772",
        "ok": "351.139",
        "ko": "81.634"
    }
},
contents: {
"req_springboot-home-a05b5": {
        type: "REQUEST",
        name: "springboot_home",
path: "springboot_home",
pathFormatted: "req_springboot-home-a05b5",
stats: {
    "name": "springboot_home",
    "numberOfRequests": {
        "total": "43690",
        "ok": "35445",
        "ko": "8245"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "17"
    },
    "maxResponseTime": {
        "total": "1236",
        "ok": "1058",
        "ko": "1236"
    },
    "meanResponseTime": {
        "total": "23",
        "ok": "19",
        "ko": "37"
    },
    "standardDeviation": {
        "total": "41",
        "ok": "43",
        "ko": "27"
    },
    "percentiles1": {
        "total": "13",
        "ok": "12",
        "ko": "33"
    },
    "percentiles2": {
        "total": "23",
        "ok": "15",
        "ko": "42"
    },
    "percentiles3": {
        "total": "48",
        "ok": "32",
        "ko": "61"
    },
    "percentiles4": {
        "total": "227",
        "ok": "244",
        "ko": "87"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 35437,
    "percentage": 81
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8245,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "432.574",
        "ok": "350.941",
        "ko": "81.634"
    }
}
    },"req_springboot-home-d696d": {
        type: "REQUEST",
        name: "springboot_home Redirect 1",
path: "springboot_home Redirect 1",
pathFormatted: "req_springboot-home-d696d",
stats: {
    "name": "springboot_home Redirect 1",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "51",
        "ok": "51",
        "ko": "-"
    },
    "percentiles1": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles2": {
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "percentiles3": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "percentiles4": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.198",
        "ok": "0.198",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

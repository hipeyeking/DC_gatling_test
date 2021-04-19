var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "41978",
        "ok": "32879",
        "ko": "9099"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "18"
    },
    "maxResponseTime": {
        "total": "3189",
        "ok": "3189",
        "ko": "1230"
    },
    "meanResponseTime": {
        "total": "24",
        "ok": "19",
        "ko": "42"
    },
    "standardDeviation": {
        "total": "37",
        "ok": "33",
        "ko": "43"
    },
    "percentiles1": {
        "total": "15",
        "ok": "13",
        "ko": "34"
    },
    "percentiles2": {
        "total": "27",
        "ok": "18",
        "ko": "44"
    },
    "percentiles3": {
        "total": "52",
        "ok": "35",
        "ko": "78"
    },
    "percentiles4": {
        "total": "127",
        "ok": "114",
        "ko": "136"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 32875,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 9099,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "415.624",
        "ok": "325.535",
        "ko": "90.089"
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
        "total": "41958",
        "ok": "32859",
        "ko": "9099"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "18"
    },
    "maxResponseTime": {
        "total": "3189",
        "ok": "3189",
        "ko": "1230"
    },
    "meanResponseTime": {
        "total": "24",
        "ok": "19",
        "ko": "42"
    },
    "standardDeviation": {
        "total": "37",
        "ok": "33",
        "ko": "43"
    },
    "percentiles1": {
        "total": "15",
        "ok": "13",
        "ko": "34"
    },
    "percentiles2": {
        "total": "27",
        "ok": "18",
        "ko": "44"
    },
    "percentiles3": {
        "total": "52",
        "ok": "35",
        "ko": "78"
    },
    "percentiles4": {
        "total": "126",
        "ok": "112",
        "ko": "136"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 32855,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 9099,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "415.426",
        "ok": "325.337",
        "ko": "90.089"
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
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles1": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles2": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "percentiles3": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "percentiles4": {
        "total": "140",
        "ok": "140",
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

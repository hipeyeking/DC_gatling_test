var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "59218",
        "ok": "59218",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12071",
        "ok": "12071",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "169",
        "ok": "169",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "558",
        "ok": "558",
        "ko": "-"
    },
    "percentiles1": {
        "total": "70",
        "ok": "70",
        "ko": "-"
    },
    "percentiles2": {
        "total": "111",
        "ok": "111",
        "ko": "-"
    },
    "percentiles3": {
        "total": "462",
        "ok": "462",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1939",
        "ok": "1939",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 57337,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 727,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1154,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "586.317",
        "ok": "586.317",
        "ko": "-"
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
        "total": "59218",
        "ok": "59218",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12071",
        "ok": "12071",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "169",
        "ok": "169",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "558",
        "ok": "558",
        "ko": "-"
    },
    "percentiles1": {
        "total": "70",
        "ok": "70",
        "ko": "-"
    },
    "percentiles2": {
        "total": "111",
        "ok": "111",
        "ko": "-"
    },
    "percentiles3": {
        "total": "462",
        "ok": "462",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1939",
        "ok": "1939",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 57337,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 727,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1154,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "586.317",
        "ok": "586.317",
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

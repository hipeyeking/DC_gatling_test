var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "272",
        "ok": "271",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "131"
    },
    "maxResponseTime": {
        "total": "1088",
        "ok": "1088",
        "ko": "131"
    },
    "meanResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "131"
    },
    "standardDeviation": {
        "total": "129",
        "ok": "129",
        "ko": "0"
    },
    "percentiles1": {
        "total": "15",
        "ok": "15",
        "ko": "131"
    },
    "percentiles2": {
        "total": "17",
        "ok": "17",
        "ko": "131"
    },
    "percentiles3": {
        "total": "26",
        "ok": "26",
        "ko": "131"
    },
    "percentiles4": {
        "total": "1076",
        "ok": "1076",
        "ko": "131"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 267,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "136",
        "ok": "135.5",
        "ko": "0.5"
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
        "total": "272",
        "ok": "271",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "131"
    },
    "maxResponseTime": {
        "total": "1088",
        "ok": "1088",
        "ko": "131"
    },
    "meanResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "131"
    },
    "standardDeviation": {
        "total": "129",
        "ok": "129",
        "ko": "0"
    },
    "percentiles1": {
        "total": "15",
        "ok": "15",
        "ko": "131"
    },
    "percentiles2": {
        "total": "17",
        "ok": "17",
        "ko": "131"
    },
    "percentiles3": {
        "total": "26",
        "ok": "26",
        "ko": "131"
    },
    "percentiles4": {
        "total": "1076",
        "ok": "1076",
        "ko": "131"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 267,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "136",
        "ok": "135.5",
        "ko": "0.5"
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

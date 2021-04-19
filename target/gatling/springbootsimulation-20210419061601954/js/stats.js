var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1579",
        "ok": "0",
        "ko": "1579"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "-",
        "ko": "19"
    },
    "maxResponseTime": {
        "total": "1149",
        "ok": "-",
        "ko": "1149"
    },
    "meanResponseTime": {
        "total": "62",
        "ok": "-",
        "ko": "62"
    },
    "standardDeviation": {
        "total": "40",
        "ok": "-",
        "ko": "40"
    },
    "percentiles1": {
        "total": "53",
        "ok": "-",
        "ko": "53"
    },
    "percentiles2": {
        "total": "72",
        "ok": "-",
        "ko": "72"
    },
    "percentiles3": {
        "total": "116",
        "ok": "-",
        "ko": "116"
    },
    "percentiles4": {
        "total": "164",
        "ok": "-",
        "ko": "164"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1579,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "143.545",
        "ok": "-",
        "ko": "143.545"
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
        "total": "1579",
        "ok": "0",
        "ko": "1579"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "-",
        "ko": "19"
    },
    "maxResponseTime": {
        "total": "1149",
        "ok": "-",
        "ko": "1149"
    },
    "meanResponseTime": {
        "total": "62",
        "ok": "-",
        "ko": "62"
    },
    "standardDeviation": {
        "total": "40",
        "ok": "-",
        "ko": "40"
    },
    "percentiles1": {
        "total": "53",
        "ok": "-",
        "ko": "53"
    },
    "percentiles2": {
        "total": "72",
        "ok": "-",
        "ko": "72"
    },
    "percentiles3": {
        "total": "116",
        "ok": "-",
        "ko": "116"
    },
    "percentiles4": {
        "total": "164",
        "ok": "-",
        "ko": "164"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1579,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "143.545",
        "ok": "-",
        "ko": "143.545"
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

var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "179114",
        "ok": "179103",
        "ko": "11"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "58680",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "167",
        "ok": "164",
        "ko": "60002"
    },
    "standardDeviation": {
        "total": "1011",
        "ok": "896",
        "ko": "0"
    },
    "percentiles1": {
        "total": "59",
        "ok": "59",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "74",
        "ok": "74",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "297",
        "ok": "297",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "2478",
        "ok": "2466",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 174746,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1143,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3214,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 11,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "595.063",
        "ok": "595.027",
        "ko": "0.037"
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
        "total": "179114",
        "ok": "179103",
        "ko": "11"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "58680",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "167",
        "ok": "164",
        "ko": "60002"
    },
    "standardDeviation": {
        "total": "1011",
        "ok": "896",
        "ko": "0"
    },
    "percentiles1": {
        "total": "59",
        "ok": "59",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "74",
        "ok": "74",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "297",
        "ok": "297",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "2478",
        "ok": "2466",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 174746,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1143,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3214,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 11,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "595.063",
        "ok": "595.027",
        "ko": "0.037"
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

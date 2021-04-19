package com.DC_test.demo.scala;

import test.upload_log.{all_data, javaClass1, javaClass2, schema_str, val_list}

import java.util.Date
import scala.collection.mutable.ArrayBuffer
import scala.util.Random

class RandomData {

  object TimeUtils {
    val now = new Date()

    def getCurrent_time: Long = {
      val a = now.getTime
      var str = a + ""
      str.substring(0, 10).toLong
    }
  }

  object randomDataList {

    def randomList(args: List[String]) : String = {
      val val_list = List(
        "[{\"ios.ios\":{\"common\":{\"message_id\":\"1\",\"project_id\":\"8ff7136b-d40a-4571-903e-bb2e4aefceeb\",\"app_id\":\"18e94303355ed4e7fe20f928cb663f99c7de0905\",\"tenant_id\":\"c65a02414ffc1f1e54f257cb5f27325b6f1d0cec\",\"upload_time\":\"" + TimeUtils.getCurrent_time + "\",\"Apex_id\":\"57AAD570-D38B-46AF-91A2-3C6D70D2FAA7\",\"session_id\":\"session_1608523241749\",\"app_version\":\"1.0\",\"app_package_id\":\"com.apex.ApexDataTracker\",\"carrier\":\"(null)\",\"mini_program_scene\":null,\"sdk_info\":{\"sdk_version\":\"1.0.0\",\"sdk_type\":\"ios\"},\"device_info\":{\"device_id\":\"\",\"device_model\":\"iPhone 8\",\"device_brand\":\"iphone\",\"device_type\":\"phone\",\"device_uuid\":\"57AAD570-D38B-46AF-91A2-3C6D70D2FAA7\",\"android_id\":\"\",\"imei\":\"\",\"mac\":\"\",\"user_agent\":\"\",\"idfa\":\"E15AF7BF-EF16-4828-BA06-78CBA67B9874\",\"idfv\":\"42DF704A-8841-4F9F-87B7-696E97CD3083\",\"oaid\":\"\"},\"screen\":{\"screen_height\":\"667\",\"screen_width\":\"375\"},\"os\":{\"os_system\":\"ios\",\"os_version\":\"13.6.1\"},\"browser\":null,\"wechat\":null,\"referrer_info\":null,\"market_name\":\"App Store\",\"utm_info\":null},\"events\":[{\"ios.cold_start\":{\"cold_start\":\"1\",\"event_code\":\"cold_start\",\"event_name\":\"冷启动\",\"event_type\":\"cold_start\",\"send_type\":\"all\",\"page_type\":\"ios\",\"ts\":\"1608523241749\",\"network_type\":\"UNKNOW\",\"location_info\":{\"ip\":\"58.213.138.162\"},\"business_info\":null}}]}}]",
        "[{\"ios.ios\":{\"common\":{\"message_id\":\"1\",\"project_id\":\"8ff7136b-d40a-4571-903e-bb2e4aefceeb\",\"app_id\":\"18e94303355ed4e7fe20f928cb663f99c7de0905\",\"tenant_id\":\"c65a02414ffc1f1e54f257cb5f27325b6f1d0cec\",\"upload_time\":\"1608523241750\",\"Apex_id\":\"57AAD570-D38B-46AF-91A2-3C6D70D2FAA7\",\"session_id\":\"session_1608523241749\",\"app_version\":\"1.0\",\"app_package_id\":\"com.apex.ApexDataTracker\",\"carrier\":\"(null)\",\"mini_program_scene\":null,\"sdk_info\":{\"sdk_version\":\"1.0.0\",\"sdk_type\":\"ios\"},\"device_info\":{\"device_id\":\"\",\"device_model\":\"iPhone 8\",\"device_brand\":\"iphone\",\"device_type\":\"phone\",\"device_uuid\":\"57AAD570-D38B-46AF-91A2-3C6D70D2FAA7\",\"android_id\":\"\",\"imei\":\"\",\"mac\":\"\",\"user_agent\":\"\",\"idfa\":\"E15AF7BF-EF16-4828-BA06-78CBA67B9874\",\"idfv\":\"42DF704A-8841-4F9F-87B7-696E97CD3083\",\"oaid\":\"\"},\"screen\":{\"screen_height\":\"667\",\"screen_width\":\"375\"},\"os\":{\"os_system\":\"ios\",\"os_version\":\"13.6.1\"},\"browser\":null,\"wechat\":null,\"referrer_info\":null,\"market_name\":\"App Store\",\"utm_info\":null},\"events\":[{\"ios.cold_start\":{\"cold_start\":\"1\",\"event_code\":\"cold_start\",\"event_name\":\"冷启动\",\"event_type\":\"cold_start\",\"send_type\":\"all\",\"page_type\":\"ios\",\"ts\":\"1608523241749\",\"network_type\":\"UNKNOW\",\"location_info\":{\"ip\":\"58.213.138.162\"},\"business_info\":null}}]}}]"
      )
      val random = new Random
      val data:String = val_list(random.nextInt(val_list.length))
      data
    }

    def getArray(args: List[String]) :ArrayBuffer[Map[String,Array[Byte]]] = {
      val all_data = ArrayBuffer[Map[String,Array[Byte]]]()
      for (elem <- val_list) {
        val map = Map("data"->javaClass2.gzip(javaClass1.jsonToAvroBin(schema_str, elem)))
        all_data+=map
      }
      println(all_data)
      all_data
    }
  }
}

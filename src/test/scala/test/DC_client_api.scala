package test
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import test.config_map.{app_id, client_access_token}

class DC_client_api {
  object get_app_info{
    val Authorization_headers_json = Map("Authorization" -> "Bearer ".concat(client_access_token), "Content-Type" -> "application/json")
    val get_app_info_api =
      exec(
        http("get_app_info_api")
          .get("/nexus/api/dc/product/appId/".concat(app_id))

          .headers(Authorization_headers_json)
          //.body(ByteArrayBody(javaClass2.gzip(javaClass1.jsonToAvroBin(schema_str, random_class.randomDataList.randomList(val_list)))))
          .check(status.is(200))
          .check(jsonPath("$.data").notNull))

    //.feed(regionFeeder)


  }

}

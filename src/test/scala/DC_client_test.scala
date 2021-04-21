import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import test.DC_client_api
import test.upload_log.mapTypeFeeder


class DC_client_test extends Simulation {

  val httpConfig = http
      .baseUrl(test.config_map.host)

  //val feeder = csv("search.csv").batch.random


  val DC_client_api = new DC_client_api

  val get_app_info_test = scenario("get_app_info_test")
    .repeat(test.config_map.repeat) {
      exec(DC_client_api.get_app_info.get_app_info_api)
    }
  setUp(
    get_app_info_test.inject(rampUsersPerSec(test.config_map.user) to (test.config_map.user) during (test.config_map.during)))
    .protocols(httpConfig)

}
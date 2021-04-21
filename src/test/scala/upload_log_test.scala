import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import test.upload_log.mapTypeFeeder
import test.DC_client_api




class upload_log_test extends Simulation {

  val httpConfig = http
    .baseUrl(test.config_map.host)

  //val feeder = csv("search.csv").batch.random
  val upload_log = scenario("upload_ios")
    .feed(mapTypeFeeder)
    .repeat(test.config_map.repeat) {


      exec(test.upload_log.scn)
  }

  setUp(
    upload_log.inject(rampUsersPerSec(test.config_map.user) to (test.config_map.user) during (test.config_map.during)))
    .protocols(httpConfig)

}
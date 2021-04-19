import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import test.upload_log.mapTypeFeeder



class upload_log_test extends Simulation {

  val httpConfig = http
    .baseUrl(test.url_map.test)

  //val feeder = csv("search.csv").batch.random
  val staff = scenario("upload_ios")
    .feed(mapTypeFeeder)

    .exec(test.upload_log.scn)
  setUp(
    staff.inject(rampUsersPerSec(1) to (1) during (2)))
    .protocols(httpConfig)

}